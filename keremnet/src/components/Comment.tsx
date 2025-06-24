import React from 'react';
import { Box, Typography } from '@mui/material';
import './Comment.css';
import { CommentBase } from '../types/Comment';

export const Comment: React.FC<{ comment: CommentBase }> = ({ comment }) => (
  <Box className="fb-post-comment">
    <Typography className="fb-post-comment-author">{comment.author}</Typography>
    <Typography component="span">{comment.content}</Typography>
    <Typography className="fb-post-comment-time">
      {new Date(comment.timestamp).toLocaleString()}
    </Typography>
  </Box>
);