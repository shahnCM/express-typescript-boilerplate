// Higher Order Function for Simple *Function
export const safeBackground = (fn: Function, timeOut: number = 1) => (...params: Array<any>) => setTimeout(_ => fn(...params), timeOut)

// Higher Order Function for Simple *Promises
export const safePromise = (fn: Function) => (...params: Array<any>) => fn(...params).then((res: any) => console.log(`SafeResponse: ${res}`)).catch((err: any) => console.error(`Oops, ${err.msg}`))

// Success Response
export function successResponse (
    statusCode: number = 200,
    data: Array<any>|Object|JSON|string = [],
): Object {
    return {
        "statusCode": statusCode,
        "status": "SUCCESS",
        "data": data,
    }
}

// Error Response
export function errorResponse (
    statusCode: number = 422,
    errors: Array<any>|Object|JSON|string = []
): Object {
    return {
        "statusCode": statusCode,
        "status": "ERROR",
        "errors": errors
    }
}
