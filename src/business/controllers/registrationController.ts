import { Request, Response } from "express";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export async function registerCompanyAdmin(req: Request, res: Response): Promise<Response> {

    return res.status(200).send({
        message: "Registration Successful",
        data: req.body
    })

}