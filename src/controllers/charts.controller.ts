import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const getUsersCountByCountry = async (req: Request, res: Response) => {
  try {
    const result = await prisma.user.groupBy({
      by: ["country"],
      _count: { country: true },
    });
    res.json(
      result.map((r) => ({ country: r.country, count: r._count.country }))
    );
  } catch (error) {
    res.status(500).json({ error: "Error al obtener datos por país" });
  }
};

export const getUsersCountByCompany = async (req: Request, res: Response) => {
  try {
    const result = await prisma.user.groupBy({
      by: ["companyId"],
      _count: { companyId: true },
    });

    const companies = await prisma.company.findMany({
      where: { id: { in: result.map((r) => r.companyId) } },
      select: { id: true, name: true },
    });

    const companyMap = Object.fromEntries(
      companies.map((company) => [company.id, company.name])
    );

    const response = result.map((r) => ({
      company: companyMap[r.companyId],
      count: r._count.companyId,
    }));

    res.json(response);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener datos por empresa" });
  }
};
