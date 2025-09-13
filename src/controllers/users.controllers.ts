import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { id },
    });
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error al obtener usuario" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.create({
      data: req.body,
    });
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Error al crear usuario" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.update({
      where: { id },
      data: req.body,
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Error al actualizar usuario" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.user.delete({
      where: { id },
    });
    res.status(200).send({ message: "Usuario eliminado" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Error al eliminar usuario" });
  }
};
