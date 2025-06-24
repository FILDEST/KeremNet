import { CommentBase } from './Comment';
export interface PostBase {
  id: number;
  author: string;
  content: string;
  timestamp: Date;
  likesCount: number;
  comments: CommentBase[];
}
