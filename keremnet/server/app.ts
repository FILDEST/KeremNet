import express from 'express';
import cors from 'cors';
import postsRoutes from './routes/posts';
import usersRoutes from './routes/users';
import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());

// Static files
app.use('/static', express.static(path.join(__dirname, 'public/uploads')));

// API routes
app.use('/api/posts', postsRoutes);
app.use('/api/users', usersRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});