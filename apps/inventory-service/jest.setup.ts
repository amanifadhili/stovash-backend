process.env.INVENTORY_DATABASE_URL ||= 'postgresql://postgres:postgres@localhost:5432/inventory_db';
process.env.RABBITMQ_URL ||= 'amqp://localhost:5672';