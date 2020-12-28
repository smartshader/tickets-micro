import { Request , Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { CustomError } from "../errors/custom-error";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode)
            .send({errors: err.serializeError()});
    }

    res.status(StatusCodes.BAD_REQUEST)
        .send({errors: [{message: 'Something went wrong'}]});
};