class ApiError extends Error {
    constructor (
        statusCOde,
        message = "Something went wrong",
        errors = [],
        statck = ""
    ){
        super(message)
        this.statusCode = this.statusCode
        this.data = null
        this.message = message
        this.succes = false;
        this.errors = errors
        if(stactk) {
            this.stack = statck
        }
        else {
            Error.captureStackTrace(this, this.constructor)
        }

    }
}
export {ApiError}