import reviewService from "@/services/review.service";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function createReview(req: Request, res: Response) {
    await reviewService.createReview(req.body);

    res.sendStatus(httpStatus.CREATED);
}

async function readReviews(req: Request, res: Response) {
    const personId: number = parseInt(req.params.id);
    const reviews = await reviewService.readReviews(personId);

    res.status(httpStatus.OK).send(reviews);
}

const reviewController = {
    createReview,
    readReviews,

}

export default reviewController;