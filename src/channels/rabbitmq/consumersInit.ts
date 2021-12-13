import { sampleMessageConsumer } from "./index";

export async function initiateRabbitMqConsumers(): Promise<any>{
    sampleMessageConsumer()
}