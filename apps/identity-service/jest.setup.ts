process.env.IDENTITY_DATABASE_URL ||= 'postgresql://postgres:postgres@localhost:5432/identity_db';
process.env.JWT_SECRET ||= 'dev-secret-key';
