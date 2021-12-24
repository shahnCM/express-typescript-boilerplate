import { Application, Request, Response } from 'express'
import { routes as apiRoutes }  from './api'
import { routes as webRoutes }  from './web'

export function initiateRoutes(app: Application): void {
    // Api Routes
    apiRoutes(app)

    // Web Routes
    webRoutes(app)

    // Handle 404
    app.use((_, res: Response, next: any): void => next({
        status: 404,
        message: 'Requested URL was not found'
    })) 

    // Handle All Error
    app.use((err: any, req: Request, res: Response, next: any): any => {
    
        if (res.headersSent) {
            next('There was a problem!')
        } 
        
        if (err.message) {
            res.status(err.status || 500).send(err.message)
        }

        res.send('There was an error!')
    })
}
