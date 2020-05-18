module.exports = {
    projects: [
        {
            displayName: 'client',
            testEnvironment: 'jsdom',
            testMatch: ['**/packages/client/**/__tests__/*.(spec|test).js'],
            transform: {
                '^.+\\.[t|j]sx?$': 'babel-jest',
            },
        },
        {
            displayName: 'api',
            testEnvironment: 'node',
            testMatch: ['**/packages/api/**/__tests__/*.(spec|test).js'],
        },
        {
            displayName: 'db',
            testEnvironment: 'node',
            testMatch: ['**/utils/db/**/__tests__/*.(spec|test).js'],
        },
        {
            displayName: 'validate',
            testEnvironment: 'node',
            testMatch: ['**/utils/validate/**/__tests__/*.(spec|test).js'],
        },
    ],
}
