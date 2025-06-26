import React,{useState, useEffect} from 'react';
import { Box, Typography, Snackbar, Alert } from '@mui/material';
import './Comment.css';
import { CommentBase } from '../types/Comment';
import { useUser } from '../hooks/useUser';

export const Comment: React.FC<{ comment: CommentBase }> = ({ comment }) => {
  const { authorId, content, timestamp } = comment;
  const { user: author, error: authorError } = useUser(authorId);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (authorError) setOpen(true);
  }, [authorError]);

  if (!author && !authorError) return null;

  return (
    <>
      {author && (
        <Box className="fb-post-comment">
          <Typography className="fb-post-comment-author">
            {author.name}
          </Typography>
          <Typography component="span">{content}</Typography>
          <Typography className="fb-post-comment-time">
            {new Date(timestamp).toLocaleString()}
          </Typography>
        </Box>
      )}
      <Snackbar
        open={!!authorError && open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setOpen(false)} severity="error" sx={{ width: '100%' }}>
          {authorError}
        </Alert>
      </Snackbar>
    </>
  );
};