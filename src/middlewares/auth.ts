import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export function passIfLoggedIn(req: Request, res: Response, next: NextFunction): any {
    const authToken = req.header('auth-token');

    if(authToken) {
        return next()
    }

    const errorObj = {
        status: 403,
        message: 'Access Denied',
        errors: [{
            'auth-error' : 'Can not access while not logged in' 
        }]
    }

    return next(errorObj)
}

export function blockIfLoggedIn(req: Request, res: Response, next: NextFunction): any {
    const authToken = req.header('auth-token');
    
    if(!authToken || authToken === undefined || authToken === null) {
        return next()
    }

    const errorObj = {
        status: 403,
        message: 'Access Denied',
        errors: [{
            'access-error' : 'Can not access while logged in' 
        }]
    }

    return next(errorObj)
}

