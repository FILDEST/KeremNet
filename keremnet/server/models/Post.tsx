import { Comment } from './Comment';

export interface Post {
  id: number;
  authorId: number;
  content: string;
  timestamp: string;
  likesCount: number;
  comments: Comment[];
}