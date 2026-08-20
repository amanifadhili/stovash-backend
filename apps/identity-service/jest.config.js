export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  setupFiles: ['<rootDir>/jest.setup.ts'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  transform: {
    '^.+\\.ts$': ['ts-jest', { isolatedModules: true }],
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '^@electronic-shop/types$': '<rootDir>/../../packages/types/dist/index.js',
    '^@electronic-shop/framework-command$': '<rootDir>/../../frameworks/command/dist/index.js',
  },
  transformIgnorePatterns: ['/node_modules/(?!(@electronic-shop)/)'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  verbose: true,
};
