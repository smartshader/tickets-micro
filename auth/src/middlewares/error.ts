import { Request , Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { RequestValidationError } from "../errors/request-validation-error";
import { DatabaseConnectionError } from "../errors/database-connection-error";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof RequestValidationError) {
        const formattedErrors = err.errors.map(error => {
            return { message: error.msg, field: error.param };
        });

        return res.status(StatusCodes.BAD_REQUEST)
            .send({ errors: formattedErrors });
    }

    if (err instanceof DatabaseConnectionError) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
            .send({ errors: [{ message: err.reason }] });
    }

    res.status(StatusCodes.BAD_REQUEST)
        .send({
            errors: [{ message: 'Something went wrong' }]
        });
};