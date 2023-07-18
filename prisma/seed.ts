import { Prisma, PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();
async function main() {
  const carreras = Array.from({ length: 10 }, () => ({
    id: faker.number.int({ min: 1000, max: 9999 }),
    nombre: faker.person.jobTitle(),
  }));
  await prisma.carrera.createMany({
    data: carreras,
  });

  const ids = new Set<number>();

  while (ids.size < 200) ids.add(faker.number.int({ min: 1000, max: 9999 }));

  const materias: Prisma.materiaCreateManyInput[] = [];

  ids.forEach((id) =>
    materias.push({
      id,
      nombre: faker.person.jobArea() + " " + faker.person.jobArea(),
    })
  );

  await prisma.materia.createMany({
    data: materias,
  });

  await prisma.carreraTomateria.createMany({
    data: materias.flatMap((materia) =>
      faker.helpers
        .arrayElements(carreras, { min: 1, max: 3 })
        .map((carrera) => ({
          A: carrera.id,
          B: materia.id,
        }))
    ),
  });

  await prisma.previa.createMany({
    data: materias.flatMap((materia) =>
      faker.helpers
        .arrayElements(materias, { min: 0, max: 5 })
        .map((previa) => ({
          previaId: previa.id,
          siguienteId: materia.id,
        })))
    })
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
