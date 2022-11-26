import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const notFound = async (req: Request, res: Response, next: NextFunction) => {

    return res.status(StatusCodes.NOT_FOUND).send('route does not exist')
}