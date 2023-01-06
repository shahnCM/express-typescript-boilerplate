import { Response } from "express";
import { errorResponse } from "../utils/apiResponser";
export class NotFoundError extends Error {
    public statusCode = 404
    constructor(message: string = '') {
        super(message || 'Not Found');
        this.name = this.constructor.name
    }
    public respond(res: Response) {
        return res.status(this.statusCode)
            .send(errorResponse(this.statusCode, [{ msg: this.message }]))
    }
}
