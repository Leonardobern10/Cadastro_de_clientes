import { Connection, FieldPacket, QueryResult } from 'mysql2/promise';
import connectToDatabase from '../config/database';
import { User } from '../model/User';
import { ALERT } from '../utils/alerts';

export class Repository {
    private connection: Promise<Connection>;

    constructor() {
        this.connection = connectToDatabase();
    }

    async insertOne(user: User): Promise<[QueryResult, FieldPacket[]]> {
        try {
            const connection = await this.connection;
            const [rows, fields] = await connection.query(
                ALERT.REPOSITORY.QUERY_INSERT_ONE,
                [user.name, user.age, user.email, user.password],
            );
            return [rows, fields];
        } catch (error) {
            throw error;
        }
    }

    async findAll(): Promise<[QueryResult, FieldPacket[]]> {
        try {
            const connection = await this.connection;
            const [result, fields] = await connection.query(
                ALERT.REPOSITORY.QUERY_SELECT_ALL,
            );
            return [result, fields];
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async findBy(
        parameter: string,
        value: any,
    ): Promise<[QueryResult, FieldPacket[]]> {
        try {
            const connection = await this.connection;
            const query = `SELECT * FROM users WHERE ${parameter} = ?;`;
            const [result, fields] = await connection.query(query, [value]);
            return [result, fields];
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async delete(id: any): Promise<[QueryResult, FieldPacket[]]> {
        try {
            const connection = await this.connection;
            const [result, fields] = await connection.query(
                ALERT.REPOSITORY.QUERY_DELETE_BY_ID,
                id,
            );
            return [result, fields];
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async update(
        id: string,
        name: string,
        age: number,
        email: string,
        password: string,
    ): Promise<[QueryResult, FieldPacket[]]> {
        try {
            const connection = await this.connection;
            const query = `
                UPDATE users
                SET name = ?, age = ?, email = ?, password = ?
                WHERE id = ?;
            `;
            const [result, fields] = await connection.query(query, [
                name,
                age,
                email,
                password,
                id,
            ]);
            return [result, fields];
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}
