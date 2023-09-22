import { CreateReview, GetReview } from "@/protocols/types";
import { Review } from "@prisma/client";
import reviewRepository from "@/repositories/review.repository";


async function createReview(review: CreateReview) {
    await reviewRepository.createReview(review);
}

async function readReviews(personId: number) {
    const reviews: GetReview[] = await reviewRepository.readReviews(personId);

    return reviews;
}

const reviewService = {
    createReview,
    readReviews,

}

export default reviewService;