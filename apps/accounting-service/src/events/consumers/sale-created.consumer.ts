export const saleCreatedConsumer = async (event: any): Promise<void> => {
  const aggregateId = event?.aggregateId || 'unknown';
  // Phase 5 quarantine: legacy SaleCreated writer must never post journals.
  // Financial posting is owned by the engine ConfirmSale/PostSaleConfirmation path.
  console.warn(
    `SaleCreated consumer is quarantined; skipping legacy posting for ${aggregateId}.`,
  );
};
