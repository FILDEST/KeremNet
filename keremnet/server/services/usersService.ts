import usersData from '../data/users.json';
import { User } from '../models/User';

type UsersMap = { [key: string]: User };
const users = usersData.users as UsersMap;

export const getAllUsers = (): User[] => Object.values(users);

export const getUserById = (id: string): User | undefined =>
  users[id];