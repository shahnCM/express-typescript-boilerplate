import {Job} from 'bull';
import { sampleMessageBroker } from '../../channels/rabbitmq';

export async function emailProcess (job: Job) {
    try {
        console.log('From Job:', job.data)
        // sampleMessageBroker(job.data)
    } catch {
        throw new Error('Email Job Error')
    }
}

