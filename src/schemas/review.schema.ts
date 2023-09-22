import Joi, { Schema } from "joi";
import { CreateReview } from "@/protocols/types";

export const createReviewSchema: Schema = Joi.object<CreateReview>({
    grade: Joi.number().integer().min(0).max(10).required(),
    comment: Joi.string().max(200),
    personId: Joi.number().integer().min(1).required()
})