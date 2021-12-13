import amqp from "amqplib"

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

