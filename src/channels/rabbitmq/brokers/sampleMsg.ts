import { rabbitMqConnect } from "../connRabbit";

export async function sampleMessageBroker(data: string) : Promise<any> {
    
    data = JSON.stringify({'message': data})
    console.log(data);

    const queueName: string = "node-rabbitmq-sample"
    const connection = await rabbitMqConnect()
    const channel = await connection.createChannel()
    await channel.assertQueue("node-rabbitmq-sample")

    try {
        await channel.sendToQueue(queueName, Buffer.from(data))
     } catch (e) {
        console.log(e.message);
    }  
    
    // channel.close()
    // connection.close()
}