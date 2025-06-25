import { Comment } from './Comment';

export interface Post {
  id: number;
  author: string;
  content: string;
  timestamp: string;
  likesCount: number;
  comments: Comment[];
}