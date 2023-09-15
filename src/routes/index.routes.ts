import { Router } from "express";
import personController from "@/controllers/person.controller";

const router = Router();

router.get('/person',personController.getPerson);

export default router;