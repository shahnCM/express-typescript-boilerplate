import { Request, Response, NextFunction } from 'express'

export const dispatchAction = 
    (action: Function): any =>
        async (request: Request, response: Response, next:NextFunction): Promise<any> =>
            await action(request, response, next).catch(next) 
