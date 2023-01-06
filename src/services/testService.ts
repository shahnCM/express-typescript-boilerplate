import config from "config";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { User } from "../database/objection/models/User";
import { AuthenticationError } from "../errors/AuthenticationError";
import { getWorkerPool } from "../multiThreading/workerpullThreads";

export const bigDataProcessing = async (): Promise<number> => {
    console.log('BIG DATA PRCESSING')

    return await getWorkerPool().bigLoop(9999999)
}

// Big Loop
export async function bigLoop(limit: number): Promise<number> {
    console.log('BIG LOOP')
    let n: number = 1

    for(let i = 0; i < limit; i++) {
        n+=i
        console.log(n);
    }

    return n;
}
