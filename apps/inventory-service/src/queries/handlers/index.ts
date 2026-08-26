import { GetProductsHandler } from './get-products.handler.js';
import { GetProductByIdHandler } from './get-product-by-id.handler.js';
import { GetProductBySkuHandler } from './get-product-by-sku.handler.js';
import { GetBrandsHandler } from './get-brands.handler.js';
import { GetBrandByIdHandler } from './get-brand-by-id.handler.js';
import { GetCategoriesHandler } from './get-categories.handler.js';
import { GetCategoryByIdHandler } from './get-category-by-id.handler.js';
import { GetAvailableInventoryItemsHandler } from './get-available-inventory-items.handler.js';
import { GetStockUnitsHandler } from './get-stock-units.handler.js';
import { GetOwnedUnsoldStockPositionHandler } from './get-owned-unsold-stock-position.handler.js';
import { GetDeviceLifeHandler } from './get-device-life.handler.js';
import { GetInventoryBookCostsHandler } from './get-inventory-book-costs.handler.js';
import { GetRentalsHandler } from './get-rentals.handler.js';
import { GetContactsHandler } from './get-contacts.handler.js';
import { GetStockMovementsHandler } from './get-stock-movements.handler.js';
import { GetDashboardInventoryAnalyticsHandler } from './get-dashboard-inventory-analytics.handler.js';

export const QueryHandlers = [
  GetProductsHandler,
  GetProductByIdHandler,
  GetProductBySkuHandler,
  GetBrandsHandler,
  GetBrandByIdHandler,
  GetCategoriesHandler,
  GetCategoryByIdHandler,
  GetAvailableInventoryItemsHandler,
  GetStockUnitsHandler,
  GetOwnedUnsoldStockPositionHandler,
  GetDeviceLifeHandler,
  GetInventoryBookCostsHandler,
  GetRentalsHandler,
  GetContactsHandler,
  GetStockMovementsHandler,
  GetDashboardInventoryAnalyticsHandler,
];
