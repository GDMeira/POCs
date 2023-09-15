import express, { Application, json } from "express";
import cors from 'cors';
import router from "./routes/index.routes";
import db from "./database/database.connection";

const app : Application = express();

app.use(json());
app.use(cors());
app.use(router);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});