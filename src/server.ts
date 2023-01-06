import { Application, Request, Response, NextFunction } from "express";
import { keepAlive } from "./keepAlive";

const port: string = '8000'

export async function bootServer(app: Application): Promise<void> {

    // Anti Crash
    keepAlive(app)

    try {
        // Boot Server
        app.listen(port, (): void => {
            console.log(`Connected successfully on port ${port}`)
        });

    } catch (error: any) {
        console.error(`Error Occurred: ${error.message}`)
    }
}

