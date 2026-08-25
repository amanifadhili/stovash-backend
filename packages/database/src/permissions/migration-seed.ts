/**
 * STOVASH RBAC System Role & Permission Template Seed Migration
 *
 * Seeds initial system permission templates and migrates legacy user roles
 * to the dynamic 2-role model: ADMIN and STAFF + Template Assignments.
 */

import { SYSTEM_PERMISSION_CATALOG } from './catalog';

export interface SystemTemplateDefinition {
  name: string;
  role: 'STAFF';
  description: string;
  permissionKeys: string[];
}

export const SYSTEM_TEMPLATES: SystemTemplateDefinition[] = [
  {
    name: 'Sales Staff Default',
    role: 'STAFF',
    description: 'Standard sales operations, customer handling, quotation generation, and POS unit selling.',
    permissionKeys: [
      'CreateSale',
      'GetSales',
      'GetSaleById',
      'ConfirmSale',
      'FulfillSale',
      'CreateWarranty',
      'GetProducts',
      'GetProductById',
      'GetStockUnits',
      'GetAvailableInventoryItems',
      'CreateContact',
      'GetContacts',
    ],
  },
  {
    name: 'Inventory Manager Extended',
    role: 'STAFF',
    description: 'Comprehensive inventory control, product pricing, stock receiving, incidents, and supplier purchasing.',
    permissionKeys: [
      'AddProduct',
      'GetProducts',
      'GetProductById',
      'SetProductPrice',
      'RecordInventoryUpgrade',
      'RecordInventoryIncident',
      'CreateBrand',
      'UpdateBrand',
      'GetBrands',
      'CreateCategory',
      'UpdateCategory',
      'GetCategories',
      'ReceivePurchaseUnit',
      'ConfirmPurchaseUnit',
      'GetStockMovements',
      'GetOwnedUnsoldStockPosition',
      'GetDeviceLife',
      'GetRentals',
      'CreatePurchase',
      'ConfirmPurchase',
      'RecordPurchasePayment',
    ],
  },
  {
    name: 'Accountant Finance',
    role: 'STAFF',
    description: 'Financial ledger management, expense entries, treasury movements, reconciliation, and profit analytics.',
    permissionKeys: [
      'GetAccountingAccounts',
      'GetJournals',
      'GetReceivables',
      'GetEngineReport',
      'RecordGeneralExpense',
      'RecordPettyCashExpense',
      'PostFinancialCorrection',
      'GetTreasuryLoans',
      'GetProfitTransferPosition',
      'GetSoldUnitProfit',
      'GetFinancialStructure',
      'GetDailyPosition',
      'GetMonthlyPosition',
      'GetFinancialOverview',
      'GetDashboardProfitAnalytics',
      'GetDashboardCashFlowAnalytics',
      'GetDashboardArApAnalytics',
      'GetDashboardSalesAnalytics',
    ],
  },
  {
    name: 'Cashier POS',
    role: 'STAFF',
    description: 'Front-desk point of sale, payment collection, warranty creation, and inventory availability lookup.',
    permissionKeys: [
      'CreateSale',
      'ConfirmSale',
      'RecordSalePayment',
      'CreateWarranty',
      'GetAvailableInventoryItems',
      'GetProducts',
    ],
  },
];

/**
 * Executes system template seeding and migrates existing users to the 2-role dynamic architecture.
 */
export async function seedPermissionsAndMigrateUsers(prismaClient: any): Promise<{
  seededTemplatesCount: number;
  migratedUsersCount: number;
}> {
  let seededTemplatesCount = 0;
  let migratedUsersCount = 0;

  // Step 1: Seed / Upsert System Permission Templates
  const templateMap = new Map<string, string>(); // name -> templateId

  for (const tplDef of SYSTEM_TEMPLATES) {
    let template = await prismaClient.permissionTemplate.findFirst({
      where: {
        tenantId: 'system',
        name: tplDef.name,
      },
    });

    if (template) {
      template = await prismaClient.permissionTemplate.update({
        where: { id: template.id },
        data: {
          description: tplDef.description,
          isSystem: true,
        },
      });
    } else {
      template = await prismaClient.permissionTemplate.create({
        data: {
          tenantId: 'system',
          name: tplDef.name,
          description: tplDef.description,
          isSystem: true,
        },
      });
    }

    templateMap.set(tplDef.name, template.id);
    seededTemplatesCount++;

    // Seed Template Permission links
    for (const key of tplDef.permissionKeys) {
      const catalogItem = SYSTEM_PERMISSION_CATALOG.find((p) => p.key === key);
      if (!catalogItem) continue;

      const existingTP = await prismaClient.templatePermission.findFirst({
        where: {
          templateId: template.id,
          permissionKey: key,
        },
      });

      if (existingTP) {
        await prismaClient.templatePermission.update({
          where: { id: existingTP.id },
          data: { scope: 'ALL' },
        });
      } else {
        await prismaClient.templatePermission.create({
          data: {
            templateId: template.id,
            permissionKey: key,
            scope: 'ALL',
            allowedShopIds: [],
          },
        });
      }
    }
  }

  // Step 2: Migrate legacy non-admin users to STAFF role + assign appropriate template
  const legacyUsers = await prismaClient.user.findMany({
    where: {
      role: { in: ['MANAGER', 'ACCOUNTANT', 'STAFF'] },
    },
  });

  for (const user of legacyUsers) {
    let targetTemplateName = 'Sales Staff Default';
    if (user.role === 'MANAGER') targetTemplateName = 'Inventory Manager Extended';
    if (user.role === 'ACCOUNTANT') targetTemplateName = 'Accountant Finance';

    const targetTemplateId = templateMap.get(targetTemplateName);

    // Update user role to STAFF
    await prismaClient.user.update({
      where: { id: user.id },
      data: { role: 'STAFF' },
    });

    // Assign template to user if template found
    if (targetTemplateId) {
      const existingUTA = await prismaClient.userTemplateAssignment.findFirst({
        where: {
          userId: user.id,
          templateId: targetTemplateId,
        },
      });

      if (!existingUTA) {
        await prismaClient.userTemplateAssignment.create({
          data: {
            userId: user.id,
            templateId: targetTemplateId,
            assignedBy: 'system-migration',
          },
        });
      }
    }

    migratedUsersCount++;
  }

  return {
    seededTemplatesCount,
    migratedUsersCount,
  };
}
