import { createPersonSchema, updatePersonSchema } from '@/schemas/person.schema';
import { Router } from "express";
import personController from "@/controllers/person.controller";
import schemaValidation from "@/middlewares/schemaValidation";
import godPowersValidation from '@/middlewares/godPowersValidation';
import { createReviewSchema } from '@/schemas/review.schema';
import reviewController from '@/controllers/review.controller';

const router = Router();

router.get('/person', personController.getPerson);
router.post('/person', schemaValidation(createPersonSchema), personController.postPerson);
router.patch('/person/:id', godPowersValidation, schemaValidation(updatePersonSchema), personController.updatePerson);
router.delete('/person/:id', godPowersValidation, personController.deletePerson);
router.post('/review', schemaValidation(createReviewSchema), reviewController.createReview);
router.get('/review/person/:id', reviewController.readReviews)

export default router;