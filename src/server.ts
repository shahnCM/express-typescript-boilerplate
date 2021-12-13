import { Application } from "express";
import { initiateRabbitMqConsumers } from "./channels/rabbitmq/consumersInit";

const port: string = '9000'

export function bootServer(app: Application): void {
    try {
        // Boot Server Node
        app.listen(port, (): void => {
            console.log(`Connected successfully on port ${port}`)
        });

        // RabbitMqConsumersInit
        initiateRabbitMqConsumers()
    } catch (error: any) {
        console.error(`Error occured: ${error.message}`)
    }
}