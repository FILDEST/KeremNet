import React from 'react';
import { Box, Typography } from '@mui/material';
import './Comment.css';

interface CommentProps {
  author: string;
  content: string;
  timestamp: Date;
}

export const Comment: React.FC<CommentProps> = ({
  author,
  content,
  timestamp,
}) => (
  <Box className="fb-post-comment">
    <Typography className="fb-post-comment-author">{author}</Typography>
    <Typography component="span">{content}</Typography>
    <Typography className="fb-post-comment-time">
      {timestamp.toLocaleString()}
    </Typography>
  </Box>
);