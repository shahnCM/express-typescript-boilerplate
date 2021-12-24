export class UploadError extends Error {
    public status = 422
    constructor(message: string) {
        super(message || 'Upload Error');
        this.name = this.constructor.name
    }    
}