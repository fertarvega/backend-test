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
    email: 'maria.rodriguez@tecnoinova.com',
    name: 'María Rodríguez',
    country: 'México',
    age: 29,
    gender: 'Femenino',
    phone: '5551234567',
    companyId: allCompanies[0]?.id,
  },
  {
    email: 'carlos.fernandez@digitalsol.es',
    name: 'Carlos Fernández',
    country: 'España',
    age: 34,
    gender: 'Masculino',
    phone: '918765432',
    companyId: allCompanies[1]?.id,
  },
  {
    email: 'ana.martinez@innovatech.ar',
    name: 'Ana Martínez',
    country: 'Argentina',
    age: 27,
    gender: 'Femenino',
    phone: '1145678901',
    companyId: allCompanies[2]?.id,
  },
  {
    email: 'luis.garcia@globalcorp.co',
    name: 'Luis García',
    country: 'Colombia',
    age: 31,
    gender: 'Masculino',
    phone: '12345678',
    companyId: allCompanies[3]?.id,
  },
  {
    email: 'sofia.lopez@futurebiz.cl',
    name: 'Sofía López',
    country: 'Chile',
    age: 26,
    gender: 'Femenino',
    phone: '29876543',
    companyId: allCompanies[4]?.id,
  },
  {
    email: 'diego.morales@techventure.mx',
    name: 'Diego Morales',
    country: 'México',
    age: 38,
    gender: 'Masculino',
    phone: '813456789',
    companyId: allCompanies[0]?.id,
  },
  {
    email: 'elena.vargas@innovaspa.es',
    name: 'Elena Vargas',
    country: 'España',
    age: 25,
    gender: 'Femenino',
    phone: '934567890',
    companyId: allCompanies[1]?.id,
  },
  {
    email: 'pablo.herrera@datasys.ar',
    name: 'Pablo Herrera',
    country: 'Argentina',
    age: 42,
    gender: 'Masculino',
    phone: '2617890123',
    companyId: allCompanies[2]?.id,
  },
  {
    email: 'camila.torres@smarttech.co',
    name: 'Camila Torres',
    country: 'Colombia',
    age: 30,
    gender: 'Femenino',
    phone: '45678901',
    companyId: allCompanies[3]?.id,
  },
  {
    email: 'andres.silva@nextgen.cl',
    name: 'Andrés Silva',
    country: 'Chile',
    age: 33,
    gender: 'Masculino',
    phone: '326789012',
    companyId: allCompanies[4]?.id,
  },
  {
    email: 'valeria.castro@digitalmx.com',
    name: 'Valeria Castro',
    country: 'México',
    age: 28,
    gender: 'Femenino',
    phone: '338901234',
    companyId: allCompanies[0]?.id,
  },
  {
    email: 'javier.ruiz@techspa.es',
    name: 'Javier Ruiz',
    country: 'España',
    age: 36,
    gender: 'Masculino',
    phone: '951234567',
    companyId: allCompanies[1]?.id,
  },
  {
    email: 'laura.mendez@sysinno.ar',
    name: 'Laura Méndez',
    country: 'Argentina',
    age: 24,
    gender: 'Femenino',
    phone: '3412345678',
    companyId: allCompanies[2]?.id,
  },
  {
    email: 'ricardo.jimenez@procol.co',
    name: 'Ricardo Jiménez',
    country: 'Colombia',
    age: 39,
    gender: 'Masculino',
    phone: '23456789',
    companyId: allCompanies[3]?.id,
  },
  {
    email: 'daniela.reyes@innovacl.cl',
    name: 'Daniela Reyes',
    country: 'Chile',
    age: 32,
    gender: 'Femenino',
    phone: '414567890',
    companyId: allCompanies[4]?.id,
  },
  {
    email: 'miguel.ortega@techmx.net',
    name: 'Miguel Ortega',
    country: 'México',
    age: 41,
    gender: 'Masculino',
    phone: '2225678901',
    companyId: allCompanies[0]?.id,
  },
  {
    email: 'isabella.romero@futurees.com',
    name: 'Isabella Romero',
    country: 'España',
    age: 23,
    gender: 'Femenino',
    phone: '966789012',
    companyId: allCompanies[1]?.id,
  },
  {
    email: 'fernando.aguilar@dataar.com',
    name: 'Fernando Aguilar',
    country: 'Argentina',
    age: 37,
    gender: 'Masculino',
    phone: '2217890123',
    companyId: allCompanies[2]?.id,
  },
  {
    email: 'natalia.guerrero@innovaco.co',
    name: 'Natalia Guerrero',
    country: 'Colombia',
    age: 29,
    gender: 'Femenino',
    phone: '58901234',
    companyId: allCompanies[3]?.id,
  },
  {
    email: 'sebastian.pena@smartcl.org',
    name: 'Sebastián Peña',
    country: 'Chile',
    age: 35,
    gender: 'Masculino',
    phone: '519012345',
    companyId: allCompanies[4]?.id,
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
