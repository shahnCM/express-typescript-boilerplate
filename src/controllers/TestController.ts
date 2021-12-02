import { Request, Response } from 'express'
import { paramsCheck } from '../exceptions/Exceptions'
import { safeBackground as sbg } from '../utils/UtilityFunctions'
import {sendNewEmail} from "../jobs/sampleEmail/emailJobQueue";
import {executeOnThread} from "../threads/parents/parent";

export async function sampleActionForQueue(req: Request, res: Response): Promise<Response> {
    await sendNewEmail(req.query)

    return res.status(200).send({
        message: "Action From Controller For Queue Reached Successfully",
        data: req.query
    })
}

export async function sampleActionForWorker(req: Request, res: Response): Promise<Response> {
    executeOnThread(12, 14)

    return res.status(200).send({
        message: "Action From Controller For Queue Reached Successfully",
        data: req.query
    })
}

export async function sampleActionForApi(req: Request, res: Response): Promise<Response> {

    sbg(logConsole)('logA', 100000)
    sbg(logConsole)('logA', 1000)
    sbg(logConsole)('logA', 100)
    sbg(logConsole)('logA', 10)

    return res.status(200).send({
        message: "API:Simple Call users Route from Here! FROM CONTROLLER",
        data: req.protocol
    })

}

function logConsole(msg: string, iterations: any = 99999): any {

    if(paramsCheck([...arguments])) {
        return
    }

    for(var i = 1; i < iterations; i++) { }
    console.log(msg + '->  ' + i)
    return i
}