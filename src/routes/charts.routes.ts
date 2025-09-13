import { Router } from "express";
import { getUsersCountByCountry, getUsersCountByCompany } from "../controllers/charts.controller";

const router = Router();

router.get("/users-by-country", getUsersCountByCountry);
router.get("/users-by-company", getUsersCountByCompany);

export default router;
