import { Request, Response } from 'express'
import { paramsCheck } from '../exceptions/Exceptions'
import { sendInBackground } from '../utils/UtilityFunctions'

export async function sampleActionForApi(req: Request, res: Response): Promise<Response> {
    
    sendInBackground(logConsole)
    
    return res.status(200).send({
        message: "API:Simple Call users Route from Here! FROM CONTROLLER",
        data: req.protocol
    })
}

function logConsole(msg: string): void {

    if(paramsCheck([...arguments])) {
        return
    }

    for(let i = 1; i < 999999; i++){
        console.log(msg + '->  ' + i)
    }
}