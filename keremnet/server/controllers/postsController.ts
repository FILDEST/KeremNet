import { Request, Response } from 'express';
import * as postsService from '../services/postsService';

export const getPosts = (req: Request, res: Response) => {
  res.json(postsService.getAllPosts());
};

export const getPost = (req: Request, res: Response) => {
  const post = postsService.getPostById(Number(req.params.id));
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
};

export const getComments = (req: Request, res: Response) => {
  const comments = postsService.getCommentsByPostId(Number(req.params.id));
  res.json(comments);
};