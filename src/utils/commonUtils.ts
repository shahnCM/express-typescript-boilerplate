// Higher Order Function for Simple *Function
export const safeBackground = (fn: Function, timeOut: number = 1) => (...params: Array<any>) => setTimeout(_ => fn(...params), timeOut)

// Higher Order Function for Simple *Promises
export const safePromise = (fn: Function) => (...params: Array<any>) => fn(...params).then((res: any) => console.log(`SafeResponse: ${res}`)).catch((err: any) => console.error(`Oops, ${err.msg}`))

