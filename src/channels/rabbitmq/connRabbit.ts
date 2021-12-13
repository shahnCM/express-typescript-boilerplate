import amqp from "amqplib"
import { sampleMessageConsumer } from "./consumers/sampleMsg"

// Initiate Connection
export async function rabbitMqConnect(): Promise<any> {
    
    try {

        const amqpServer = "amqp://rabbit:rabbit@rabbitmq:5672"
        const connection = await amqp.connect(amqpServer)   
        
        console.log('RabbitMq Connection Successful')

        return connection
    
    } catch(err) {
    
        console.log(err.message);
    
    }
    
}

// Initiate Consumers
async function initiateConsumers(): Promise<any> {
    await sampleMessageConsumer()
}
