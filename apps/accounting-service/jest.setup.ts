process.env.ACCOUNTING_DATABASE_URL ||= 'postgresql://postgres:postgres@localhost:5432/accounting_db';
process.env.RABBITMQ_URL ||= 'amqp://localhost:5672';

import { setShopTodayForTests } from './src/financial-transaction/calendar';

setShopTodayForTests('2026-08-17');
