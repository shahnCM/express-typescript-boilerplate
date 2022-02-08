import amqp from "amqplib"
import config from "config"

// Initiate Connection
export async function getRabbitMqConnection(): Promise<any> {

    try {

        const amqpServer: string = config.get("rabbitmq-conn-string")
        const connection = await amqp.connect(amqpServer)

        console.log('RabbitMq Channel Connection Successful')

        return connection

    } catch (err) {

        console.log(err.message);

    }

}

// Initiate Channel
export async function getRabbitMqChannel(): Promise<any> {

    try {
        const connection = await getRabbitMqConnection()
        const channel = await connection.createChannel()

        console.log('RabbitMq Channel Initiated')

        return channel

    } catch (err) {

        console.log(err.message);

    }

}
