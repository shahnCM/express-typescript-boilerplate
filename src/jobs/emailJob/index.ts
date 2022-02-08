import { Queue, Worker } from "bullmq"
import config from "config";

const conn: object = {
    connection: {
        host: config.get("redis-host"),
        port: config.get("redis-port")
    }
}

const options: object = {
    delay: 10000,
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 1000,
    },
}

const queue = "emailQueue"

export const emailQueue = new Queue(queue, conn)

export const emailWorker = new Worker(queue, async (job)=>{
    console.log(`JOB FROM EMAIL QUEUE ${JSON.stringify(job.data)}`)
    console.log(`SEND EMAIL TO ${(job.data.email)}`)
}, conn)

export const dispatchEmailJob = async (data: any): Promise<void> => {
    await emailQueue.add(queue, data, options)
}
// emailWorker.on('completed', job => console.log(`${job} DONE `))
