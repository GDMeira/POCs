import prisma from "@/database/database.connection";
import { CreatePerson } from "@/protocols/types";

async function main() {
  return prisma.person.upsert({
    create: {
      firstName: "Félix",
      lastName: "Florêncio",
      visits: 5,
      phone: "21912345678",
      review: {
        createMany: {
          skipDuplicates: true,
          data: [
            { grade: 7, comment: "Saudades módulo 3, sqn ahah" },
            { grade: 6 },
            { grade: 8 },
            { grade: 10 },
          ]
        }
      }
    },
    update: {},
    where: {id: 1}
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })