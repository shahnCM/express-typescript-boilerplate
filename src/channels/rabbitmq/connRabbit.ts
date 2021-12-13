import amqp from "amqplib"
import { rabbitMqConnString } from "../../configs/config"

// Initiate Connection
export async function rabbitMqConnect(): Promise<any> {
    
    try {

        const amqpServer = rabbitMqConnString
        const connection = await amqp.connect(amqpServer)   
        
        console.log('RabbitMq Connection Successful')

        return connection
    
    } catch(err) {
    
        console.log(err.message);
    
    }
    
}

