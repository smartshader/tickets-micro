import { StatusCodes } from "http-status-codes";
import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
    statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    reason = 'Error connecting to database';

    constructor() {
        super('Error connecting to database');

        // Only because we are extending a built in class
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializeError() {
        return [
            {message: this.reason}
        ];
    }
}
