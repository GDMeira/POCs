import { error } from "@/errors/error";
import { NextFunction, Request, Response } from "express";


export default function godPowersValidation(req: Request, res: Response, next: NextFunction) {
    const password = req.headers.authorization;

    if (password !== process.env.PASSWORD) throw error.acessDenied();

    next();
}