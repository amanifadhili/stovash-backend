export interface SystemPermissionDefinition {
  key: string;               // Stable identifier (matches gateway command)
  domain: 'sales' | 'inventory' | 'purchases' | 'treasury' | 'accounting' | 'admin';
  name: string;              // Human-readable title
  description: string;       // Detailed business action description
  isSensitive: boolean;      // Requires explicit admin highlight in UI
  isFinancial: boolean;      // Touches accounting ledger / treasury funds
  supportsScope: boolean;    // Supports OWN vs ALL filtering
  supportsLocation: boolean; // Subject to shopId restriction
  isAdminOnly?: boolean;     // Requires ADMIN system role strictly
  dependencies: string[];    // Required prerequisite permissions
}

export const SYSTEM_PERMISSION_CATALOG: SystemPermissionDefinition[] = [
  // --- SALES DOMAIN ---
  {
    key: 'CreateSale',
    domain: 'sales',
    name: 'Create Sale Draft',
    description: 'Draft customer sales orders and POS transactions',
    isSensitive: false,
    isFinancial: true,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['GetProducts']
  },
  {
    key: 'ProcessSale',
    domain: 'sales',
    name: 'Process Complete Sale',
    description: 'Execute end-to-end POS checkout process',
    isSensitive: false,
    isFinancial: true,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['CreateSale']
  },
  {
    key: 'ConfirmSale',
    domain: 'sales',
    name: 'Confirm Sale',
    description: 'Finalize sale and commit stock reservation',
    isSensitive: true,
    isFinancial: true,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['CreateSale']
  },
  {
    key: 'CancelSale',
    domain: 'sales',
    name: 'Cancel Sale Order',
    description: 'Cancel unfulfilled sale order',
    isSensitive: true,
    isFinancial: false,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['ConfirmSale']
  },
  {
    key: 'FulfillSale',
    domain: 'sales',
    name: 'Fulfill Sale Order',
    description: 'Hand over physical stock items to customer',
    isSensitive: false,
    isFinancial: false,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['ConfirmSale']
  },
  {
    key: 'RecordSalePayment',
    domain: 'sales',
    name: 'Record Sale Payment',
    description: 'Accept cash, MoMo, or bank payment for sale',
    isSensitive: true,
    isFinancial: true,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['ConfirmSale']
  },
  {
    key: 'CreateSaleReturn',
    domain: 'sales',
    name: 'Create Sale Return',
    description: 'Log customer item return request',
    isSensitive: false,
    isFinancial: true,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['ConfirmSale']
  },
  {
    key: 'IssueRefund',
    domain: 'sales',
    name: 'Process Customer Refund',
    description: 'Disburse monetary refund to customer',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['ConfirmSale']
  },
  {
    key: 'ProcessSaleReplacement',
    domain: 'sales',
    name: 'Replace Warranty Unit',
    description: 'Issue unit replacement for defective product',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['ConfirmSale']
  },
  {
    key: 'AssessReturnedItem',
    domain: 'sales',
    name: 'Assess Return Quality',
    description: 'Grade returned item condition for restock or loss',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['ConfirmSale']
  },
  {
    key: 'CreateWarranty',
    domain: 'sales',
    name: 'Issue Warranty',
    description: 'Generate serial warranty certificate',
    isSensitive: false,
    isFinancial: false,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['ConfirmSale']
  },
  {
    key: 'ConvertQuotationToSale',
    domain: 'sales',
    name: 'Convert Quotation to Sale',
    description: 'Convert draft price quotation into active sale',
    isSensitive: false,
    isFinancial: true,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['CreateSale']
  },
  {
    key: 'RecordPartialPayment',
    domain: 'sales',
    name: 'Record Partial Payment',
    description: 'Accept partial installment on customer sale',
    isSensitive: false,
    isFinancial: true,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['ConfirmSale']
  },
  {
    key: 'RecordBonus',
    domain: 'sales',
    name: 'Record Sales Bonus',
    description: 'Record staff sales incentive bonus',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['ConfirmSale']
  },
  {
    key: 'ProcessLoanSale',
    domain: 'sales',
    name: 'Process Credit/Loan Sale',
    description: 'Issue customer sale on credit terms',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['ConfirmSale']
  },
  {
    key: 'GetSales',
    domain: 'sales',
    name: 'View Sales History',
    description: 'Query sales list and transaction details',
    isSensitive: false,
    isFinancial: false,
    supportsScope: true,
    supportsLocation: true,
    dependencies: []
  },
  {
    key: 'GetSaleById',
    domain: 'sales',
    name: 'View Sale Details',
    description: 'Query single sale detail view',
    isSensitive: false,
    isFinancial: false,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['GetSales']
  },
  {
    key: 'GetSaleHistory',
    domain: 'sales',
    name: 'View Sale Log History',
    description: 'View lifecycle audit log for sale',
    isSensitive: false,
    isFinancial: false,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['GetSales']
  },
  {
    key: 'GetDeviceSales',
    domain: 'sales',
    name: 'View Device Sales',
    description: 'Query serial device sales records',
    isSensitive: false,
    isFinancial: false,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['GetSales']
  },
  {
    key: 'GetSoldUnitProfit',
    domain: 'sales',
    name: 'View Sold Unit Profit',
    description: 'Query gross profit margins on sold units',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetSales']
  },
  {
    key: 'GetDashboardSalesAnalytics',
    domain: 'sales',
    name: 'View Sales Analytics',
    description: 'Access sales summary charts and analytics',
    isSensitive: false,
    isFinancial: false,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['GetSales']
  },
  {
    key: 'GetDashboardPaymentMethodMix',
    domain: 'sales',
    name: 'View Payment Mix',
    description: 'Access payment method breakdown metrics',
    isSensitive: false,
    isFinancial: false,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['GetSales']
  },
  {
    key: 'GetDashboardProductPerformance',
    domain: 'sales',
    name: 'View Product Performance',
    description: 'Access top-selling product metrics',
    isSensitive: false,
    isFinancial: false,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['GetSales']
  },

  // --- INVENTORY DOMAIN ---
  {
    key: 'AddProduct',
    domain: 'inventory',
    name: 'Add Catalog Product',
    description: 'Create new catalog master product SKU',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetProducts']
  },
  {
    key: 'UpdateProduct',
    domain: 'inventory',
    name: 'Edit Catalog Product',
    description: 'Modify catalog product specifications',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['AddProduct']
  },
  {
    key: 'DeleteProduct',
    domain: 'inventory',
    name: 'Delete Catalog Product',
    description: 'Soft-delete catalog product SKU',
    isSensitive: true,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['UpdateProduct']
  },
  {
    key: 'UpdateProductStatus',
    domain: 'inventory',
    name: 'Toggle Product Status',
    description: 'Activate or archive product catalog item',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['UpdateProduct']
  },
  {
    key: 'SetProductPrice',
    domain: 'inventory',
    name: 'Set Product Selling Price',
    description: 'Modify retail prices for product SKUs',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['UpdateProduct']
  },
  {
    key: 'GetProducts',
    domain: 'inventory',
    name: 'View Product Catalog',
    description: 'Query product catalog listing',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: []
  },
  {
    key: 'GetProductById',
    domain: 'inventory',
    name: 'View Product Details',
    description: 'Query single product SKU details',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetProducts']
  },
  {
    key: 'GetProductBySku',
    domain: 'inventory',
    name: 'Lookup Product SKU',
    description: 'Lookup product by barcode or SKU',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetProducts']
  },
  {
    key: 'CreateBrand',
    domain: 'inventory',
    name: 'Create Product Brand',
    description: 'Create new manufacturer brand',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetBrands']
  },
  {
    key: 'UpdateBrand',
    domain: 'inventory',
    name: 'Update Brand',
    description: 'Edit brand properties',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['CreateBrand']
  },
  {
    key: 'DeleteBrand',
    domain: 'inventory',
    name: 'Delete Brand',
    description: 'Remove brand entry',
    isSensitive: true,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['UpdateBrand']
  },
  {
    key: 'GetBrands',
    domain: 'inventory',
    name: 'View Brands',
    description: 'List manufacturer brands',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: []
  },
  {
    key: 'GetBrandById',
    domain: 'inventory',
    name: 'View Brand Details',
    description: 'Get brand detail entry',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetBrands']
  },
  {
    key: 'CreateCategory',
    domain: 'inventory',
    name: 'Create Category',
    description: 'Create product category grouping',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetCategories']
  },
  {
    key: 'UpdateCategory',
    domain: 'inventory',
    name: 'Update Category',
    description: 'Edit product category grouping',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['CreateCategory']
  },
  {
    key: 'DeleteCategory',
    domain: 'inventory',
    name: 'Delete Category',
    description: 'Remove product category grouping',
    isSensitive: true,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['UpdateCategory']
  },
  {
    key: 'GetCategories',
    domain: 'inventory',
    name: 'View Categories',
    description: 'List product categories',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: []
  },
  {
    key: 'GetCategoryById',
    domain: 'inventory',
    name: 'View Category Details',
    description: 'Query single category details',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetCategories']
  },
  {
    key: 'AddInventoryItem',
    domain: 'inventory',
    name: 'Intake Serialized Unit',
    description: 'Add single serialized device unit into stock',
    isSensitive: false,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetProducts']
  },
  {
    key: 'GetStockUnits',
    domain: 'inventory',
    name: 'View Stock Units',
    description: 'Query serialized inventory items',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: []
  },
  {
    key: 'GetOwnedUnsoldStockPosition',
    domain: 'inventory',
    name: 'View Unsold Stock Position',
    description: 'Query total valuation of unsold stock',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetStockUnits']
  },
  {
    key: 'GetDashboardInventoryAnalytics',
    domain: 'inventory',
    name: 'View Inventory Analytics',
    description: 'Access inventory analytics metrics',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetStockUnits']
  },
  {
    key: 'GetDeviceLife',
    domain: 'inventory',
    name: 'View Device Lifecycle',
    description: 'Track device history from intake to sale',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetStockUnits']
  },
  {
    key: 'GetAvailableInventoryItems',
    domain: 'inventory',
    name: 'View Available Stock',
    description: 'Query in-stock units available for sale',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetStockUnits']
  },
  {
    key: 'ProcessPosSale',
    domain: 'inventory',
    name: 'Deduct POS Stock',
    description: 'Deduct stock for POS cart checkout',
    isSensitive: false,
    isFinancial: true,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['AddInventoryItem']
  },
  {
    key: 'ApplySaleFulfillment',
    domain: 'inventory',
    name: 'Apply Stock Fulfillment',
    description: 'Mark stock items as physically fulfilled',
    isSensitive: false,
    isFinancial: false,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['AddInventoryItem']
  },
  {
    key: 'ApplySaleReturn',
    domain: 'inventory',
    name: 'Return Unit to Stock',
    description: 'Return customer unit into inventory',
    isSensitive: false,
    isFinancial: true,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['AddInventoryItem']
  },
  {
    key: 'ApplyReturnedItemAssessment',
    domain: 'inventory',
    name: 'Record Assessment Grade',
    description: 'Set quality grade on returned stock unit',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['AddInventoryItem']
  },
  {
    key: 'ReceiveGoods',
    domain: 'inventory',
    name: 'Intake Bulk Goods',
    description: 'Direct intake receiving of stock items',
    isSensitive: false,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['AddInventoryItem']
  },
  {
    key: 'ProcessSalesReturn',
    domain: 'inventory',
    name: 'Process Inventory Return',
    description: 'Handle stock update for sales return',
    isSensitive: false,
    isFinancial: true,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['AddInventoryItem']
  },
  {
    key: 'CreateWarrantyClaim',
    domain: 'inventory',
    name: 'Log Warranty Claim',
    description: 'Log warranty return claim for stock unit',
    isSensitive: false,
    isFinancial: false,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['GetStockUnits']
  },
  {
    key: 'TransferInventory',
    domain: 'inventory',
    name: 'Transfer Inventory',
    description: 'Move stock items between physical shops',
    isSensitive: true,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetStockUnits']
  },
  {
    key: 'RecordInventoryUpgrade',
    domain: 'inventory',
    name: 'Record Device Upgrade',
    description: 'Log SSD/RAM upgrade cost added to device',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['AddInventoryItem']
  },
  {
    key: 'RecordInventoryIncident',
    domain: 'inventory',
    name: 'Log Stock Incident',
    description: 'Log stock loss, theft, or physical damage',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetStockUnits']
  },
  {
    key: 'CreateRental',
    domain: 'inventory',
    name: 'Create Rental Agreement',
    description: 'Log Lend-IN or Lend-OUT stock deal',
    isSensitive: false,
    isFinancial: true,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['GetStockUnits']
  },
  {
    key: 'UpdateRentalStatus',
    domain: 'inventory',
    name: 'Update Rental Status',
    description: 'Return or settle rental unit deal',
    isSensitive: false,
    isFinancial: true,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['CreateRental']
  },
  {
    key: 'GetRentals',
    domain: 'inventory',
    name: 'View Rental Agreements',
    description: 'Query active and historical rentals',
    isSensitive: false,
    isFinancial: false,
    supportsScope: true,
    supportsLocation: true,
    dependencies: []
  },
  {
    key: 'GetStockMovements',
    domain: 'inventory',
    name: 'View Stock Movements',
    description: 'Query movement audit log for inventory',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetStockUnits']
  },
  {
    key: 'CreateContact',
    domain: 'inventory',
    name: 'Create Contact',
    description: 'Create customer or supplier contact profile',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetContacts']
  },
  {
    key: 'GetContacts',
    domain: 'inventory',
    name: 'View Contacts Directory',
    description: 'List customer and partner contacts',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: []
  },

  // --- PURCHASES DOMAIN ---
  {
    key: 'CreatePurchase',
    domain: 'purchases',
    name: 'Draft Purchase Order',
    description: 'Draft purchase order to supplier',
    isSensitive: false,
    isFinancial: true,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['GetSuppliers']
  },
  {
    key: 'AddPurchaseItem',
    domain: 'purchases',
    name: 'Add Purchase Order Item',
    description: 'Add line item to purchase order',
    isSensitive: false,
    isFinancial: true,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['CreatePurchase']
  },
  {
    key: 'UpdatePurchaseItem',
    domain: 'purchases',
    name: 'Update Purchase Line Item',
    description: 'Edit cost or quantity on PO item',
    isSensitive: false,
    isFinancial: true,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['CreatePurchase']
  },
  {
    key: 'RemovePurchaseItem',
    domain: 'purchases',
    name: 'Remove Purchase Line Item',
    description: 'Delete item from draft purchase order',
    isSensitive: false,
    isFinancial: false,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['CreatePurchase']
  },
  {
    key: 'ConfirmPurchase',
    domain: 'purchases',
    name: 'Confirm Purchase Order',
    description: 'Finalize purchase order with supplier',
    isSensitive: true,
    isFinancial: true,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['CreatePurchase']
  },
  {
    key: 'CancelPurchase',
    domain: 'purchases',
    name: 'Cancel Purchase Order',
    description: 'Cancel unfulfilled purchase order',
    isSensitive: true,
    isFinancial: false,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['CreatePurchase']
  },
  {
    key: 'CreatePurchaseReceiving',
    domain: 'purchases',
    name: 'Create Purchase Intake',
    description: 'Create receiving record for incoming shipment',
    isSensitive: false,
    isFinancial: true,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['ConfirmPurchase']
  },
  {
    key: 'AddReceivedItems',
    domain: 'purchases',
    name: 'Add Received Line Items',
    description: 'Attach received stock items to receiving',
    isSensitive: false,
    isFinancial: true,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['CreatePurchaseReceiving']
  },
  {
    key: 'ReceivePurchaseUnit',
    domain: 'purchases',
    name: 'Intake Purchase Unit',
    description: 'Mark individual purchase unit received',
    isSensitive: false,
    isFinancial: true,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['ConfirmPurchase']
  },
  {
    key: 'ConfirmPurchaseUnit',
    domain: 'purchases',
    name: 'Confirm Unit Stock-In',
    description: 'Verify and stock-in purchase unit',
    isSensitive: true,
    isFinancial: true,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['ReceivePurchaseUnit']
  },
  {
    key: 'CancelPurchaseUnit',
    domain: 'purchases',
    name: 'Reject Purchase Unit',
    description: 'Reject defective or missing unit on PO',
    isSensitive: false,
    isFinancial: false,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['ReceivePurchaseUnit']
  },
  {
    key: 'AddReceivedItemCost',
    domain: 'purchases',
    name: 'Record Shipping/Landed Cost',
    description: 'Add freight or customs cost to received items',
    isSensitive: true,
    isFinancial: true,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['ConfirmPurchase']
  },
  {
    key: 'RecordPurchasePayment',
    domain: 'purchases',
    name: 'Pay Supplier AP',
    description: 'Disburse payment against supplier payable',
    isSensitive: true,
    isFinancial: true,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['ConfirmPurchase']
  },
  {
    key: 'CreatePurchaseReturn',
    domain: 'purchases',
    name: 'Create Supplier Return',
    description: 'Initiate stock return to supplier',
    isSensitive: true,
    isFinancial: true,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['ConfirmPurchase']
  },
  {
    key: 'AddPurchaseReturnItems',
    domain: 'purchases',
    name: 'Add Supplier Return Items',
    description: 'Attach items to supplier return',
    isSensitive: false,
    isFinancial: true,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['CreatePurchaseReturn']
  },
  {
    key: 'AddPurchaseDocument',
    domain: 'purchases',
    name: 'Upload Supplier Invoice',
    description: 'Attach invoice or bill document to PO',
    isSensitive: false,
    isFinancial: false,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['CreatePurchase']
  },
  {
    key: 'GetPurchases',
    domain: 'purchases',
    name: 'View Purchases',
    description: 'Query purchase order listing',
    isSensitive: false,
    isFinancial: false,
    supportsScope: true,
    supportsLocation: true,
    dependencies: []
  },
  {
    key: 'GetPurchaseById',
    domain: 'purchases',
    name: 'View Purchase Details',
    description: 'Query single purchase order details',
    isSensitive: false,
    isFinancial: false,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['GetPurchases']
  },
  {
    key: 'GetPurchaseByNumber',
    domain: 'purchases',
    name: 'Lookup Purchase PO Number',
    description: 'Search purchase order by reference number',
    isSensitive: false,
    isFinancial: false,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['GetPurchases']
  },
  {
    key: 'GetPurchaseItems',
    domain: 'purchases',
    name: 'View PO Line Items',
    description: 'Query items attached to purchase orders',
    isSensitive: false,
    isFinancial: false,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['GetPurchases']
  },
  {
    key: 'GetPurchaseReceivings',
    domain: 'purchases',
    name: 'View PO Receivings',
    description: 'Query receiving shipments for PO',
    isSensitive: false,
    isFinancial: false,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['GetPurchases']
  },
  {
    key: 'GetPurchasePayments',
    domain: 'purchases',
    name: 'View Supplier Payments',
    description: 'Query payment disbursements to suppliers',
    isSensitive: false,
    isFinancial: true,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['GetPurchases']
  },
  {
    key: 'GetPurchaseReturns',
    domain: 'purchases',
    name: 'View Supplier Returns',
    description: 'Query stock returns sent to suppliers',
    isSensitive: false,
    isFinancial: false,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['GetPurchases']
  },
  {
    key: 'GetPurchaseDocuments',
    domain: 'purchases',
    name: 'View Supplier Documents',
    description: 'Query invoice files attached to purchases',
    isSensitive: false,
    isFinancial: false,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['GetPurchases']
  },
  {
    key: 'GetPurchaseHistory',
    domain: 'purchases',
    name: 'View PO Audit History',
    description: 'Query lifecycle event log for POs',
    isSensitive: false,
    isFinancial: false,
    supportsScope: true,
    supportsLocation: true,
    dependencies: ['GetPurchases']
  },
  {
    key: 'CreateSupplier',
    domain: 'purchases',
    name: 'Create Supplier',
    description: 'Add new wholesale vendor profile',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetSuppliers']
  },
  {
    key: 'GetSuppliers',
    domain: 'purchases',
    name: 'View Suppliers Directory',
    description: 'List wholesale supplier partners',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: []
  },
  {
    key: 'UpdateSupplier',
    domain: 'purchases',
    name: 'Update Supplier',
    description: 'Edit supplier contact & payment terms',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['CreateSupplier']
  },
  {
    key: 'DeleteSupplier',
    domain: 'purchases',
    name: 'Delete Supplier',
    description: 'Soft-delete vendor profile',
    isSensitive: true,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['UpdateSupplier']
  },

  // --- TREASURY DOMAIN ---
  {
    key: 'RecordOperationalDeposit',
    domain: 'treasury',
    name: 'Record Cash Deposit',
    description: 'Deposit shop till cash into bank account',
    isSensitive: false,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetFinancialStructure']
  },
  {
    key: 'ReconcilePaymentMethod',
    domain: 'treasury',
    name: 'Reconcile Account Till',
    description: 'Reconcile MoMo or card account statement',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetFinancialStructure']
  },
  {
    key: 'CreatePaymentMethod',
    domain: 'treasury',
    name: 'Create Payment Account',
    description: 'Add physical cash box or MoMo channel',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetFinancialStructure']
  },
  {
    key: 'GetPaymentMethods',
    domain: 'treasury',
    name: 'View Payment Accounts',
    description: 'List active payment tills and accounts',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: []
  },
  {
    key: 'CreateTransfer',
    domain: 'treasury',
    name: 'Move Liquidity Funds',
    description: 'Transfer funds between physical accounts',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetFinancialStructure']
  },
  {
    key: 'CreatePhysicalConfirmation',
    domain: 'treasury',
    name: 'Log Cash Verification',
    description: 'Confirm physical presence of cash balance',
    isSensitive: false,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetFinancialStructure']
  },
  {
    key: 'GetTreasuryActivity',
    domain: 'treasury',
    name: 'View Treasury Activity',
    description: 'Query audit stream of cash movements',
    isSensitive: false,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: []
  },
  {
    key: 'RecordTreasuryLoan',
    domain: 'treasury',
    name: 'Record Capital Loan',
    description: 'Inject external owner loan into treasury',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetFinancialStructure']
  },
  {
    key: 'RecordLoanRepayment',
    domain: 'treasury',
    name: 'Repay Capital Loan',
    description: 'Repay owner or capital loan balance',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['RecordTreasuryLoan']
  },
  {
    key: 'GetFinancialStructure',
    domain: 'treasury',
    name: 'View Treasury Structure',
    description: 'View layout of physical cash accounts',
    isSensitive: false,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: []
  },
  {
    key: 'CreatePhysicalAccount',
    domain: 'treasury',
    name: 'Create Treasury Account',
    description: 'Create bank or liquidity vault account',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetFinancialStructure']
  },
  {
    key: 'CreateTreasuryMovement',
    domain: 'treasury',
    name: 'Execute Treasury Movement',
    description: 'Move money across treasury reserves',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetFinancialStructure']
  },
  {
    key: 'GetFundBalances',
    domain: 'treasury',
    name: 'View Account Balances',
    description: 'View real-time physical account balances',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetFinancialStructure']
  },
  {
    key: 'GetTreasuryMovements',
    domain: 'treasury',
    name: 'View Treasury Movements',
    description: 'Query liquidity movement log',
    isSensitive: false,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetFinancialStructure']
  },
  {
    key: 'GetTreasuryLoans',
    domain: 'treasury',
    name: 'View Capital Loans',
    description: 'Query active owner loans and debt balances',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetFinancialStructure']
  },
  {
    key: 'GetProfitTransferPosition',
    domain: 'treasury',
    name: 'View Transferrable Profit',
    description: 'Query profit available for transfer',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetFinancialStructure']
  },
  {
    key: 'RecordReconciliation',
    domain: 'treasury',
    name: 'Submit Till Cash Count',
    description: 'Log physical cash count for daily till shift',
    isSensitive: false,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetFinancialStructure']
  },
  {
    key: 'ApproveReconciliationAdjustment',
    domain: 'treasury',
    name: 'Approve Cash Discrepancy',
    description: 'Approve till cash discrepancy variance',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['RecordReconciliation']
  },
  {
    key: 'GetReconciliations',
    domain: 'treasury',
    name: 'View Cash Counts',
    description: 'Query daily till cash count logs',
    isSensitive: false,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetFinancialStructure']
  },
  {
    key: 'GetDailyPosition',
    domain: 'treasury',
    name: 'View Daily Cash Position',
    description: 'Query daily cash position summary',
    isSensitive: false,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetFinancialStructure']
  },
  {
    key: 'GetMonthlyPosition',
    domain: 'treasury',
    name: 'View Monthly Cash Position',
    description: 'Query monthly cash position summary',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetFinancialStructure']
  },
  {
    key: 'GetFinancialOverview',
    domain: 'treasury',
    name: 'View Financial Dashboard',
    description: 'Access top-level liquidity dashboard',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetFinancialStructure']
  },
  {
    key: 'GetDashboardCashFlowAnalytics',
    domain: 'treasury',
    name: 'View Cash Flow Charts',
    description: 'Access cash flow trends and analytics',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetFinancialStructure']
  },
  {
    key: 'GetDashboardLoanAnalytics',
    domain: 'treasury',
    name: 'View Loan Analytics',
    description: 'Access loan performance charts',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetFinancialStructure']
  },

  // --- ACCOUNTING DOMAIN ---
  {
    key: 'PostJournalEntry',
    domain: 'accounting',
    name: 'Post Journal Entry',
    description: 'Post double-entry journal transaction',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetJournals']
  },
  {
    key: 'CreateLedgerAccount',
    domain: 'accounting',
    name: 'Create Ledger Account',
    description: 'Create account in Chart of Accounts',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetChartOfAccounts']
  },
  {
    key: 'OpenWorkPeriod',
    domain: 'accounting',
    name: 'Open Shift Work Period',
    description: 'Open daily cash register shift',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: []
  },
  {
    key: 'CloseWorkPeriod',
    domain: 'accounting',
    name: 'Close Shift Work Period',
    description: 'Close daily cash register shift',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['OpenWorkPeriod']
  },
  {
    key: 'GetActiveWorkPeriod',
    domain: 'accounting',
    name: 'View Active Work Period',
    description: 'Query status of active shift',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: []
  },
  {
    key: 'GetAccountTransactions',
    domain: 'accounting',
    name: 'View Account Transactions',
    description: 'Query transaction log for ledger account',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetJournals']
  },
  {
    key: 'GetTrialBalance',
    domain: 'accounting',
    name: 'View Trial Balance',
    description: 'Generate Trial Balance report',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetJournals']
  },
  {
    key: 'GetIncomeStatement',
    domain: 'accounting',
    name: 'View Income Statement (P&L)',
    description: 'Generate P&L Income Statement',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetJournals']
  },
  {
    key: 'GetBalanceSheet',
    domain: 'accounting',
    name: 'View Balance Sheet',
    description: 'Generate Balance Sheet statement',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetJournals']
  },
  {
    key: 'RecordExpense',
    domain: 'accounting',
    name: 'Record General Expense',
    description: 'Log expense posting against business',
    isSensitive: false,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetExpenses']
  },
  {
    key: 'GetExpenses',
    domain: 'accounting',
    name: 'View Expenses History',
    description: 'Query business expense log',
    isSensitive: false,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: []
  },
  {
    key: 'GetChartOfAccounts',
    domain: 'accounting',
    name: 'View Chart of Accounts',
    description: 'List ledger accounts hierarchy',
    isSensitive: false,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: []
  },
  {
    key: 'PostFinancialTransaction',
    domain: 'accounting',
    name: 'Post Financial Transaction',
    description: 'Direct posting to financial engine',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetJournals']
  },
  {
    key: 'GetFinancialTransaction',
    domain: 'accounting',
    name: 'View Financial Transaction',
    description: 'Query financial transaction details',
    isSensitive: false,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetJournals']
  },
  {
    key: 'RecordGeneralExpense',
    domain: 'accounting',
    name: 'Record Reserve Expense',
    description: 'Post expense against reserve fund',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetExpenses']
  },
  {
    key: 'RecordWorkerAdvance',
    domain: 'accounting',
    name: 'Record Worker Advance',
    description: 'Issue staff cash advance payout',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetExpenses']
  },
  {
    key: 'RecordPettyCashAdvance',
    domain: 'accounting',
    name: 'Top Up Petty Cash',
    description: 'Transfer cash advance to shop till',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetExpenses']
  },
  {
    key: 'RepayPettyCashAdvance',
    domain: 'accounting',
    name: 'Repay Staff Advance',
    description: 'Settle worker cash advance balance',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetExpenses']
  },
  {
    key: 'RecordPettyCashExpense',
    domain: 'accounting',
    name: 'Record Minor Petty Expense',
    description: 'Log minor cash expense from till',
    isSensitive: false,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetExpenses']
  },
  {
    key: 'GetAccountingAccounts',
    domain: 'accounting',
    name: 'View Accounting Accounts',
    description: 'Query accounting ledger accounts',
    isSensitive: false,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: []
  },
  {
    key: 'GetJournals',
    domain: 'accounting',
    name: 'View Journal Books',
    description: 'Query double-entry journal entries',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: []
  },
  {
    key: 'GetReceivables',
    domain: 'accounting',
    name: 'View Customer Receivables',
    description: 'Query accounts receivable balances',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: []
  },
  {
    key: 'PostTreasuryBooks',
    domain: 'accounting',
    name: 'Post Treasury Books',
    description: 'Sync treasury movements into accounting ledger',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetJournals']
  },
  {
    key: 'GetProfitAllocation',
    domain: 'accounting',
    name: 'View Profit Distribution',
    description: 'Query net profit allocation model',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetJournals']
  },
  {
    key: 'PostSaleConfirmation',
    domain: 'accounting',
    name: 'Post Sale Revenue Entry',
    description: 'Post automatic revenue entry for sale',
    isSensitive: false,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetJournals']
  },
  {
    key: 'PostPurchasePayable',
    domain: 'accounting',
    name: 'Post Purchase AP Entry',
    description: 'Post automatic inventory AP entry for PO',
    isSensitive: false,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetJournals']
  },
  {
    key: 'PostFinancialCorrection',
    domain: 'accounting',
    name: 'Post Financial Correction',
    description: 'Post financial reversal or closed-date correction',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetJournals']
  },
  {
    key: 'PostSaleRefund',
    domain: 'accounting',
    name: 'Post Refund Entry',
    description: 'Post accounting reversal entry for customer refund',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetJournals']
  },
  {
    key: 'GetEngineReport',
    domain: 'accounting',
    name: 'View Engine P&L Report',
    description: 'Generate comprehensive accounting P&L audit report',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetJournals']
  },
  {
    key: 'GetDashboardProfitAnalytics',
    domain: 'accounting',
    name: 'View Profit Analytics',
    description: 'Access profit trend charts',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetJournals']
  },
  {
    key: 'GetDashboardArApAnalytics',
    domain: 'accounting',
    name: 'View AR/AP Analytics',
    description: 'Access receivables and payables metrics',
    isSensitive: true,
    isFinancial: true,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetJournals']
  },

  // --- ADMIN DOMAIN ---
  {
    key: 'CreateShop',
    domain: 'admin',
    name: 'Create Shop Location',
    description: 'Register new physical shop location',
    isSensitive: true,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: false,
    isAdminOnly: true,
    dependencies: []
  },
  {
    key: 'UpdateShop',
    domain: 'admin',
    name: 'Update Shop Location',
    description: 'Edit shop location details',
    isSensitive: true,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: false,
    isAdminOnly: true,
    dependencies: []
  },
  {
    key: 'CreateUser',
    domain: 'admin',
    name: 'Invite Tenant User',
    description: 'Create user login credentials',
    isSensitive: true,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: false,
    dependencies: ['GetUsers']
  },
  {
    key: 'CreateStaff',
    domain: 'admin',
    name: 'Assign Staff Profile',
    description: 'Assign shop staff profile to user',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['CreateUser']
  },
  {
    key: 'GetStaff',
    domain: 'admin',
    name: 'View Staff Directory',
    description: 'List tenant staff profiles',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: []
  },
  {
    key: 'GetUsers',
    domain: 'admin',
    name: 'View User Accounts',
    description: 'List tenant user accounts',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: false,
    dependencies: []
  },
  {
    key: 'GetPermissionTemplates',
    domain: 'admin',
    name: 'View Permission Templates',
    description: 'Query permission template definitions',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: false,
    isAdminOnly: true,
    dependencies: []
  },
  {
    key: 'AssignTemplateToUser',
    domain: 'admin',
    name: 'Assign Permission Template',
    description: 'Assign or remove permission template for staff',
    isSensitive: true,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: false,
    isAdminOnly: true,
    dependencies: []
  },
  {
    key: 'SetUserPermissionOverride',
    domain: 'admin',
    name: 'Set Explicit Permission Override',
    description: 'Set explicit grant or deny override for user',
    isSensitive: true,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: false,
    isAdminOnly: true,
    dependencies: []
  },
  {
    key: 'RemoveUserPermissionOverride',
    domain: 'admin',
    name: 'Remove Permission Override',
    description: 'Reset user permission to template behavior',
    isSensitive: true,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: false,
    isAdminOnly: true,
    dependencies: []
  },
  {
    key: 'GetUserEffectivePermissions',
    domain: 'admin',
    name: 'View Effective Permissions',
    description: 'Calculate effective permission profile for user',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: false,
    isAdminOnly: true,
    dependencies: []
  },
  {
    key: 'GetPermissionAuditLogs',
    domain: 'admin',
    name: 'View Permission Audit Logs',
    description: 'Query permission change audit logs',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: false,
    isAdminOnly: true,
    dependencies: []
  },
  // Added: GetTenant, GetTenantShops, GetTenantSubscription, GetSupplier
  {
    key: 'GetTenant',
    domain: 'admin',
    name: 'View Tenant Profile',
    description: 'Query own tenant business profile',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: false,
    dependencies: []
  },
  {
    key: 'GetTenantShops',
    domain: 'admin',
    name: 'View Tenant Shops',
    description: 'List all shop locations for tenant',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: false,
    dependencies: []
  },
  {
    key: 'GetTenantSubscription',
    domain: 'admin',
    name: 'View Subscription Plan',
    description: 'Query tenant subscription and feature flags',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: false,
    dependencies: []
  },
  {
    key: 'GetSupplier',
    domain: 'purchases',
    name: 'View Supplier Details',
    description: 'Query single supplier profile by ID',
    isSensitive: false,
    isFinancial: false,
    supportsScope: false,
    supportsLocation: true,
    dependencies: ['GetSuppliers']
  }
];

