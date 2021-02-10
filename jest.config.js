module.exports = {
    clearMocks: true,
    preset: 'ts-jest',
    roots: ['<rootDir>'],
    testEnvironment: 'node',
    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[tj]s?(x)',
    ],
    testPathIgnorePatterns: ['/node_modules/', '/src/__tests__/unit/mock'],
};
