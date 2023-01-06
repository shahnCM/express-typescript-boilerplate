import fs from "fs"
import Path from "path"
import workerpool from "workerpool";
import { options } from "../../packageSettings/workerpool/settings";

export const getWorkerPool = (functionName: string) => {
    const distFilePath = './threadFunctions/' + functionName + '_onThread.js'
    return workerpool.pool(Path.join(__dirname, distFilePath), options).proxy();
}
    
    // getPoolProxy = (): any => {
    //     console.log(this.poolProxy)
        
    //     // const distFilePath: string = './threadFunctions/' + functionName + '_onThread.js'
    //     // console.log(srcFilePath, Path.join(__dirname, distFilePath), fs.existsSync(distFilePath));
        
        
    //     // if (fs.existsSync(Path.join(__dirname, distFilePath))) {
    //     //     const pool: any = workerpool.pool(Path.join(__dirname, distFilePath), options)
    //     //     return pool.proxy() 
    //     // }
    
    //     // throw new UploadError
    // }

