import { User } from '../model/User';
import { Repository } from '../repository/repository';
import { QueryResult, FieldPacket } from 'mysql2';

export class Service {
    private repository: Repository;

    constructor() {
        this.repository = new Repository();
    }

    public async findAll(): Promise<[QueryResult, FieldPacket[]]> {
        return await this.repository.findAll();
    }

    public async findById(id: string): Promise<[QueryResult, FieldPacket[]]> {
        return this.repository.findBy('id', id);
    }

    public async insertOne(user: User): Promise<[QueryResult, FieldPacket[]]> {
        return await this.repository.insertOne(user);
    }

    public async delete(id: string): Promise<[QueryResult, FieldPacket[]]> {
        return this.repository.delete(id);
    }

    public async update(
        id: string,
        user: User,
    ): Promise<[QueryResult, FieldPacket[]]> {
        return await this.repository.update(
            id,
            user.name,
            user.age,
            user.email,
            user.password,
        );
    }

    public async insertAll(users: User[]): Promise<void> {
        /**
         * O Promise.all permite executar múltiplas promessas
         * em paralelo. Em vez de aguardar a conclusão de uma
         * operação antes de iniciar a próxima, ele inicia todas
         * as operações simultaneamente e aguarda que todas sejam
         * concluídas. Isso pode reduzir significativamente o tempo
         * de execução.
         */
        const promises = users.map((user) => this.repository.insertOne(user));
        await Promise.all(promises);
    }
}
