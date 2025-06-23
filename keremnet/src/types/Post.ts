export interface CommentBase {
  id: number;
  author: string;
  content: string;
  timestamp: Date;
}

export interface PostBase {
  id: number;
  author: string;
  content: string;
  timestamp: Date;
  likesCount: number;
  comments: CommentBase[];
}
