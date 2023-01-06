import { Response } from "express";
import { errorResponse } from "../utils/apiResponser";
export class ValidationError extends Error {
    public statusCode: number = 400
    public errors: any = []
    constructor(message: string, errors: any = []) {
        super(message || 'Validation Error');
        this.name = this.constructor.name
        this.errors = errors
    }
    public respond(res: Response) {
        return res.status(this.statusCode)
            .send(errorResponse(this.statusCode, this.errors))
    }
}
