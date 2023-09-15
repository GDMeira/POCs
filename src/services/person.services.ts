import { error } from "@/errors/error";
import { CreatePerson, Person } from "@/protocols/types";
import PersonRepository from "@/repositories/person.repository";

async function getRandomPerson() {
   const { count: amountOfPeople, max: maxId } = await PersonRepository.getAmountOfPeople();
   if (!amountOfPeople || amountOfPeople === 0) throw error.badRequest("Ainda não temos pessoas cadastradas.")

   let id = Math.floor(Math.random() * (maxId - 1 + 1) + 1);
   let randomPerson = await PersonRepository.findPersonById(id);
   while (randomPerson.rowCount === 0 && amountOfPeople > 0) {
      id = Math.floor(Math.random() * (maxId - 1 + 1) + 1);
      randomPerson = await PersonRepository.findPersonById(id);
   }


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

async function deletePerson(id: number) {
   const result = await PersonRepository.deletePerson(id);

   if (result.rowCount === 0) throw error.notFound('Não foi possível encontrar uma pessoa com esse id.')
}

const PersonServices = {
   getRandomPerson,
   postPerson,
   getPerson,
   updatePerson,
   deletePerson,

}

export default PersonServices;