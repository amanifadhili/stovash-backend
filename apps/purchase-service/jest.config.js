export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  setupFiles: ['<rootDir>/jest.setup.ts'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  transform: {
    '^.+\\.ts$': ['ts-jest', { isolatedModules: true }],
    '^.+\\.js$': [
      'ts-jest',
      { isolatedModules: true, tsconfig: { allowJs: true, module: 'commonjs', esModuleInterop: true } },
    ],
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
    '!src/main.ts',
  ],
  moduleFileExtensions: ['ts', 'js', 'json'],
  verbose: true,
};
