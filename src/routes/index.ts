import { Application, NextFunction, Request, response, Response } from 'express'
import { UploadError } from '../errors/UploadError'
import { routes as apiRoutes }  from './api'
import { routes as authRoutes }  from './auth'
import { handleError as handleRouteError } from '../errors/handleError' 

export async function safeAction(req: Request, res: Response, next: NextFunction, action: Function) {
    await action(req, res, next).catch(next)
}

export async function initiateRoutes(app: Application): Promise<void> {
    // Auth Routes
    authRoutes(app)
    // Api Routes
    apiRoutes(app)
    // ErrorHandling
    handleRouteError(app)
}
