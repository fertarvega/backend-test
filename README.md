# Backend Test

Este proyecto es un backend en Node.js con Express y Prisma, usando una base de datos PostgreSQL. Este proyecto es parte de una prueba técnica.

## Requisitos

- Node.js 22
- npm
- Descargar y correr backend: https://github.com/fertarvega/frontend-test

## Comandos disponibles

- `npm run start`: Ejecuta las migraciones, siembra la base de datos y levanta el servidor en modo desarrollo.
- `npm run dev`: Levanta el servidor en modo desarrollo (hot reload).
- `npm run prisma-seed`: Solo ejecuta la semilla de datos.
- `npm run prisma-reset`: Borra toda la información y reinicia la base de datos.

## Pasos para correr el proyecto

1. **Clonar el repositorio:**

   ```bash
   git clone <URL_DEL_REPO>
   cd backend
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Crear base de datos en PostgreSQL:**

   Se debe crear una base de datos limpia en PostgreSQL para poder hacer la migración de la semilla y conectar el backend correctamente.
   Puede ser cualquier nombre, ya que se usará en el siguiente paso.

4. **Crear el archivo `.env`:**

   En la raíz del proyecto, crea un archivo llamado `.env` con la siguiente variable (ajusta los valores según tu entorno):

   ```env
   DATABASE_URL="postgresql://usuario:contrasena@localhost:5432/nombre_basedatos"
   ```

   - Ejemplo típico de usuario y contraseña en local:
     - usuario: `postgres`
     - contrasena: `postgres` o la que configuraste
     - nombre_basedatos: `backend_test` (puedes usar el nombre que prefieras)

   Ejemplo completo:

   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/backend_test"
   ```

5. **Correr el proyecto:**

   - Para iniciar todo por primera vez (migraciones, semilla y servidor):

     - Nota: Al correr este comando por primera vez, pedirá el nombre de la migración, en mi caso le pongo `base`, es para crear la migración de PrismaJS a PostgreSQL.

     ```bash
     npm run start
     ```

   - Para desarrollo (solo servidor con hot reload):
     ```bash
     npm run dev
     ```
   - Para reiniciar la base de datos y borrar todos los datos:
     ```bash
     npm run prisma-reset
     ```

## Notas

- El backend corre por defecto en `http://localhost:3005`.
- El archivo de semilla (`prisma/seed.ts`) crea datos de ejemplo para empresas y usuarios.
- Asegúrate de que tu base de datos PostgreSQL esté corriendo y accesible.

---

Quedo atento a cualquier duda o comentario.
