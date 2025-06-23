import React from 'react';
import { Post } from './components/Post';
import { PostProps } from './types/Post';
import './App.css';

const samplePost: PostProps = {
  id: 1,
  author: 'John Doe',
  content: 'This is my first post!',
  timestamp: new Date(),
  likesCount: 10,
  comments: [
    {
      id: 1,
      author: 'Alice',
      content: 'Nice post!',
      timestamp: new Date(),
    },
    {
      id: 2,
      author: 'Bob',
      content: 'Welcome!',
      timestamp: new Date(),
    },
  ],
};

function App() {
  return (
    <div className="App">
      <h1 className="app-title">Post Demo</h1>
      <Post {...samplePost} />
    </div>
  );
}

export default App;
