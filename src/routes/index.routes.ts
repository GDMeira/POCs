import { createPersonSchema, updatePersonSchema } from '@/schemas/person.schema';
import { Router } from "express";
import personController from "@/controllers/person.controller";
import schemaValidation from "@/middlewares/schemaValidation";
import godPowersValidation from '@/middlewares/godPowersValidation';

const router = Router();

router.get('/person', personController.getPerson);
router.post('/person', schemaValidation(createPersonSchema), personController.postPerson);
router.patch('/person/:id', godPowersValidation, schemaValidation(updatePersonSchema), personController.updatePerson);

export default router;