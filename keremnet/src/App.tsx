import React, { useEffect } from 'react';
import { Post } from './components/Post';
import { PostBase } from './types/Post';
import './App.css';
import CircularProgress from '@mui/material/CircularProgress';

export const App: React.FC = () => {
  const [posts, setPosts] = React.useState<PostBase[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3001/posts');
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
  );
};

export default App;