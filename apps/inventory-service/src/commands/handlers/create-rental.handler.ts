import { CommandHandler } from '@nestjs/cqrs';
import { BaseCommandHandler } from '@electronic-shop/framework-command';
import { CreateRentalCommand } from '../impl/create-rental.command.js';
import { prisma } from '../../database/client.js';
import { ICommandResponse, ErrorCode } from '@electronic-shop/types';

@CommandHandler(CreateRentalCommand)
export class CreateRentalHandler extends BaseCommandHandler<CreateRentalCommand> {
  async execute(command: CreateRentalCommand): Promise<ICommandResponse<any>> {
    const { payload, context } = command;
    const traceId = context?.traceId || 'unknown';
    const tenantId = context?.tenantId;
    const shopId = context?.shopId;
    const userId = context?.userId || 'system';

    try {
      if (!tenantId || !shopId) {
        return {
          status: 'error',
          traceId,
          message: 'tenantId and shopId are required in context',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      if (!payload.agreementType) {
        return {
          status: 'error',
          traceId,
          message: 'agreementType is required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      let resolvedName = payload.personName?.trim() || '';
      const resolvedPhone = payload.personPhone?.trim() || null;

      if (!resolvedName) {
        return {
          status: 'error',
          traceId,
          message: 'personName or customer name is required',
          errorCode: ErrorCode.VALIDATION_ERROR,
        };
      }

      const rental = await prisma.$transaction(async (tx) => {
        let inventoryItemId = payload.inventoryItemId || null;
        let productId = payload.productId || null;
        const ownerAgreedCost = Number(payload.ownerAgreedCost) || 0;

        if (payload.agreementType === 'INWARD_CONSIGNMENT' && !payload.createInventory && !payload.inventoryItemId) {
          throw new Error('Rent-in requires device details (serial) so it can be added to stock');
        }

        if (payload.agreementType === 'INWARD_CONSIGNMENT' && payload.createInventory) {
          const inv = payload.createInventory;
          if (!inv.productId || !inv.serialNumber?.trim()) {
            throw new Error('productId and serialNumber are required to rent a device in');
          }

          const product = await tx.product.findFirst({ where: { id: inv.productId, tenantId } });
          if (!product) throw new Error('Product not found for this tenant');

          const serialNumber = inv.serialNumber.trim();
          const existing = await tx.inventoryItem.findFirst({ where: { tenantId, serialNumber } });
          if (existing) throw new Error(`Serial ${serialNumber} already exists`);

          const imageList = Array.isArray(inv.images) && inv.images.length
            ? inv.images.filter(Boolean).slice(0, 5)
            : Array.isArray((product as any).images)
              ? ((product as any).images as string[]).slice(0, 5)
              : [];
          const productSpecs =
            product.specifications && typeof product.specifications === 'object'
              ? (product.specifications as Record<string, unknown>)
              : {};
          const mergedSpecs = {
            ...productSpecs,
            ...(inv.specifications && typeof inv.specifications === 'object' ? inv.specifications : {}),
            deviceType: productSpecs.deviceType || product.type || 'DEVICE',
          };
          const purchaseCost = Number(inv.unitAcquisitionCost) || ownerAgreedCost || 0;

          const item = await tx.inventoryItem.create({
            data: {
              tenantId,
              shopId,
              productId: product.id,
              name: inv.name?.trim() || product.name || null,
              brandId: inv.brandId || product.brandId || null,
              categoryId: inv.categoryId || product.categoryId || null,
              sellingPrice: inv.sellingPrice != null ? Number(inv.sellingPrice) : null,
              specifications: mergedSpecs,
              condition: inv.condition || null,
              notes: inv.notes || null,
              images: imageList,
              serialNumber,
              purchaseCost,
              imageUrl: imageList.length > 0 ? imageList[0] : product.imageUrl || undefined,
              status: 'RENTED_IN',
              createdBy: userId,
            },
          });

          await tx.inventoryMovement.create({
            data: {
              tenantId,
              shopId,
              inventoryItemId: item.id,
              movementType: 'IN',
              quantity: 1,
              referenceType: 'INWARD_RENTAL',
              createdBy: userId,
            },
          });

          inventoryItemId = item.id;
          productId = product.id;

          if (imageList.length > 0 && !product.imageUrl) {
            await tx.product.update({
              where: { id: product.id },
              data: { images: imageList, imageUrl: imageList[0], updatedBy: userId },
            });
          }
        } else if (payload.agreementType === 'OUTWARD_RENTAL' && payload.inventoryItemId) {
          const item = await tx.inventoryItem.findUnique({ where: { id: payload.inventoryItemId } });
          if (item && item.status !== 'AVAILABLE') {
            throw new Error(`Unit ${payload.inventoryItemId} is not AVAILABLE (current status: ${item.status})`);
          }
          await tx.inventoryItem.update({
            where: { id: payload.inventoryItemId },
            data: { status: 'RENTED_OUT', updatedBy: userId },
          });
        } else if (payload.agreementType === 'INWARD_CONSIGNMENT' && payload.inventoryItemId) {
          await tx.inventoryItem.update({
            where: { id: payload.inventoryItemId },
            data: { status: 'RENTED_IN', updatedBy: userId },
          });
        }

        return await tx.rentalAgreement.create({
          data: {
            tenantId,
            shopId,
            inventoryItemId,
            productId,
            personName: resolvedName,
            personPhone: resolvedPhone,
            agreementType: payload.agreementType,
            startDate: payload.startDate ? new Date(payload.startDate) : new Date(),
            expectedReturn: null,
            rentalFee: Number(payload.rentalFee) || 0,
            ownerAgreedCost,
            maintenanceCost: 0,
            status: 'ACTIVE',
            notes: payload.notes?.trim() || null,
            createdById: userId,
          },
        });
      });

      return {
        status: 'success',
        traceId,
        data: rental,
      };
    } catch (error: any) {
      return {
        status: 'error',
        traceId,
        message: error.message || 'Failed to create rental agreement',
        errorCode: error.code || ErrorCode.INTERNAL_ERROR,
      };
    }
  }
}
