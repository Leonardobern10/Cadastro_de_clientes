import express, { Request, Response } from 'express';
import { Controller } from '../controller/controller';
import { ROUTES } from '../utils/routes';

export class ServerApp {
    private app = express();
    private controller: Controller;

    constructor() {
        this.controller = new Controller();
        this.app.use(express.json());
        this.searchUsers();
        this.searchUserById();
        this.insertOneUser();
        this.delete();
        this.insertAllUsers();
        this.update();
    }

    private searchUsers() {
        this.app.get(ROUTES.USERS.BASE, (req: Request, res: Response) =>
            this.controller.getAllUsers(req, res),
        );
    }

    private searchUserById() {
        this.app.get(ROUTES.USERS.GET_BY_ID, (req: Request, res: Response) => {
            const id = req.params.id;
            this.controller.getUserById(req, res, id);
        });
    }

    private insertOneUser() {
        this.app.post(
            ROUTES.USERS.POST_ONE_USER,
            (req: Request, res: Response) => {
                this.controller.insertOne(req, res);
            },
        );
    }

    private insertAllUsers() {
        this.app.post(
            ROUTES.USERS.POST_ALL_USERS,
            (req: Request, res: Response) => {
                this.controller.insertAll(req, res);
            },
        );
    }

    private delete() {
        this.app.delete(
            ROUTES.USERS.DELETE_USER,
            (req: Request, res: Response) => {
                const id = req.params.id;
                this.controller.deleteById(req, res, id);
            },
        );
    }

    private update() {
        this.app.put(
            ROUTES.USERS.UPDATE_USER,
            (req: Request, res: Response) => {
                this.controller.update(req, res);
            },
        );
    }

    public listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Initializing server on port ${process.env.PORT}`);
        });
    }
}
