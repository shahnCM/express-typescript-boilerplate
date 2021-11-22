import { Application, Request, Response, Router } from 'express'
import * as UserController from '../controllers/UserController' 

const router = Router();

router.get('/users', async function(req: Request, res: Response): Promise<Response>{
    // return res.status(200).send({
    //     message: "API:Simple Call users Route from Here!",
    //     data: []
    // });
    return await UserController.sampleActionForApi(req, res);
});

router.get('/posts', async function(req: Request, res: Response): Promise<Response>{
    return res.status(200).send({
        message: "API:Simple Call posts Route from Here!",
        data: []
    });
});

//Export All Routes
export function routes(app: Application): any {
    app.use('/api', router)
}

