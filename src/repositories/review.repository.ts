import prisma from "@/database/database.connection";
import { error } from "@/errors/error";
import { CreateReview, GetReview } from "@/protocols/types";
import { Review } from "@prisma/client";

async function createReview(review: CreateReview): Promise<Review> {
    let result: Review;

    try {
        result = await prisma.review.create({
            data: review
        })
    } catch (e) {
        if (e?.code === 'P2003') throw error.notFound('Não foi possível encontrar uma pessoa com esse id.');

        return null;
    }

    return result
}

async function readReviews(personId: number): Promise<GetReview[]> {
    let result: GetReview[];

    try {
        result = await prisma.review.findMany({
            where: {personId},
            select: {
                id: true,
                comment: true,
                grade: true
            }
        })
    } catch (e) {
        if (e?.code === 'P2003') throw error.notFound('Não foi possível encontrar uma pessoa com esse id.');

        return null;
    }

    return result
}

const reviewRepository = {
    createReview,
    readReviews,

}

export default reviewRepository;