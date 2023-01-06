import Path from "path"
import workerpool from "workerpool";

let pool: any = null
let poolProxy: any = null

export const options: object = {
    minWorkers: 3,
    workerType: 'thread'
}

export const initiateWorkerPool = async (optionsGiven: any = options): Promise<any> => {
    pool = workerpool.pool(Path.join(__dirname, './threadFunctions.js'), options)
    poolProxy = await pool.proxy()
    
    console.log(
        `Worker Threads Enabled:
            - Min Workers: ${pool.minWorkers}
            - Max Workers: ${pool.maxWorkers}
            - Worker Type: ${pool.workerType}
        `
    )
}

export const getWorkerPool = (): any => {
    console.log(pool.stats());
    
    return poolProxy
}
