interface successInterface {
    status_code: number,
    status: string,
    data: Array<any>|Object|JSON|string
}

interface errorInterface {
    status_code: number,
    status: string,
    errors: Array<any>|Object|JSON|string
}

// Success Response
export function successResponse (
    statusCode: number = 200,
    data: Array<any>|Object|JSON|string = [],
): successInterface {
    return {
        "status_code": statusCode,
        "status": "SUCCESS",
        "data": data,
    }
}

// Error Response
export function errorResponse (
    statusCode: number = 422,
    errors: Array<any>|Object|JSON|string = []
): errorInterface {
    return {
        "status_code": statusCode,
        "status": "ERROR",
        "errors": errors
    }
}