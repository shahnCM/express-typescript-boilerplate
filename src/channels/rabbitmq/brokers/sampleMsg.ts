import { rabbitMqConnect } from "../connRabbit";

export async function sampleMessageBroker(data: string) : Promise<any> {
    
    data = JSON.stringify({'message': data})
    console.log(data);

    const connection = await rabbitMqConnect()
    const channel = await connection.createChannel()
    await channel.assertQueue("node-rabbitmq-sample")

    // channel.close()
    // connection.close()
    
    try {
        await channel.sendToQueue("node-rabbitmq-sample", Buffer.from(data))
     } catch (e) {
        console.log(e.message);
    }  
    
    // await channel.close() 
}