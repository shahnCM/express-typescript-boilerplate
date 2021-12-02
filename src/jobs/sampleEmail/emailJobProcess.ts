import {Job} from 'bull';

export async function emailProcess (job: Job) {
    try {
        console.log(job.data)
    } catch {
        throw new Error('Email Job Error')
    }
}

