import { Application, Request, Response, NextFunction, Router } from 'express'
import { dispatchAction } from '../utils/actionDispatcher';
import { testAction, testAction2 } from '../controllers/testController';

const router = Router();

router.get('/simple', dispatchAction(testAction))
router.get('/clumsy-route', dispatchAction(testAction2))

//Export All Routes
export function routes(app: Application): any {
    app.use('/api/test', router)
}

