import Bull from 'bull'
import {emailProcess} from "./emailJobProcess";

const emailQueue = new Bull('email', {
    redis: {
        host: 'redis',
        port: 6379,
        password: ''
    }
})

emailQueue.process(emailProcess)

export function sendNewEmail (data: any) {
    emailQueue.add(data, {
        attempts: 2
    })
}
