import { Request, Response } from 'express';
import * as usersService from '../services/usersService';

export const getUsers = (req: Request, res: Response) => {
  res.json(usersService.getAllUsers());
};

export const getUser = (req: Request, res: Response) => {
  const user = usersService.getUserById(Number(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
};