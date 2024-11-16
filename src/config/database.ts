import mysql from 'mysql2/promise';
import { ALERT } from '../utils/alerts';

/**
 * Método responsável com configurar e
 * estabelecer a conexão com banco de dados
 * MYSQL.
 * @returns {Promise<any>}
 */
const connectToDatabase = async (): Promise<any> => {
    try {
        const connection = await mysql.createConnection({
            host: process.env.HOST,
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
        });
        console.log(ALERT.DATABASE.INIT);
        return connection;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default connectToDatabase;
