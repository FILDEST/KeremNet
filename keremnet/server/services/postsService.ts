import { Post } from '../models/Post';
import postsData from '../data/posts.json';
import { Comment } from '../models/Comment';

export const getAllPosts = (): Post[] => postsData.posts;

export const getPostById = (id: number): Post | undefined =>
  postsData.posts.find(post => post.id === id);

export const getCommentsByPostId = (id: number): Comment[] | undefined => {
  const post = postsData.posts.find(post => post.id === id);
  return post ? post.comments : undefined;
};