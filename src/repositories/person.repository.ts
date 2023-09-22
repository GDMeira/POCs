import prisma from "@/database/database.connection";
import { error } from "@/errors/error";
import { CreatePerson } from "@/protocols/types";
import { Person } from "@prisma/client";

type AmountPeopleAtDB = {
    count: number;
    max: number;
}

async function getAmountOfPeople(): Promise<AmountPeopleAtDB> {
    const result = await prisma.person.aggregate({
        _max: {
            id: true
        },
        _count: {
            id: true
        }
    });

    const amountOfPeople: AmountPeopleAtDB = {count: result._count.id, max: result._max.id};

    return amountOfPeople;
}

function createPerson(person: CreatePerson) {
    return prisma.person.create({
        data: person
    });
}

async function findPersonById(id: number, forRandomPerson: boolean = false): Promise<Person> {
    let result: Person; 

    try {
        await prisma.person.update({
            data: {visits: {increment: 1}},
            where: {id}
        })

        result = await prisma.person.findUnique({
            where: {id},
            include: {
                review: {
                    where: {personId: id}
                }
            }
        })
    } catch (e) {
        if (e?.code === 'P2025' && !forRandomPerson) throw error.notFound('Não foi possível encontrar uma pessoa com esse id.');

        return null;
    }

    return result;
}

async function updatePerson(id: number, phone: string): Promise<Person> {
    let result: Person; 

    try {
        result = await prisma.person.update({
            data: {phone},
            where: {id}
        });
    } catch (e) {
        if (e?.code === 'P2025') throw error.notFound('Não foi possível encontrar uma pessoa com esse id.')
    }

    return result;
}

async function deletePerson(id: number): Promise<Person> {
    let result: Person; 

    try {
        result = await prisma.person.delete({
            where: {id}
        });
    } catch (e) {
        if (e?.code === 'P2025') throw error.notFound('Não foi possível encontrar uma pessoa com esse id.')
    }

    return result;
}

const PersonRepository = {
    getAmountOfPeople,
    createPerson,
    findPersonById,
    updatePerson,
    deletePerson,

}

export default PersonRepository;
