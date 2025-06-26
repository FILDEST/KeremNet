import express from 'express';
import * as postsController from '../controllers/postsController';

const router = express.Router();

router.get('/', postsController.getPosts);
router.get('/:id', postsController.getPost);
router.get('/:id/comments', postsController.getComments);

export default router;