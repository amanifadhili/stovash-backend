-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'STAFF',
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "credentials" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "credentials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tokens" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "used" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mfa_secrets" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "secret" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "backupCodes" TEXT[] NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "mfa_secrets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_permissions" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "permissionKey" TEXT NOT NULL,
    "isGranted" BOOLEAN NOT NULL DEFAULT true,
    "scope" TEXT NOT NULL DEFAULT 'ALL',
    "allowedShopIds" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
    "grantedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),
    "grantedBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permission_templates" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "isSystem" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "permission_templates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "template_permissions" (
    "id" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    "permissionKey" TEXT NOT NULL,
    "scope" TEXT NOT NULL DEFAULT 'ALL',
    "allowedShopIds" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "template_permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_template_assignments" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "user_template_assignments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permission_audit_logs" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "actorId" TEXT NOT NULL,
    "targetUserId" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "permissionKey" TEXT,
    "oldValue" TEXT,
    "newValue" TEXT,
    "reason" TEXT,
    "traceId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "permission_audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
CREATE INDEX "users_tenantId_idx" ON "users"("tenantId");
CREATE INDEX "users_email_idx" ON "users"("email");
CREATE UNIQUE INDEX "credentials_userId_key" ON "credentials"("userId");
CREATE INDEX "credentials_userId_idx" ON "credentials"("userId");
CREATE UNIQUE INDEX "sessions_token_key" ON "sessions"("token");
CREATE INDEX "sessions_userId_idx" ON "sessions"("userId");
CREATE INDEX "sessions_token_idx" ON "sessions"("token");
CREATE UNIQUE INDEX "tokens_token_key" ON "tokens"("token");
CREATE INDEX "tokens_userId_idx" ON "tokens"("userId");
CREATE INDEX "tokens_token_idx" ON "tokens"("token");
CREATE UNIQUE INDEX "mfa_secrets_userId_key" ON "mfa_secrets"("userId");
CREATE INDEX "mfa_secrets_userId_idx" ON "mfa_secrets"("userId");
CREATE UNIQUE INDEX "user_permissions_userId_permissionKey_key" ON "user_permissions"("userId", "permissionKey");
CREATE INDEX "user_permissions_tenantId_idx" ON "user_permissions"("tenantId");
CREATE INDEX "user_permissions_userId_idx" ON "user_permissions"("userId");
CREATE INDEX "user_permissions_permissionKey_idx" ON "user_permissions"("permissionKey");
CREATE INDEX "user_permissions_expiresAt_idx" ON "user_permissions"("expiresAt");
CREATE UNIQUE INDEX "permission_templates_tenantId_name_key" ON "permission_templates"("tenantId", "name");
CREATE INDEX "permission_templates_tenantId_idx" ON "permission_templates"("tenantId");
CREATE UNIQUE INDEX "template_permissions_templateId_permissionKey_key" ON "template_permissions"("templateId", "permissionKey");
CREATE INDEX "template_permissions_templateId_idx" ON "template_permissions"("templateId");
CREATE UNIQUE INDEX "user_template_assignments_userId_templateId_key" ON "user_template_assignments"("userId", "templateId");
CREATE INDEX "user_template_assignments_userId_idx" ON "user_template_assignments"("userId");
CREATE INDEX "user_template_assignments_templateId_idx" ON "user_template_assignments"("templateId");
CREATE INDEX "permission_audit_logs_tenantId_idx" ON "permission_audit_logs"("tenantId");
CREATE INDEX "permission_audit_logs_targetUserId_idx" ON "permission_audit_logs"("targetUserId");
CREATE INDEX "permission_audit_logs_actorId_idx" ON "permission_audit_logs"("actorId");
CREATE INDEX "permission_audit_logs_createdAt_idx" ON "permission_audit_logs"("createdAt");

-- AddForeignKey
ALTER TABLE "user_permissions" ADD CONSTRAINT "user_permissions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "template_permissions" ADD CONSTRAINT "template_permissions_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "permission_templates"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "user_template_assignments" ADD CONSTRAINT "user_template_assignments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "user_template_assignments" ADD CONSTRAINT "user_template_assignments_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "permission_templates"("id") ON DELETE CASCADE ON UPDATE CASCADE;