import { Request, Response, NextFunction } from "express";
import { grantToken } from "../services/authService";
import {successResponse} from "../utils/apiResponser";
import {SystemAdminLogInAttemptEvent} from "../events/eventList";
import events from "events";
import {eventObject} from "../events";
import {SystemAdminLogInAttemptEventEmitter} from "../events/emitters/SystemAdminLogInAttemptEventEmitter";
import { AuthenticationError } from "../errors/AuthenticationError";
import { AuthorizationError } from "../errors/AuthorizationError";
import { ValidationError } from "objection";
import { UploadError } from "../errors/UploadError";
import { bigDataProcessing } from "../services/testService";

// System Admin LogIn
export async function testAction(req: Request, res: Response, next: NextFunction): Promise<any> {

    console.log('REACHED')

    // Handle Error Function
    // function handleError(fn: Function) {
    //     return function (req: Request, res: Response, next:NextFunction) {
    //         Promise.resolve(fn(req, res))
    //         .then(r => console.log('KKKKKK ++++++++ ' + r))
    //         .catch(err => console.log('helllloww +==============', err))
    //     }
    // }

    // const wrapper = (func: Function) => {
    //     return (req: Request, res: Response, next: NextFunction) => {
    //         Promise.resolve(func(req, res)).catch(err => console.log("PRINT ERROR ", err))
    //     }
    // }

    // const another = async (req: Request, res: Response) => {
    //         console.log('RUNNING INSIDE');
    //         throw new Error('OMMA ERROR')
            
    //         return res.send('wow')
    // }

    // const call = wrapper(another)

    // call(req, res, next)

    throw new UploadError

}

export async function testAction2(req: Request, res: Response, next: NextFunction): Promise<any> {
    let n: number = await bigDataProcessing()
    return res.status(200).send(successResponse(200, [{
        "number": n
    }]))

}