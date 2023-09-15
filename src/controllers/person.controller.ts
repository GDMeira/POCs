import { Request, Response } from "express";
import PersonServices from "@/services/person.services";
import { error } from "@/errors/error";

async function getPerson(req: Request, res: Response) {
    const randomPerson = await PersonServices.getRandomPerson();

    return res.status(200).send(randomPerson);
}

const personController = {
    getPerson,

}

export default personController;