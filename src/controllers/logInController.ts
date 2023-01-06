import { grantToken } from "../services/authService";
import {successResponse} from "../utils/apiResponser";
import { Request, Response } from "express";
import {SystemAdminLogInAttemptEvent} from "../events/eventList";
import {SystemAdminLogInAttemptEventEmitter} from "../events/emitters/SystemAdminLogInAttemptEventEmitter";

// System Admin LogIn
export async function logInSystemAdmin(req: Request, res: Response): Promise<Response> {

    // SystemAdminLogInAttemptEventEmitter(SystemAdminLogInAttemptEvent, req.body)

    const { email, password } = req.body
    const result = await grantToken(email, password)

    return res.status(200).send(successResponse(200, [{
        "auth-token": result
    }]))
}

// Company Admin LogIn
export async function logInCompanyAdmin(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body
    const result = await grantToken(email, password)

    return res.status(200).send(successResponse(200, [{
        "auth-token": result
    }]))
}
