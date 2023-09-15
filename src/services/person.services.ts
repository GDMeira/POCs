import { Person } from "@/protocols/types";
import PersonRepository from "@/repositories/person.repository";

async function getRandomPerson() {
   const amountOfPeople = await PersonRepository.getAmountOfPeople();
   const randomPerson = await PersonRepository.findRandomPerson(amountOfPeople);
   return randomPerson as Person;
}

const PersonServices = {
   getRandomPerson
}

export default PersonServices;