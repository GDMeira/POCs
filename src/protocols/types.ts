import { HttpStatus } from "http-status";
import { Person } from "@prisma/client";

export type CreatePerson = Omit<Person, 'id'>

export type CustomError = {
    type: string; 
    message: string; 
    statusCode: HttpStatus;
}