module.exports = {
    displayName: 'client',
    testEnvironment: 'jsdom',
    testMatch: ['**/packages/client/**/__tests__/*.(spec|test).js'],
    transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest',
    },
}
