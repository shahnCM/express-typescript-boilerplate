import { Application, NextFunction, Request, Response } from "express";

export function keepAlive(app: Application): any {

    process.on('unhandledRejection', (err: any, p) => {
        console.error({
            message: "=== UNHANDLED REJECTION ===",
            stacktrace: err,
        })

        throw err
    })
    
    process.on('uncaughtException', (err: any, p) => {
        console.error({
            message: "=== UNCAUGHT EXCEPTION ===",
            stacktrace: err
        })
    })
}