import { Application, NextFunction, Request, Response } from 'express'
import { routes as testRoutes }  from './test'
import { routes as authRoutes }  from './auth'
import { handleError as handleRouteError } from '../errors/handleError' 

export async function initiateRoutes(app: Application): Promise<void> {
    authRoutes(app)         // Auth Routes
    testRoutes(app)         // Api Routes
    handleRouteError(app)   // ErrorHandling
}
