import { Post } from '../models/Post';
import postsData from '../data/posts.json';

export const getAllPosts = (): Post[] => postsData.posts;

export const getPostById = (id: number): Post | undefined =>
  postsData.posts.find(post => post.id === id);

export const getCommentsByPostId = (id: number) =>
  postsData.posts.find(post => post.id === id)?.comments || [];