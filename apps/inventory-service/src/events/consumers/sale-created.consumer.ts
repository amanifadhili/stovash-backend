/**
 * SaleCreated is for accounting / notifications only.
 * Stock deduction happens on ConfirmSale via ApplySaleFulfillment (and
 * idempotent SaleFulfilled replay). Draft sales must not deplete inventory.
 */
export const saleCreatedConsumer = async (event: any): Promise<void> => {
  const { aggregateId, correlationId } = event;
  console.log(
    `SaleCreated acknowledged (no stock mutation): ${aggregateId} (correlationId: ${correlationId})`,
  );
};
