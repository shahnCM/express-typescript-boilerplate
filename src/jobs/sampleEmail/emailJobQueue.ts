import Bull from 'bull'
import { redisConObj } from '../../configs/config';
import {emailProcess} from "./emailJobProcess";

const emailQueue = new Bull('email', {
    redis: redisConObj
})

emailQueue.process(emailProcess)

export function sendNewEmail (data: any) {
    emailQueue.add(data, {
        attempts: 2
    })
}
