export class UploadError extends Error {
    public statusCode = 422
    constructor(message: string) {
        super(message || 'Upload Error');
        this.name = this.constructor.name
    }
}
