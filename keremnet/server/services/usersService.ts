import usersData from '../data/users.json';
import { User } from '../models/User';

export const getAllUsers = (): User[] => usersData.users;

export const getUserById = (id: number): User | undefined =>
  usersData.users.find(user => user.id === id);