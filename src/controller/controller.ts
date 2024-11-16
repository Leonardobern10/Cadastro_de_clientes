import { User } from '../model/User';
import { Service } from '../service/service';
import { Request, Response } from 'express';
import { HTTP } from '../utils/http';
import { ALERT } from '../utils/alerts';

export class Controller {
    private service: Service;

    constructor() {
        this.service = new Service();
    }

    public async getAllUsers(req: Request, res: Response): Promise<void> {
        try {
            const [result] = await this.service.findAll();
            res.status(HTTP.STATUS_CODE.OK).json(result);
        } catch (error) {
            console.error(error);
            res.status(HTTP.STATUS_CODE.INTERNAL_SERVER_ERROR).json({
                message: ALERT.CONTROLLER.USER_GET_ERROR,
            });
        }
    }

    public async getUserById(
        req: Request,
        res: Response,
        id: string,
    ): Promise<void> {
        try {
            const [result] = await this.service.findById(id);
            if (result === null) {
                res.status(HTTP.STATUS_CODE.NOT_FOUND).json({
                    message: ALERT.CONTROLLER.USER_NOT_FOUND,
                });
            } else {
                res.status(HTTP.STATUS_CODE.OK).json(result);
            }
        } catch (error) {
            console.log(error);
            res.status(HTTP.STATUS_CODE.INTERNAL_SERVER_ERROR).json({
                message: ALERT.CONTROLLER.USER_GET_ERROR,
            });
        }
    }

    public async insertOne(req: Request, res: Response): Promise<void> {
        try {
            const { name, age, email, password } = req.body;
            const user = new User(name, age, email, password);
            const newUser = new User(
                user.name,
                user.age,
                user.email,
                user.password,
            );
            await this.service.insertOne(newUser);
            res.status(HTTP.STATUS_CODE.CREATED).json({
                message: ALERT.CONTROLLER.USER_CREATED_SUCCESS,
            });
        } catch (error) {
            console.error(error);
            res.status(HTTP.STATUS_CODE.INTERNAL_SERVER_ERROR).json({
                message: ALERT.CONTROLLER.USER_CREATED_FAILED,
            });
        }
    }

    public async deleteById(
        req: Request,
        res: Response,
        id: string,
    ): Promise<void> {
        try {
            await this.service.delete(id);
            res.status(HTTP.STATUS_CODE.OK).json(
                ALERT.CONTROLLER.USER_DELETED_SUCCESS,
            );
        } catch (error) {
            console.error(error);
            res.status(HTTP.STATUS_CODE.INTERNAL_SERVER_ERROR).json(
                ALERT.CONTROLLER.USER_DELETED_FAILED,
            );
        }
    }

    public async insertAll(req: Request, res: Response): Promise<void> {
        const users = req.body;
        try {
            await this.service.insertAll(users); // Certifique-se de usar await
            res.status(HTTP.STATUS_CODE.CREATED).json({
                message: ALERT.CONTROLLER.USER_CREATED_SUCCESS,
            });
        } catch (error) {
            res.status(HTTP.STATUS_CODE.INTERNAL_SERVER_ERROR).json({
                message: ALERT.CONTROLLER.USER_CREATED_FAILED,
            });
            throw error;
        }
    }

    public async update(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id;
            const { name, age, email, password } = req.body;

            if (!name || !age || !email || !password) {
                res.status(HTTP.STATUS_CODE.BAD_REQUEST).json({
                    message: ALERT.CONTROLLER.USER_INFO_REQUIRED,
                });
                return;
            }
            const [searchId, fields] = await this.service.findById(id);

            if (Object.keys(searchId).length === 0) {
                res.status(HTTP.STATUS_CODE.NOT_FOUND).json({
                    message: ALERT.CONTROLLER.USER_NOT_FOUND,
                });
                return;
            }

            const user = new User(name, age, email, password);
            await this.service.update(id, user);
            res.status(HTTP.STATUS_CODE.OK).json({
                message: ALERT.CONTROLLER.USER_UPDATE_SUCCESS,
            });
        } catch (error) {
            console.error(error);
            res.status(HTTP.STATUS_CODE.INTERNAL_SERVER_ERROR).json({
                message: ALERT.CONTROLLER.USER_UPDATE_FAILED,
            });
        }
    }
}
