import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";

export default function schemaValidation(schema: Schema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body);

        if (validation.error) return res.status(422).send(validation.error.details[0].message);

        next();
    }
}