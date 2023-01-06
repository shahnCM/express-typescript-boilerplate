import config from "config";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { User } from "../database/objection/models/User";
import { AuthenticationError } from "../errors/AuthenticationError";

export const grantToken = async (email: string, password: string): Promise<string | Error> => {

    // Retrieve user
    let user: any = await User.query()
        .select('id_users', 'password', 'role_id')
        .where('email', '=', email)
        .first()

    // Check if user exists
    if (!user) {
        throw new AuthenticationError()
    }

    // Compare password
    const passwordMatch: boolean = await comparePassword(password, user.password)

    // Check if password matches
    if (!passwordMatch) {
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
    const jwtSecret: string = config.get('jwtSettings-secret')
    const expiresIn: string = config.get('jwtSettings-expiresIn')
    const token: string = await jwtSign(payload, jwtSecret, {expiresIn})

    return token
}

// Sign JWT
export async function jwtSign(payload: any, secret: string, options: object): Promise<any> {
    return jwt.sign(payload, secret, options)
}

// Compare passwords
export async function comparePassword(one: string, two: string): Promise<boolean> {
    return await bcrypt.compare(one, two)    
}
