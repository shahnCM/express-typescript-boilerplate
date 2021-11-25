import { Application, Request, Response, Router } from 'express'
import * as TestController from '../controllers/TestController' 

const router = Router();

router.get('/test', async function(req: Request, res: Response): Promise<Response>{
    return await TestController.sampleActionForApi(req, res);
});

//Export All Routes
export function routes(app: Application): any {
    app.use('/api', router)
}

