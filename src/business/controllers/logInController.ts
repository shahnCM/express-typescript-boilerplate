import { Request, Response, NextFunction } from "express";
import { grantToken } from "../services/authService";
import {successResponse} from "../../utils/commonUtils";
import {SystemAdminLogInAttemptEvent} from "../../events/eventList";
import events from "events";
import {eventObject} from "../../events";
import {SystemAdminLogInAttemptEventEmitter} from "../../events/emitters/SystemAdminLogInAttemptEventEmitter";

// System Admin LogIn
export async function logInSystemAdmin(req: Request, res: Response): Promise<any> {

    // SystemAdminLogInAttemptEventEmitter(SystemAdminLogInAttemptEvent, req.body)

    const { email, password } = req.body
    const result = await grantToken(email, password)

    return res.send(successResponse(200, [{
        "auth-token": result
    }])).status(200)
}

// Company Admin LogIn
export async function logInCompanyAdmin() {

}
