import { CreateSupplierHandler } from './create-supplier.handler.js';
import { UpdateSupplierHandler } from './update-supplier.handler.js';
import { DeleteSupplierHandler } from './delete-supplier.handler.js';

export const CommandHandlers = [
  CreateSupplierHandler,
  UpdateSupplierHandler,
  DeleteSupplierHandler,
];
