import { Application, Request, Response, Router } from 'express'

const router = Router();

router.get('/users', async function(req: Request, res: Response): Promise<Response>{
    return res.status(200).send({
        message: "WEB:Simple Call users Route from Here!",
        data: []
    });
});

router.get('/posts', async function(req: Request, res: Response): Promise<Response>{
    return res.status(200).send({
        message: "WEB:Simple Call posts Route from Here!",
        data: []
    });
});

//Export All Routes
export function routes(app: Application): any {
    app.use('/web', router)
}

