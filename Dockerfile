ARG NODE_VERSION=22-bookworm-slim

# ── deps layer: npm ci cached as long as package-lock.json is unchanged ──────
FROM node:${NODE_VERSION} AS deps
WORKDIR /app
RUN apt-get update \
  && apt-get install -y --no-install-recommends openssl python3 make g++ \
  && rm -rf /var/lib/apt/lists/*
# Copy the full source but exclude node_modules / dist via .dockerignore.
# We copy everything so npm workspaces can resolve all workspace package.json.
# The key cache benefit: if package-lock.json hasn't changed, Docker reuses
# the npm ci layer even when source files change.
COPY package.json package-lock.json ./
COPY packages/ ./packages/
COPY frameworks/ ./frameworks/
COPY apps/ ./apps/
RUN npm ci

# ── builder layer ─────────────────────────────────────────────────────────────
FROM node:${NODE_VERSION} AS builder
WORKDIR /app
RUN apt-get update \
  && apt-get install -y --no-install-recommends openssl python3 make g++ \
  && rm -rf /var/lib/apt/lists/*
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:5432/electronic_shop
ENV IDENTITY_DATABASE_URL=$DATABASE_URL
ENV TENANT_DATABASE_URL=$DATABASE_URL
ENV CUSTOMER_DATABASE_URL=$DATABASE_URL
ENV SUPPLIER_DATABASE_URL=$DATABASE_URL
ENV ACCOUNTING_DATABASE_URL=$DATABASE_URL
ENV INVENTORY_DATABASE_URL=$DATABASE_URL
ENV SALES_DATABASE_URL=$DATABASE_URL
ENV PURCHASE_DATABASE_URL=$DATABASE_URL
ENV TREASURY_DATABASE_URL=$DATABASE_URL
ENV REPORT_DATABASE_URL=$DATABASE_URL
# Only real service schemas — skip copies under src/generated/prisma.
RUN for schema in apps/*/prisma/schema.prisma; do \
  echo "prisma generate $schema"; \
  npx --yes prisma@5.22.0 generate --schema="$schema"; \
  done
RUN npm run build

# ── runner layer ──────────────────────────────────────────────────────────────
FROM node:${NODE_VERSION}
WORKDIR /app
RUN apt-get update \
  && apt-get install -y --no-install-recommends openssl \
  && rm -rf /var/lib/apt/lists/*
ENV NODE_ENV=production
ENV PORT=5051
COPY --from=builder /app /app
EXPOSE 5051
HEALTHCHECK --interval=30s --timeout=8s --start-period=90s --retries=5 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||5051)+'/docs').then((r)=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
CMD ["node", "dist/server.js"]
