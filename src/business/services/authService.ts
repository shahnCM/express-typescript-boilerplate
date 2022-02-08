import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import config from "config";
import { User } from "../../database/objection/models/User";
import {AuthenticationError} from "../../errors/AuthenticationError";
import {getWorkerPull} from "../../multiThreading/workerpullThreads";

export const grantToken = async (email: string, password: string): Promise<string|Error> => {

    // Retrieve user
    const user: any = await User.query()
        .select('id_users', 'password', 'role_id')
        .where('email', '=', email)
        .first();

    // Check if user exists
    if(!user) {
        return new AuthenticationError()
    }

    // Compare password
    const passwordMatch = await getWorkerPull().comparePassword(password, user.password)

    // Check if password matches
    if(!passwordMatch) {
        return new AuthenticationError()
    }

    // Generate payload for JWT token
    const payload: Object = {
        user: {
            id_user: user.id_users,
            id_role: user.role_id,
            email: email
        }
    }

    // Generate & Return JWT token
    return await getWorkerPull().jwtSign(
        payload, config.get('jwtSettings-secret'),
        {
            expiresIn: config.get('jwtSettings-expiresIn')
        })
}

// Sign JWT
export async function jwtSign(payload: any, secret: string, options: object) {
    return jwt.sign(payload, secret, options)
}

// Compare passwords
export async function comparePassword(one: string, two: string) : Promise<boolean> {
    return await bcrypt.compare(one, two)
}