/**
 * Commands that are public (no authentication required)
 */
export const PUBLIC_COMMANDS: readonly string[] = ['LoginUser', 'CreateTenant'] as const;

/**
 * Commands that are admin-only by role — enforced even without explicit catalog flag.
 * Catalog-level isAdminOnly is the authoritative source for new commands.
 */
export const ADMIN_ONLY_COMMANDS: readonly string[] = ['CreateShop', 'UpdateShop'] as const;

/**
 * Commands that are internal microservice calls, not directly from the gateway.
 * These must NOT be in the catalog and must NOT be callable by external clients.
 */
export const INTERNAL_COMMANDS: readonly string[] = [
  'VerifyUser',
  'SyncPurchaseStock',
  'GetInventoryBookCosts',
  'GetLastPurchaseUnitCosts',
  'GetSaleReturnsByIds',
] as const;

export const PERMISSION_MAP: Readonly<Record<string, SystemPermissionDefinition>> = Object.freeze(
  SYSTEM_PERMISSION_CATALOG.reduce(
    (acc, perm) => {
      acc[perm.key] = perm;
      return acc;
    },
    {} as Record<string, SystemPermissionDefinition>
  )
);

export function isPublicCommand(cmd: string): boolean {
  return (PUBLIC_COMMANDS as readonly string[]).includes(cmd);
}

