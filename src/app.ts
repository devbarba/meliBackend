import dotenv from 'dotenv';
import errorHandler from 'errorhandler';
import bodyParser from 'body-parser';
import express, { Application } from 'express';
import cors from 'cors';
import 'express-async-errors';
import routes from './routes/index.route';
import errorMiddleware from './middlewares/error.middleware';

dotenv.config();

class App {
    public server: Application;

    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
        this.errorHandling();
    }

    public middlewares() {
        this.server.use(cors());
        this.server.use(bodyParser.json());
        this.server.use(
            bodyParser.urlencoded({
                extended: true,
            })
        );
    }

    private errorHandling() {
        this.server.use(errorMiddleware);
        this.server.use(errorHandler());
    }

    private routes() {
        this.server.use(routes);
    }
}

export default new App().server;
