import express, { Application, json } from "express";
import "express-async-errors";
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '@/swagger/swagger_output.json';
import router from "@/routes/index.routes";
import errorMidleware from "@/middlewares/errorMidleware";
import dotenv from "dotenv";

dotenv.config();
const app : Application = express();

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(json());
app.use(cors());
app.use(router);
app.use(errorMidleware);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listen on port ${port}`));