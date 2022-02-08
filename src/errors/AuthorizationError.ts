export class AuthorizationError extends Error {
    public statusCode: number = 401
    constructor(message: string) {
        super(message || 'Authorization Error');
        this.name = this.constructor.name
    }
}
