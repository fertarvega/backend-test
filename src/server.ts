import express from "express";
import cors from "cors";
import usersRoutes from "./routes/users.routes";
import companiesRoutes from "./routes/companies.routes";

const app = express();

const allowedOrigins = [
	"http://localhost:3000",
	"http://localhost:3001",
	"http://localhost:3002",
	"http://localhost:3003",
	"http://localhost:3004",
];

app.use(cors({
	origin: allowedOrigins,
}));

app.use(express.json());

app.use("/api/users", usersRoutes);
app.use("/api/companies", companiesRoutes);

app.listen(3005);
console.log("Server is running on http://localhost:3005");
