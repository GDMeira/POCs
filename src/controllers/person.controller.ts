import { Request, Response } from "express";
import PersonServices from "@/services/person.services";
import { error } from "@/errors/error";
import httpStatus from "http-status";
import { Person } from "@prisma/client";

async function getPerson(req: Request, res: Response) {
    let { random, id } = req.query;

    if (!random) {
        if (!id || !Number(id) || Number(id) < 1 || !Number.isInteger(Number(id))) {
            throw error.badRequest("Mande uma query random ou id válida!");
        }
    }

    let person: Person;

    if (random) {
        person = await PersonServices.getRandomPerson();
    }

    if (id) {
        person = await PersonServices.getPerson(Number(id));
    }


    return res.status(httpStatus.OK).send(person);
}

async function postPerson(req: Request, res: Response) {
    await PersonServices.postPerson(req.body);

    res.sendStatus(httpStatus.CREATED);
}

async function updatePerson(req: Request, res: Response) {
    const id = Number(req.params.id);

    if (!id || id < 1 || !Number.isInteger(id)) {
        throw error.badRequest("id inválido!");
    }

    const person = await PersonServices.updatePerson(id, req.body.phone);

    res.status(httpStatus.OK).send(person);
}

async function deletePerson(req: Request, res: Response) {
    const id = Number(req.params.id);

    if (!id || id < 1 || !Number.isInteger(id)) {
        throw error.badRequest("id inválido!");
    }

    await PersonServices.deletePerson(id);

    res.sendStatus(httpStatus.NO_CONTENT);
}

const personController = {
    getPerson,
    postPerson,
    updatePerson,
    deletePerson,

}

export default personController;