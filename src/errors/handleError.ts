import {Application, NextFunction, Request, Response} from "express";
import {errorResponse} from "../utils/commonUtils";
import {UploadError} from "./UploadError";
import {NotFoundError} from "./NotFoundError";
import {ValidationError} from "./ValidationError";
import {AuthenticationError} from "./AuthenticationError";
import {AuthorizationError} from "./AuthorizationError";
import multer from "multer";

export function handleError(app: Application): any {

    // Handle 404
    app.use((req: Request, res: Response, next: NextFunction): void => next(new NotFoundError('Requested URL was not found!')))

    // Handle All Error
    app.use((err: any, req: Request, res: Response, next: NextFunction): any => {

        if (res.headersSent) {
            return next('There was an unhandled error!')
        }

        if (err) {

            if (err instanceof multer.MulterError || err instanceof UploadError) {
                const response = errorResponse(
                    422,
                    [{'msg': err.message || 'There was error while uploading file'}]
                )
                return res.status(422).send(response)
            }

            if (err instanceof NotFoundError) {
                const response = errorResponse(
                    err.statusCode,
                    [{'msg': err.message || 'Not found'}]
                )
                return res.status(err.statusCode).send(response)
            }

            if (err instanceof ValidationError) {
                const response = errorResponse(
                    err.statusCode,
                    err.errors
                )
                return res.status(err.statusCode).send(response)
            }

            if (err instanceof AuthenticationError) {
                const response = errorResponse(
                    err.statusCode,
                    [{msg: err.message || 'Credentials do not match'}]
                )
                return res.status(err.statusCode).send(response)
            }

            if (err instanceof AuthorizationError) {
                const response = errorResponse(
                    err.statusCode,
                    [{msg: err.message || 'Access denied'}]
                )
                return res.status(err.statusCode).send(response)
            }
        }
    })
}
