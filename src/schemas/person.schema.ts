import Joi, { Schema } from "joi";
import { CreatePerson } from "@/protocols/types";


export const createPersonSchema: Schema = Joi.object<CreatePerson>({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    phone: Joi.string().min(10).max(11).required()
})

export const updatePersonSchema: Schema = Joi.object<CreatePerson>({
    phone: Joi.string().min(10).max(11).required()
})