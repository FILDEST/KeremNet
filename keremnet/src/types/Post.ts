import { CommentBase } from './Comment';
export interface PostBase {
  id: number;
  authorId: number;
  content: string;
  timestamp: string;
  likesCount: number;
  comments: CommentBase[];
}
