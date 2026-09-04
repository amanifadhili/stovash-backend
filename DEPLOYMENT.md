# Stovash Backend Deployment Guide

## 🚀 Deployment Overview

The Stovash backend uses a hybrid deployment approach:
- **PM2** for application process management
- **Docker** for infrastructure services (PostgreSQL, Redis, RabbitMQ, MinIO)
- **Nginx** as reverse proxy
- **GitHub Actions** for CI/CD automation

## 📋 Manual Deployment on VPS

```bash
# SSH into VPS
ssh root@169.58.231.178

# Navigate to backend directory
cd /home/deploy/stovash/backend

# Run deployment commands
./deploy.sh                    # Production deployment
./deploy.sh --demo              # Demo deployment
./deploy.sh --rollback          # Rollback to previous version
./deploy.sh --status            # Check deployment status
```

## 🔄 Automated Deployment

### Branch-Based Deployment
- **Push to `production` branch** → Auto deploys to production environment
- **Push to `main` branch** → Auto deploys to demo environment
- **Manual trigger** → Deploy from GitHub Actions tab

### GitHub Actions Workflow
- Workflow: `.github/workflows/backend-deploy.yml`
- Triggers: Push to main/production branches, manual dispatch
- Process: SSH to VPS → Run deployment script → Health checks

## 🏗️ Infrastructure Services

### Docker Services (managed via Docker Compose)
- **PostgreSQL**: Port 5433 (avoiding conflict with default 5432)
- **Redis**: Port 6379
- **RabbitMQ**: Port 5672 (AMQP), 15672 (Management UI)
- **MinIO**: Ports 9000-9001 (Object storage)

### Start/Stop Infrastructure
```bash
cd /home/deploy/stovash/backend/releases/normal_20260901203634/infra
docker-compose up -d           # Start all services
docker-compose down             # Stop all services
docker-compose ps               # Check status
docker-compose logs postgres    # Check PostgreSQL logs
```

## 🎯 Application Services

### PM2 Managed Services
- **API Gateway**: Port 5051
- **Identity Service**: Port 5052
- **Accounting Service**: Port 5053
- **Customer Service**: Port 5054
- **Inventory Service**: Port 5055
- **Sales Service**: Port 5056
- **Purchase Service**: Port 5057
- **Treasury Service**: Port 5058
- **Tenant Service**: Port 5059
- **Notification Service**: Port 5060
- **Supplier Service**: Port 5064

### PM2 Commands
```bash
pm2 status                    # Check process status
pm2 logs stovash-backend      # View logs
pm2 restart stovash-backend   # Restart application
pm2 stop stovash-backend     # Stop application
pm2 save                     # Save PM2 configuration
```

## 🔧 Database Management

### Prisma Schema Updates
```bash
cd /home/deploy/stovash/backend/current

# Generate Prisma clients for all services
npx prisma generate --schema apps/identity-service/prisma/schema.prisma
npx prisma generate --schema apps/accounting-service/prisma/schema.prisma
npx prisma generate --schema apps/customer-service/prisma/schema.prisma
npx prisma generate --schema apps/inventory-service/prisma/schema.prisma
npx prisma generate --schema apps/sales-service/prisma/schema.prisma
npx prisma generate --schema apps/purchase-service/prisma/schema.prisma
npx prisma generate --schema apps/treasury-service/prisma/schema.prisma
npx prisma generate --schema apps/tenant-service/prisma/schema.prisma
npx prisma generate --schema apps/supplier-service/prisma/schema.prisma

# Push schema changes to database
npx prisma db push --schema apps/identity-service/prisma/schema.prisma --skip-generate
# ... repeat for other services
```

### Database Connection
- **User**: stovash
- **Databases**: electronic_shop, identity_db, tenant_db, customer_db, supplier_db, accounting_db, inventory_db, sales_db, purchase_db, treasury_db, report_db
- **Host**: 127.0.0.1:5433

## 🔐 Security & Secrets

### Environment Variables
Located in: `/home/deploy/stovash/backend/shared/.env`

### GitHub Secrets (for CI/CD)
- `VPS_HOST`: 169.58.231.178
- `VPS_USER`: root
- `VPS_SSH_KEY`: SSH private key for GitHub Actions
- `VPS_PORT`: 22

### Important Notes
- Never commit `.env` files
- Rotate exposed credentials immediately
- Use strong passwords for database and services
- Keep SSH keys secure

## 🐛 Troubleshooting

### Application Not Responding
```bash
# Check PM2 status
pm2 status

# Check logs
pm2 logs stovash-backend --lines 100

# Restart application
pm2 restart stovash-backend

# Check infrastructure
cd /home/deploy/stovash/backend/releases/normal_20260901203634/infra
docker-compose ps
docker-compose logs
```

### Database Connection Issues
```bash
# Check PostgreSQL status
docker-compose exec infra-postgres-1 pg_isready

# Check database exists
docker-compose exec infra-postgres-1 psql -U stovash -d electronic_shop -c "\l"

# Test connection
docker-compose exec infra-postgres-1 psql -U stovash -d electronic_shop -c "SELECT 1;"
```

### Port Conflicts
```bash
# Check what's using ports
netstat -tlnp | grep -E '505[0-9]|5433|6379|5672'

# Kill processes holding ports
pkill -f "node dist/main.js"
```

## 📊 Monitoring

### Health Checks
```bash
# API Gateway health
curl http://localhost:5051/health

# Ready check (all services)
curl http://localhost:5051/ready

# Public API health
curl https://api.stovash.com/health
```

### Documentation
- Swagger UI: https://api.stovash.com/docs
- API Gateway: http://localhost:5051 (VPS)
- RabbitMQ Management: http://localhost:15672 (VPS)

## 🔄 Rollback Procedure

If deployment fails:
```bash
cd /home/deploy/stovash/backend
./deploy.sh --rollback
```

The script automatically:
1. Identifies previous release
2. Updates symlink to previous version
3. Restarts PM2
4. Performs health check

## 📁 Directory Structure

```
/home/deploy/stovash/backend/
├── current/                    # Symlink to active release
├── releases/                   # All release directories
│   ├── production_20260902074623/
│   ├── production_20260903081234/
│   └── demo_20260903091567/
├── shared/                     # Shared configuration
│   └── .env                    # Environment variables
└── deploy.sh                   # Deployment script
```

## 🎯 Deployment Strategy

### Zero-Downtime Deployment
1. Create new release directory
2. Clone and build new version
3. Run database migrations
4. Update symlink (atomic operation)
5. Restart PM2 gracefully
6. Health check verification
7. Automatic rollback on failure

### Release Management
- Keeps last 5 releases
- Automatic cleanup of old releases
- Timestamped release directories
- Branch-based environments

## 📞 Support

For deployment issues:
1. Check logs: `pm2 logs stovash-backend`
2. Check infrastructure: `docker-compose ps`
3. Check deployment log: `/home/deploy/stovash/backend/deployments.log`
4. Use rollback if needed: `./deploy.sh --rollback`

---

**Last Updated**: 2026-09-04
**Deployment Status**: ✅ Active and working