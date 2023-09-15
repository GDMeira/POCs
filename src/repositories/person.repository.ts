import db from "@/database/database.connection";
import { Person } from "@/protocols/types";

async function getAmountOfPeople(): Promise<number> {
    const query = `SELECT COUNT(*) FROM people;`;
    const result = await db.query(query, []);
    return result.rows[0].count;
}

async function findRandomPerson(max: number): Promise<Person> {
    const query = `SELECT * FROM people WHERE id=$1`;
    const result = await db.query(query, [Math.floor(Math.random() * (max - 1 + 1) + 1)]);
    const person: Person = result.rows[0];
    return person;
}

const PersonRepository = {
    findRandomPerson, getAmountOfPeople
}

export default PersonRepository;
