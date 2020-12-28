import { CustomError } from "./custom-error";
import { StatusCodes } from "http-status-codes";

export class NotFoundError extends CustomError {
    statusCode = StatusCodes.NOT_FOUND;

    constructor() {
        super('Route not found');

        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serializeError(): { message: string; field?: string }[] {
        return [{message: 'Not Found'}];
    }
}