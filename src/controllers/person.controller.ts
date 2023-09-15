import { Request, Response } from "express";
import Person from "../protocols/types";
import PersonServices from "../services/person.services";

export default async function getPerson(req : Request,res:Response){
    const randomPerson = await PersonServices.getRandomPerson();
    return res.status(200).send(randomPerson);
}
