import React from 'react';
import { Card, CardContent, Typography, Divider } from '@mui/material';
import { PostProps } from '../types/Post';
import FavoriteIcon from '@mui/icons-material/Favorite';


export const Post: React.FC<PostProps> = ({
  author,
  content,
  timestamp,
  likesCount,
  comments,
}) => {
  return (
    <Card sx={{ marginBottom: 3 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {author}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {timestamp.toLocaleString()}
        </Typography>

        <Typography variant="body1" sx={{ marginTop: 2 }}>
          {content}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginTop: 2, display: 'flex', alignItems: 'center', gap: 0.5 }}
        >
          <FavoriteIcon color="error" fontSize="small" />
          {likesCount} Likes
        </Typography>

        {comments.length > 0 && (
          <>
            <Divider sx={{ marginY: 2 }} />
            <Typography variant="subtitle1">Comments:</Typography>
            {comments.map((comment) => (
              <div key={comment.id} style={{ marginTop: 8 }}>
                <Typography variant="body2">
                  <strong>{comment.author}</strong>: {comment.content}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {comment.timestamp.toLocaleString()}
                </Typography>
              </div>
            ))}
          </>
        )}
      </CardContent>
    </Card>
  );
};
