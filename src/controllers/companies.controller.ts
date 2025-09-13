import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const getCompanies = async (req: Request, res: Response) => {
  try {
    const companies = await prisma.company.findMany();
    res.json(companies);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};
