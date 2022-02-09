import { Request, Response, NextFunction } from "express";
import { grantToken } from "../services/authService";
import {successResponse} from "../../utils/commonUtils";
import {SystemAdminLogInAttemptEvent} from "../../events/eventList";
import events from "events";
import {eventObject} from "../../events";
import {SystemAdminLogInAttemptEventEmitter} from "../../events/emitters/SystemAdminLogInAttemptEventEmitter";

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

    throw Error('WOW')

}