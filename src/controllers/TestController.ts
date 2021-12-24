import { Request, Response } from 'express'
import { paramsCheck } from '../exceptions/Exceptions'
import { safeBackground as sbg } from '../utils/UtilityFunctions'
import {sendNewEmail} from "../jobs/sampleEmail/emailJobQueue";
import {executeOnThread} from "../threads/parents/parent";
import { sampleMessageBroker } from '../channels/rabbitmq/brokers/sampleMsg';

export async function sampleActionForQueue(req: Request, res: Response): Promise<Response> {
    sendNewEmail(req.query)

    return res.status(200).send({
        message: "Action From Controller For Queue Reached Successfully",
        data: req.query
    })
}

export async function sampleActionForRabbitMq(req: Request, res: Response): Promise<Response> {
    const message: string = String(req.query['message'])
    sampleMessageBroker(message)

    return res.status(200).send({
        message: "Action From Controller For Rabbit MQ Reached Successfully",
        data: req.query
    })
}

export async function sampleActionForWorker(req: Request, res: Response): Promise<Response> {

    let numOne: number = Number(req.query['testParam1']) //14
    let numTwo: number = Number(req.query['testParam2']) //42

    executeOnThread(numOne, numTwo)

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

export async function sampleActionForFileUploads(req: Request, res: Response): Promise<Response> {
    
    return res.status(200).send({
        message: "API:File Upload Successful",
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
