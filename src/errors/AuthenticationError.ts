export class AuthenticationError extends Error {
    public statusCode: number = 403
    constructor(message: string = "") {
        super(message || 'Authentication Error');
        this.name = this.constructor.name
    }
}
