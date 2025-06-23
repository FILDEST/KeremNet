import React from 'react';
import { Card, CardContent, Typography, Divider, Box, Avatar } from '@mui/material';
import { PostProps } from '../types/Post';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Post.css';

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

        {comments.length > 0 && (
          <>
            <Divider className="fb-post-divider" />
            <Typography variant="subtitle2" className="fb-post-comments-title">
              Comments
            </Typography>
            {comments.map((comment) => (
              <Box key={comment.id} className="fb-post-comment">
                <span className="fb-post-comment-author">{comment.author}</span>
                <span>{comment.content}</span>
                <span className="fb-post-comment-time">
                  {comment.timestamp.toLocaleString()}
                </span>
              </Box>
            ))}
          </>
        )}
      </CardContent>
    </Card>
  );
};
