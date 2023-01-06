
import { getWorkerPool } from "../multiThreading/workerpool/getWorkerPool";

export const bigDataProcessing = async (): Promise<any> => {
    return await getWorkerPool('bigLoop').then((worker: any) => worker.bigLoop(99999999999))
}



