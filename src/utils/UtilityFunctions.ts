export function sendInBackground(callback: Function, params: Array<any> = [], timeOut:number = 1) {
    setTimeout(_ => callback(...params), timeOut)
}