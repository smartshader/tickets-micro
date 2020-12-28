import { ValidationError } from "express-validator";
import { StatusCodes } from "http-status-codes";
import { CustomError } from "./custom-error";

export class RequestValidationError extends CustomError {
    statusCode = StatusCodes.BAD_REQUEST;

    constructor(public errors: ValidationError[]) {
        super('Invalid request parameters');

        // Only because we are extending a built in class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeError() {
        return this.errors.map(error => {
            return {message: error.msg, field: error.param}
        })
    }
}