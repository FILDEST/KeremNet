import { Post } from '../models/Post';
import postsData from '../data/posts.json';
import { Comment } from '../models/Comment';
import fs from 'fs';
import path from 'path';

type PostsMap = { [key: string]: Post };
const posts = postsData.posts as PostsMap;

export const getAllPosts = (): Post[] => Object.values(posts);

export const getPostById = (id: string): Post | undefined =>
  posts[id];

export const getCommentsByPostId = (id: string): Comment[] | undefined => {
  const post = posts[id];
  return post ? post.comments : undefined;
};


export const createPost = (authorId: number, content: string) => {
  const id = Date.now();
  const newPost: Post = {
    id,
    authorId,
    content,
    timestamp: new Date().toISOString(),
    likesCount: 0,
    comments: []
  };
  posts[id] = newPost;

  fs.writeFileSync(
    path.join(__dirname, '../data/posts.json'),
    JSON.stringify({ posts }, null, 2)
  );

  return newPost;
};