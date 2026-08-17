process.env.TREASURY_DATABASE_URL ||= 'postgresql://postgres:postgres@localhost:5432/treasury_db';
process.env.RABBITMQ_URL ||= 'amqp://localhost:5672';

import { setShopTodayForTests } from './src/treasury-movement/calendar';

setShopTodayForTests('2026-08-17');
