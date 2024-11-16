export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true, // Gera relatório de cobertura
    coverageDirectory: 'coverage', // Pasta para os relatórios
    testMatch: ['**/__tests__/**/*.test.ts', '**/?(*.)+(spec|test).ts'], // Arquivos de teste
    moduleFileExtensions: ['ts', 'js', 'json'],
};
