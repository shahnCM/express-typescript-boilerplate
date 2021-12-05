import amqp from "amqplib"
export var channel: any
export var connection: any

export async function rabbitMqConnect(): Promise<any> {
    try {
        const amqpServer = "rabbitmq:5670"
        connection = await amqp.connect(amqpServer)   
        channel = await connection.createChannel()
        await channel.assertQueue("node-rabbitmq-sample")
    } catch(err) {
        console.log(err);
    }
    
}