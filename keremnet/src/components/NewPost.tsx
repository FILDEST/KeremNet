import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Snackbar, Alert, Paper, GlobalStyles } from '@mui/material';
import { API_URL } from '../routes/consts';

export const NewPost: React.FC = () => {
  const [content, setContent] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content || !authorId) {
      setError('Please fill in all fields');
      return;
    }
    try {
      const res = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ authorId: Number(authorId), content }),
      });
      if (res.ok) {
        setSuccess(true);
        setContent('');
        setAuthorId('');
      } else {
        setError('Failed to create post');
      }
    } catch {
      setError('Failed to create post');
    }
  };

  return (
    <>
      <GlobalStyles styles={{ body: { margin: 0, padding: 0 } }} />
      <Box
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Snackbar
          open={success}
          autoHideDuration={3000}
          onClose={() => setSuccess(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert severity="success" onClose={() => setSuccess(false)}>
            Post created successfully!
          </Alert>
        </Snackbar>
        <Snackbar
          open={!!error}
          autoHideDuration={3000}
          onClose={() => setError(null)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert severity="error" onClose={() => setError(null)}>
            {error}
          </Alert>
        </Snackbar>
        <Paper>
          <Box p={2} minWidth={280}>
            <Typography variant="h6" align="center" gutterBottom>
              Create New Post
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="User ID"
                value={authorId}
                onChange={e => setAuthorId(e.target.value)}
                fullWidth
                margin="dense"
                type="number"
              />
              <TextField
                label="Post Content"
                value={content}
                onChange={e => setContent(e.target.value)}
                fullWidth
                margin="dense"
                multiline
                minRows={2}
                maxRows={3}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Submit Post
              </Button>
            </form>
          </Box>
        </Paper>
      </Box>
    </>
  );
};