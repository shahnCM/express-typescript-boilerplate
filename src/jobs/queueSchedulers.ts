import { QueueScheduler } from 'bullmq'
import config from 'config';

const conn: object = {
    connection: {
        host: config.get("redis-host"),
        port: config.get("redis-port")
    }
}

export const initiateEmailQueueScheduler = async (): Promise<any> => {
    const emailQueueScheduler = new QueueScheduler('emailQueue', conn)
    console.log(`Running Email Queue: ${emailQueueScheduler.isRunning()}`)
}
