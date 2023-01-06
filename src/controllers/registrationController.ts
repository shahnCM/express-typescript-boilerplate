import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { Request, Response } from "express";

export async function registerCompanyAdmin(req: Request, res: Response): Promise<Response> {

    return res.status(200).send({
        message: "Registration Successful",
        data: req.body
    })

}