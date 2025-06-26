import { Request, Response } from 'express';
import * as usersService from '../services/usersService';
import { parseId } from './utils';

export const getUsers = (req: Request, res: Response) => {
  res.json(usersService.getAllUsers());
};

export const getUser = (req: Request, res: Response) => {
  const id = parseId(req.params.id);
  if (id === null) return res.status(400).json({ error: 'Invalid user id' });
  const user = usersService.getUserById(id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
};