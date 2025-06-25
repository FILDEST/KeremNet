import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, Typography, Divider, Avatar, Box } from '@mui/material';
import { PostBase } from '../types/Post';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { deepPurple } from '@mui/material/colors';

import './Post.css';
import { Comment } from './Comment';
import { User } from '../types/User';
import { API_URL } from '../routes/consts';

export const Post: React.FC<PostBase> = ({
  authorId,
  content,
  timestamp,
  likesCount,
  comments,
}) => {

  const [author, setAuthor] = useState<User | null>(null);

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const response = await fetch(`${API_URL}/users/${authorId}`);
        if (response.ok) {
          const data = await response.json();
          setAuthor(data);
        }
      } catch (error) {
        console.error('Error fetching author:', error);
      }
    };
    fetchAuthor();
  }, [authorId]);

  return (
    <Card className="fb-post-card">
      <CardHeader className='fb-post-header'
        avatar={
       <Avatar
          className="fb-post-avatar"
          src={author?.image ? `http://localhost:3001/static/${author.image}` : undefined}
          sx={{ bgcolor: deepPurple[400] }}
        >
          {(!author?.image && author?.name) ? author.name.charAt(0).toUpperCase() : null}
        </Avatar>
        } 
        title={
          <Typography variant="subtitle1" className="fb-post-author">
            {author?.name ? author.name : "Unknown User"}
          </Typography>
        }
        subheader={
          <Typography variant="caption" className="fb-post-time">
            {new Date(timestamp).toLocaleString()}
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
