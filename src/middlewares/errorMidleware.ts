import { CustomError } from "@/protocols/types";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export default function errorMidleware(error: CustomError | any, req: Request, res: Response, next: NextFunction) {
    console.error(error);
    const {  statusCode, message, type } = error;
    if (error.hasOwnProperty("statusCode")) return res.status(statusCode).send(`${type}\n${message}`);

    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
}