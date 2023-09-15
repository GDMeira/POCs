import db from "@/database/database.connection";
import { CreatePerson, Person } from "@/protocols/types";
import { QueryResult } from "pg";

async function getAmountOfPeople(): Promise<number> {
    const query = `SELECT COUNT(*) FROM people;`;
    const result = await db.query(query, []);

    return result.rows[0].count;
}

function createPerson(person: CreatePerson) {
    const { firstName, lastName, phone } = person;

    return db.query(`/* SQL */
        INSERT INTO people ("firstName", "lastName", phone) VALUES ($1, $2, $3);
    `, [firstName, lastName, phone]);
}

async function findPersonById(id: number): Promise<QueryResult<Person>> {
    const query = `/* SQL */
        UPDATE people 
        SET visits = visits + 1
        WHERE id=$1
        RETURNING id, "firstName", "lastName", visits, phone
    `;
    const result = await db.query<Person>(query, [id]);

    return result;
}

async function updatePerson(id: number, phone: string): Promise<QueryResult<Person>> {
    const query = `/* SQL */
        UPDATE people 
        SET phone = $2
        WHERE id = $1
        RETURNING id, "firstName", "lastName", visits, phone
    `;
    const result = await db.query<Person>(query, [id, phone]);

    return result;
}

const PersonRepository = {
    getAmountOfPeople,
    createPerson,
    findPersonById,
    updatePerson,
    
}

export default PersonRepository;
