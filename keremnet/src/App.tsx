import React, { useEffect, useState } from 'react';
import { Post } from './components/Post';
import { PostProps } from './types/Post';
import './App.css';

export const App: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch posts:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Home</h1>
      <div className="content">
        {loading ? (
          <div className="spinner" />
        ) : posts.length === 0 ? (
          <div className="message">No posts available</div>
        ) : (
          posts.map((post) => <Post key={post.id} {...post} />)
        )}
      </div>
    </div>
  );
};

export default App;
