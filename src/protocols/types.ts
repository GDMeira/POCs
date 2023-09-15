import { HttpStatus } from "http-status";

export type Person = {
    id: number;
    firstName: string;
    lastName: string;
    visits: number;
    phone: string;
}

export type CreatePerson = Omit<Person, 'id'>

export type CustomError = {
    type: string; 
    message: string; 
    statusCode: HttpStatus;
}