import { Application, NextFunction, Router } from 'express'
import * as testController from '../business/controllers/testController';

const router = Router();

router.get(
    '/test', 
    async function(req, res, next) {
        await testController.testAction(req, res, next).catch(next)
    }
)

//Export All Routes
export function routes(app: Application): any {
    app.use('/api', router)
}

