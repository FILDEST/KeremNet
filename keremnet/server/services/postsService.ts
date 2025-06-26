import { Post } from '../models/Post';
import postsData from '../data/posts.json';
import { Comment } from '../models/Comment';

type PostsMap = { [key: string]: Post };
const posts = postsData.posts as PostsMap;

export const getAllPosts = (): Post[] => Object.values(posts);

export const getPostById = (id: string): Post | undefined =>
  posts[id];

export const getCommentsByPostId = (id: string): Comment[] | undefined => {
  const post = posts[id];
  return post ? post.comments : undefined;
};