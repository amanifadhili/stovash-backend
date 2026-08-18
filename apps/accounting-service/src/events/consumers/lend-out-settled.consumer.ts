export const lendOutSettledConsumer = async (event: any): Promise<void> => {
  const aggregateId = event?.aggregateId || 'unknown';
  // Phase 9: Lend-OUT is inventory-only until a dedicated money command is specified.
  // Do not post journals from RabbitMQ (EventConsumerService is quarantined).
  console.warn(
    `LendOutSettled consumer is quarantined; skipping legacy posting for ${aggregateId}.`,
  );
};
