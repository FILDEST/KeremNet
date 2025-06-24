import React from 'react';
import { Card, CardHeader, CardContent, Typography, Divider, Avatar, Box } from '@mui/material';
import { PostBase } from '../types/Post';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { deepPurple } from '@mui/material/colors';

import './Post.css';
import { Comment } from './Comment';

export const Post: React.FC<PostBase> = ({
  author,
  content,
  timestamp,
  likesCount,
  comments,
}) => {
  return (
    <Card className="fb-post-card">
      <CardHeader className='fb-post-header'
        avatar={
        <Avatar className="fb-post-avatar" sx={{ bgcolor: deepPurple[400] }}>
          {author.charAt(0).toUpperCase()}
        </Avatar>
        } 
        title={
          <Typography variant="subtitle1" className="fb-post-author">
            {author}
          </Typography>
        }
        subheader={
          <Typography variant="caption" className="fb-post-time">
            {timestamp.toLocaleString()}
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="body1" className="fb-post-body">
          {content}
        </Typography>

        <Divider className="fb-post-divider" />

        <Box className="fb-post-likes">
          <FavoriteIcon color="error" fontSize="small" />
          <Typography variant="body2" color="text.secondary">
            {likesCount} Likes
          </Typography>
        </Box>

        {comments.length > 0 && (
          <>
            <Divider className="fb-post-divider" />
            <Typography variant="subtitle2" className="fb-post-comments-title">
              Comments
            </Typography>
              {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
              ))}
          </>
        )}
      </CardContent>
    </Card>
  );
};
