import React, { useEffect, useState } from 'react';
import './PostLayout.css';
import CircularProgress from '@mui/material/CircularProgress';
import { AppLayout } from './AppLayout';
import { Post } from '../Post';
import { PostBase } from '../../types/Post';
import { POSTS_API_URL } from '../../routes/consts';

export const App: React.FC = () => {
  const [posts, setPosts] = useState<PostBase[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(POSTS_API_URL);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <AppLayout>
      <div className="App">
        <h1 className="app-title">Posts</h1>
        {loading ? (
          <div className='loading-indicator'>
            <CircularProgress />
          </div>
        ) : (
          posts.length === 0 ? (
            <h1>No posts available.</h1>
          ) :
          posts.map((post) => <Post key={post.id} {...post} />)
        )}
      </div>
    </AppLayout>
  );
};

export default App;