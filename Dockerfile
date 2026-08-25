# syntax=docker/dockerfile:1
ARG NODE_VERSION=22-bookworm-slim

FROM node:${NODE_VERSION} AS builder
WORKDIR /app
RUN apt-get update \
  && apt-get install -y --no-install-recommends openssl python3 make g++ \
  && rm -rf /var/lib/apt/lists/*
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
RUN npm ci
# Only real service schemas — skip copies under src/generated/prisma.
RUN for schema in apps/*/prisma/schema.prisma; do \
      echo "prisma generate $schema"; \
      npx --yes prisma@5.22.0 generate --schema="$schema"; \
    done
RUN npm run build

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
