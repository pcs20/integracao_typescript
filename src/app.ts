import express from 'express';
import routers from './routers/routes';
import swaggerUI from 'swagger-ui-express';
import * as swaggerdoc from './swagger/swagger.json';

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.middleware();
        this.routes();
    }

    private middleware() {
        this.app.use(express.json());
        this.app.use('/project/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerdoc))
    }

    //minhas rotas cadastradas no framework express
    private routes(): void {
        this.app.use(routers);
    }
}

export default new App().app;