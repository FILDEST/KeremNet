export interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: Date;
}

export interface PostProps {
  id: number;
  author: string;
  content: string;
  timestamp: Date;
  likes: number;
  comments: Comment[];
}
