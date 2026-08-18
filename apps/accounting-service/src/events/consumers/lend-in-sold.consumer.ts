export const lendInSoldConsumer = async (event: any): Promise<void> => {
  const aggregateId = event?.aggregateId || 'unknown';
  // Phase 9: Lend-IN is inventory-only until a dedicated money command is specified.
  // Do not post journals from RabbitMQ (EventConsumerService is quarantined).
  console.warn(
    `LendInSold consumer is quarantined; skipping legacy posting for ${aggregateId}.`,
  );
};
