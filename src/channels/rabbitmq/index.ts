import { sampleConsumer } from "./consumers/sampleConsumer";
export { sampleBroker } from "./brokers/sampleBroker"

export async function initiateRabbitMqConsumers(): Promise<void>{
    await sampleConsumer()
}
