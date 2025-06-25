import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import './Comment.css';
import { CommentBase } from '../types/Comment';
import { User } from '../types/User';
import { API_URL } from '../routes/consts';

export const Comment: React.FC<{ comment: CommentBase }> = ({ comment }) => {
  const [author, setAuthor] = useState<User | null>(null);

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const response = await fetch(`${API_URL}/users/${comment.authorId}`);
        if (response.ok) {
          const data = await response.json();
          setAuthor(data);
        }
      } catch (error) {
        console.error('Error fetching comment author:', error);
      }
    };
    fetchAuthor();
  }, [comment.authorId]);

  return (
    <Box className="fb-post-comment">
      <Typography className="fb-post-comment-author">
        {author?.name || comment.authorId}
      </Typography>
      <Typography component="span">{comment.content}</Typography>
      <Typography className="fb-post-comment-time">
        {new Date(comment.timestamp).toLocaleString()}
      </Typography>
    </Box>
  );
};