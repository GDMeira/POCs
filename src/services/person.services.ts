import { error } from "@/errors/error";
import { CreatePerson, Person } from "@/protocols/types";
import PersonRepository from "@/repositories/person.repository";

async function getRandomPerson() {
   const amountOfPeople = await PersonRepository.getAmountOfPeople();
   const id = Math.floor(Math.random() * (amountOfPeople - 1 + 1) + 1);
   const randomPerson = await PersonRepository.findPersonById(id);

   return randomPerson.rows[0] as Person;
}

async function postPerson(person: CreatePerson) {
   await PersonRepository.createPerson(person);
}

async function getPerson(id: number) {
   const person = await PersonRepository.findPersonById(id);

   if (person.rowCount === 0) throw error.notFound('Não foi possível encontrar uma pessoa com esse id.')

   return person.rows[0] as Person;
}

async function updatePerson(id: number, phone: string) {
   const person = await PersonRepository.updatePerson(id, phone);

   if (person.rowCount === 0) throw error.notFound('Não foi possível encontrar uma pessoa com esse id.')

   return person.rows[0] as Person;
}

const PersonServices = {
   getRandomPerson,
   postPerson,
   getPerson,
   updatePerson,
   

}

export default PersonServices;