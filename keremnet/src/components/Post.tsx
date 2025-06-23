import React from 'react';
import './Post.css';
import { PostProps } from '../types/Post';

export const Post: React.FC<PostProps> = ({
  author,
  content,
  timestamp,
  likes,
  comments,
}) => {
  return (
    <div className="post">
      <div className="post-header">
        <h3>{author}</h3>
        <span className="post-timestamp">{new Date(timestamp).toLocaleString()}</span>
      </div>
      <div className="post-content">
        <p>{content}</p>
      </div>
      <div className="post-footer">
        <span>❤️ {likes}</span>
      </div>
      <div className="post-comments">
        {comments.length > 0 && <h4>Comments:</h4>}
        <ul>  
          {comments.map((comment) => (
            <li key={comment.id}>
              <strong>{comment.author}</strong>: {comment.content}
              <br />
              <small>{new Date(comment.timestamp).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