export function isAdminOnlyCommand(cmd: string): boolean {
  const def = PERMISSION_MAP[cmd];
  return def ? !!def.isAdminOnly : (ADMIN_ONLY_COMMANDS as readonly string[]).includes(cmd);
}

export function isInternalCommand(cmd: string): boolean {
  return (INTERNAL_COMMANDS as readonly string[]).includes(cmd);
}

/**
 * Spec requirement (section 5): Validate catalog integrity.
 * Returns a list of integrity violations.
 * A clean catalog returns an empty array.
 */
export function validateCatalogIntegrity(): string[] {
  const errors: string[] = [];
  const catalogKeySet = new Set(SYSTEM_PERMISSION_CATALOG.map(p => p.key));

  for (const perm of SYSTEM_PERMISSION_CATALOG) {
    // 1. Every key must be unique
    const duplicates = SYSTEM_PERMISSION_CATALOG.filter(p => p.key === perm.key);
    if (duplicates.length > 1) {
      errors.push(`Duplicate catalog key: '${perm.key}'`);
    }

    // 2. Dependencies must point to real catalog keys (not public or internal)
    for (const dep of perm.dependencies) {
      if (!catalogKeySet.has(dep) && !(PUBLIC_COMMANDS as readonly string[]).includes(dep)) {
        errors.push(`Permission '${perm.key}' has unresolvable dependency '${dep}'`);
      }
    }

    // 3. Admin-only permissions must not support scope (they bypass normal resolution)
    if (perm.isAdminOnly && perm.supportsScope) {
      errors.push(`Admin-only permission '${perm.key}' should not have supportsScope=true`);
    }

    // 4. Key must match safe identifier pattern
    if (!/^[A-Z][A-Za-z0-9]+$/.test(perm.key)) {
      errors.push(`Permission key '${perm.key}' does not match required PascalCase pattern`);
    }
  }

  return errors;
}
