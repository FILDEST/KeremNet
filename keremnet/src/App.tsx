import React, { useEffect } from 'react';
import { Post } from './components/Post';
import { PostBase } from './types/Post';
import './App.css';

export const App: React.FC = () => {

  const [posts, setPosts] = React.useState<PostBase[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
    fetch('http://localhost:3001/posts')
      .then(response => response.json())
      .then(data => {
        // Convert timestamp strings to Date objects for posts and comments
        const parsedPosts = data.map((post: any) => ({
          ...post,
          timestamp: new Date(post.timestamp),
          comments: post.comments.map((comment: any) => ({
            ...comment,
            timestamp: new Date(comment.timestamp),
          })),
        }));
        setPosts(parsedPosts);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="app-title">Posts</h1>
      {loading ? (
        <p>Loading posts...</p>
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