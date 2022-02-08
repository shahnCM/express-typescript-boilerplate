import { Request, Response, NextFunction } from "express";
import { grantToken } from "../services/authService";
import {successResponse} from "../../utils/commonUtils";
import {SystemAdminLogInAttemptEvent} from "../../events/eventList";
import events from "events";
import {eventObject} from "../../events";
import {SystemAdminLogInAttemptEventEmitter} from "../../events/emitters/SystemAdminLogInAttemptEventEmitter";

// System Admin LogIn
export async function logInSystemAdmin(req: Request, res: Response, next: NextFunction): Promise<any> {

    SystemAdminLogInAttemptEventEmitter(SystemAdminLogInAttemptEvent, req.body)

    const { email, password } = req.body
    const result = await grantToken(email, password)

    if(result instanceof Error) {
        return next(result)
    }

    // await dispatchEmailJob({email: email})

    const response = successResponse(
        200,
        [{"auth-token": result}]
    )

    return res.status(200).send(response)
}

// Company Admin LogIn
export async function logInCompanyAdmin() {

}
