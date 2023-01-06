import { Response } from "express";
import { errorResponse } from "../utils/apiResponser";
export class AuthenticationError extends Error {
    public statusCode: number = 403
    constructor(message: string = "") {
        super(message || 'Authentication Error');
        this.name = this.constructor.name
    }
    public respond(res: Response) {
        return res.status(this.statusCode)
            .send(errorResponse(this.statusCode, [{ msg: this.message }]))
    }
}
