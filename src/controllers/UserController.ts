import { Request, Response } from 'express'

export async function sampleActionForApi(req: Request, res: Response): Promise<Response> {
    return res.status(200).send({
        message: "API:Simple Call users Route from Here! FROM CONTROLLER",
        data: req.protocol
    })
}