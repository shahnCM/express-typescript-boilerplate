export function paramsCheck(params: Array<any> = []) {
    if(params.length === 0) {
        console.error('Parameter Missing')
        return true
    }

    return false
}