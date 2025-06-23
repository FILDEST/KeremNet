import React, { useEffect, useState } from 'react';
import { Post } from './components/Post';
import { PostProps } from './types/Post';
import postsData from './data/posts.json';
import './App.css';

function App() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    // Simulate fetching mock data
    setPosts(postsData);
  }, []);

  return (
    <div className="App">
      <h1>Home</h1>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}

export default App;
