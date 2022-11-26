import { AnyZodObject } from "zod";
import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from "http-status-codes";


const validateResource = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse({
                body: req.body
            })
        }catch (e: any) {
            // const errors = e.map((err: any) => err.message)
            // return res.status(StatusCodes.BAD_REQUEST).json({ errors })

            return res.status(StatusCodes.BAD_REQUEST).send(e)
        }
    }
}

export default validateResource;