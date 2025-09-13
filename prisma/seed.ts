import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  const companies = await prisma.company.createMany({
    data: [
      { name: 'Team Cherry', industry: 'Videojuegos' },
      { name: 'Vercel', industry: 'Tecnología' },
      { name: 'Nintendo', industry: 'Videojuegos' },
      { name: 'Microsoft', industry: 'Tecnología' },
      { name: 'Santa Monica', industry: 'Videojuegos' },
    ],
    skipDuplicates: true,
  });

  const allCompanies = await prisma.company.findMany();

  const usersData = [
    {
      email: 'usuario1@ejemplo.com',
      name: 'Juan Pérez',
      country: 'México',
      age: 30,
      gender: 'Masculino',
      phone: '1111111111',
      companyId: allCompanies[0]?.id,
    },
    {
      email: 'usuario2@ejemplo.com',
      name: 'Ana Gómez',
      country: 'España',
      age: 28,
      gender: 'Femenino',
      phone: '2222222222',
      companyId: allCompanies[1]?.id,
    },
    {
      email: 'usuario3@ejemplo.com',
      name: 'Carlos Ruiz',
      country: 'Argentina',
      age: 35,
      gender: 'Masculino',
      phone: '3333333333',
      companyId: allCompanies[2]?.id,
    },
  ];

  await prisma.user.createMany({
    data: usersData,
    skipDuplicates: true,
  });

  console.log('¡Datos de prueba insertados!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
