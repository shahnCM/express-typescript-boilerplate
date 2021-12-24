import { Application, Request, Response } from 'express'
import multer from 'multer'
import { UploadError } from '../errors/UploadError'
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
            return next('There was a problem!')
        } 

        if (err instanceof multer.MulterError || err instanceof UploadError) {
            return res.status(422).send(err.message || 'There was an upload error!')
        }
        
        if (err.message) {
            return res.status(err.status || 500).send(err.message || 'There was an error!')
        }

        return res.status(500).send('Internal Server Error!')
    })
}
