import express from "express";
import usersRoutes from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/api", usersRoutes);

app.listen(3005);
console.log("Server is running on http://localhost:3005");
