import workerpool from "workerpool";
import Path from "path"

let poolProxy: any = null

export const options = {
    minWorkers: 'max'
}

export const initiateWorkerPull = async (options: any): Promise<any> => {
    const pool:any = workerpool.pool(Path.join(__dirname, './threadFunctions.js'), options)
    poolProxy = await pool.proxy()
    // console.log(`PoolStats: ${JSON.stringify(pool, null, 4)}`)
    console.log(
        `Worker Threads Enabled:
            - Min Workers: ${pool.minWorkers}
            - Max Workers: ${pool.maxWorkers}
            - Worker Type: ${pool.workerType}
        `
    )
}

export const getWorkerPull = (): any => {
    return poolProxy
}
