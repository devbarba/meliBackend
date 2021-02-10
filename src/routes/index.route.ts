import { Router, Response, Request } from 'express';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
    return response.json({
        message: 'Welcome to Meli Challenge',
    });
});

export default routes;
