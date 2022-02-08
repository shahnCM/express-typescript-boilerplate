export class NotFoundError extends Error {
    public statusCode = 404
    constructor(message: string) {
        super(message || 'Not Found');
        this.name = this.constructor.name
    }
}
