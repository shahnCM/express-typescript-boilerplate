import amqp from "amqplib"
export var channel: any
export var connection: any

export async function rabbitMqConnect(): Promise<any> {
    try {
        const amqpServer = "amqp://rabbit:rabbit@rabbitmq:5672"
        connection = await amqp.connect(amqpServer)   
        channel = await connection.createChannel()
        await channel.assertQueue("node-rabbitmq-sample")
        console.log('RabbitMq Connection Successful')
    } catch(err) {
        console.log(err.message);
    }
    
}