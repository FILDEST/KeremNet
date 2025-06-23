import React from 'react';
import { Card, CardContent, Typography, Divider, Box, Avatar } from '@mui/material';
import { PostProps } from '../types/Post';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Post.css';
import { Comment } from './Comment';

export const Post: React.FC<PostProps> = ({
  author,
  content,
  timestamp,
  likesCount,
  comments,
}) => {
  return (
    <Card className="fb-post-card">
      <CardContent>
        <Box className="fb-post-header">
          <Avatar className="fb-post-avatar" />
          <Box>
            <Typography variant="subtitle1" className="fb-post-author">
              {author}
            </Typography>
            <Typography variant="caption" className="fb-post-time">
              {timestamp.toLocaleString()}
            </Typography>
          </Box>
        </Box>

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
    {/* Comments */}
    {comments.length > 0 && (
      <>
        <Divider className="fb-post-divider" />
        <Typography variant="subtitle2" className="fb-post-comments-title">
          Comments
        </Typography>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            author={comment.author}
            content={comment.content}
            timestamp={comment.timestamp}
          />
        ))}
      </>
    )}
      </CardContent>
    </Card>
  );
};
