import { Application } from "express";

const port: string = '9000'

export function bootServer(app: Application): void {
    try {
        // Boot Server
        app.listen(port, (): void => {
            console.log(`Connected successfully on port ${port}`)
        });
    } catch (error: any) {
        console.error(`Error Occurred: ${error.message}`)
    }

    process.on('unhandledRejection', (err) => {
        console.error({
            message: "=== UNHANDLED REJECTION ===",
            stacktrace: err
        })
    });
    
    process.on('uncaughtException', (err) => {
        console.error({
            message: "=== UNCAUGHT EXCEPTION ===",
            stacktrace: err
        });
    });
}
