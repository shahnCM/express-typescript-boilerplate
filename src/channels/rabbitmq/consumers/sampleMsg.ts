import { rabbitMqConnect } from "../connRabbit";

export async function sampleMessageConsumer() : Promise<any> {  

    const queueName: string = "node-rabbitmq-sample"
    const connection = await rabbitMqConnect()
    const channel = await connection.createChannel()
    await channel.assertQueue(queueName)

    try {
        
        await channel.consume(queueName, function(data: any): void {
            console.log(`Recieved: ${Buffer.from(data.content)}`)
            channel.ack(data)
        })
    
    } catch (e) {
        
        console.log('From Consumer: ')
        console.log(e)
    
    }

    // await channel.close()
    // await connection.close()
    
    // await channel.close() 
}