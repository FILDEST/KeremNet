import { Request, Response } from 'express';
import * as postsService from '../services/postsService';
import { parseId } from './utils';

export const getPosts = (req: Request, res: Response) => {
  res.json(postsService.getAllPosts());
};

export const getPost = (req: Request, res: Response) => {
  const id = parseId(req.params.id);
  if (id === null) return res.status(400).json({ error: 'Invalid post id' });
  const post = postsService.getPostById(id);
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
};

export const getComments = (req: Request, res: Response) => {
  const id = parseId(req.params.id);
  if (id === null) return res.status(400).json({ error: 'Invalid post id' });
  const comments = postsService.getCommentsByPostId(id);
  if (!comments) return res.status(404).json({ error: 'Post not found' });
  res.json(comments);
};


export const createPost = (req: Request, res: Response) => {
  const { authorId, content } = req.body;
  if (!authorId || !content) {
    return res.status(400).json({ error: 'Missing authorId or content' });
  }
  const newPost = postsService.createPost(authorId, content);
  res.status(201).json(newPost);
};