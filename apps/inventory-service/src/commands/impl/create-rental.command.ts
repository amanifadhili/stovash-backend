import { BaseCommand } from '@electronic-shop/framework-command';
import { IRequestContext } from '@electronic-shop/types';

export class CreateInwardInventoryInput {
  productId!: string;
  name?: string;
  brandId?: string;
  categoryId?: string;
  sellingPrice?: number;
  specifications?: any;
  serialNumber!: string;
  condition?: string;
  notes?: string;
  images?: string[];
  unitAcquisitionCost?: number;
}

export class CreateRentalPayload {
  inventoryItemId?: string;
  productId?: string;
  customerId?: string;
  contactId?: string;
  personName?: string;
  personPhone?: string;
  agreementType!: 'OUTWARD_RENTAL' | 'INWARD_CONSIGNMENT';
  startDate?: string;
  notes?: string;
  rentalFee?: number;
  /** Locked floor at collect: Store B min (Lend-IN) or our min (Lend-OUT). */
  ownerAgreedCost?: number;
  /** Accessory qty. Devices omit this (treated as 1). */
  quantity?: number;
  /** When set with INWARD_CONSIGNMENT, create a RENTED_IN inventory unit in the same transaction. */
  createInventory?: CreateInwardInventoryInput;
}

export class CreateRentalCommand extends BaseCommand<CreateRentalPayload> {
  constructor(payload: CreateRentalPayload, context?: IRequestContext) {
    super(payload, context);
  }
}
