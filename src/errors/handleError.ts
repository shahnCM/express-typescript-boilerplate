import {Application, NextFunction, Request, Response} from "express";
import {errorResponse} from "../utils/apiResponser";
import {UploadError} from "./UploadError";
import {NotFoundError} from "./NotFoundError";
import {ValidationError} from "./ValidationError";
import {AuthenticationError} from "./AuthenticationError";
import {AuthorizationError} from "./AuthorizationError";
import multer from "multer";

export function handleError(app: Application): any {

    // Handle 404
    app.use((req: Request, res: Response, next: NextFunction): any => next(new NotFoundError()))

    // Handle All Error
    app.use((err: any, req: Request, res: Response, next: NextFunction): void|Response => {

        if (res.headersSent) {
            return next('There was an unhandled error!')
        }

        if(err?.respond) {
            return err.respond(res)
        }

        if (err.message === 'Just Error') {
            console.log('Heiyou');
            
            
            // if(err.respond) {
            //     return err.respond(res)
            // }

            // if (err instanceof multer.MulterError || err instanceof UploadError) {
            //     return res.status(422).send(errorResponse(
            //         422,
            //         [{'msg': err.message || 'There was error while uploading file'}]
            //     ))
            // }

            // if (err instanceof NotFoundError) {
            //     return res.status(err.statusCode).send(errorResponse(
            //         err.statusCode,
            //         [{'msg': err.message || 'Not found'}]
            //     ))
            // }

            // if (err instanceof ValidationError) {
            //     return res.status(err.statusCode).send(errorResponse(
            //         err.statusCode,
            //         err.errors
            //     ))
            // }

            // if (err instanceof AuthenticationError) {
            //     return res.status(err.statusCode).send(errorResponse(
            //         err.statusCode,
            //         [{msg: err.message || 'Credentials do not match'}]
            //     ))
            // }

            // if (err instanceof AuthorizationError) {
            //     return res.status(err.statusCode).send(errorResponse(
            //         err.statusCode,
            //         [{msg: err.message || 'Access denied'}]
            //     ))
            // }
        }
        
        return res.status(500).send(errorResponse(500,[{msg: 'Internal Server Error', error: err.stack}]))
    })
}
