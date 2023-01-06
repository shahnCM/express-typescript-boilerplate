import { Response } from "express";
import { errorResponse } from "../utils/apiResponser";
export class UploadError extends Error {
    public statusCode = 422
    constructor(message: string = '') {
        super(message || 'Upload Error');
        this.name = this.constructor.name
    }
    public respond(res: Response) {
        return res.status(this.statusCode)
            .send(errorResponse(this.statusCode, [{ msg: this.message }]))
    }
}
