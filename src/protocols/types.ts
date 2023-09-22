import { HttpStatus } from "http-status";
import { Person, Review } from "@prisma/client";

export type CreatePerson = Omit<Person, 'id'>
export type CreateReview = Omit<Review, 'id'>
export type GetReview = Omit<Review, 'personId'>

export type CustomError = {
    type: string; 
    message: string; 
    statusCode: HttpStatus;
}