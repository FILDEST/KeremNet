import React from 'react';
import { Card, CardContent, Typography, Divider } from '@mui/material';
import { PostProps } from '../types/Post';

export const Post: React.FC<PostProps> = ({
  author,
  content,
  timestamp,
  likes,
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

        <Typography variant="body2" color="text.secondary" sx={{ marginTop: 2 }}>
          ❤️ {likes} Likes
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
