import {getRabbitMqChannel} from "../conn";

export async function sampleBroker(data: string): Promise<any> {

    data = JSON.stringify({'message': data})
    const queueName: string = "node-rabbitmq-sample"
    const channel = await getRabbitMqChannel()
    await channel.assertQueue(queueName)

    try {
        channel.sendToQueue(queueName, Buffer.from(data), { persistent: true })
        console.log(`Sent: ${data}`)
    } catch (e) {
        console.log(e.message);
    }

    // await channel.close()
    // console.log('channel close: Broker')
    // await channel.connection.close()
    // console.log('connection close: Broker')
}
