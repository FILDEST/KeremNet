import express from 'express';
import * as usersController from '../controllers/usersController';

const router = express.Router();

router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUser);

export default router;