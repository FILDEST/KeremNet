import { CommentBase } from './Comment';
export interface PostBase {
  id: number;
  author: string;
  content: string;
  timestamp: string;
  likesCount: number;
  comments: CommentBase[];
}
