import mysql from 'mysql2/promise';
import connectToDatabase from '../config/database';

// Cria um mock para o método createConnection
jest.mock('mysql2/promise', () => ({
    createConnection: jest.fn(),
}));

describe('connectToDatabase', () => {
    it('should connect to the database successfully', async () => {
        // Mock para simular uma conexão bem-sucedida
        const mockConnection = { connect: jest.fn() };
        (mysql.createConnection as jest.Mock).mockResolvedValue(mockConnection);

        const connection = await connectToDatabase();

        expect(mysql.createConnection).toHaveBeenCalledWith({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'exsystem',
        });

        expect(connection).toBe(mockConnection);
        expect(console.log).toHaveBeenCalledWith(
            'Connected on database MySQL...',
        );
    });

    it('should throw an error if connection fails', async () => {
        const mockError = new Error('Connection failed');
        (mysql.createConnection as jest.Mock).mockRejectedValue(mockError);

        await expect(connectToDatabase()).rejects.toThrow('Connection failed');
        expect(console.error).toHaveBeenCalledWith(mockError);
    });
});

// Mocka o console.log e console.error para verificar mensagens
beforeAll(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterAll(() => {
    jest.restoreAllMocks();
});
