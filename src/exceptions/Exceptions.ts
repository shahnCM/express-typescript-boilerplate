import { response } from "express"
import { request } from "http";

export function paramsCheck(params: Array<any> = []) {
    if(params.length === 0) {
        console.error('Parameter Missing')
        // return response.header("Content-Type", "application/json").status(500).send('No Parameters Given')
    }
    return false
}