export interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: string;
}

export interface PostProps {
  id: number;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: Comment[];
}
