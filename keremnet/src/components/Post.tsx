import React, { useState } from 'react';
import { Card, CardHeader, CardContent, Typography, Divider, Avatar, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { deepPurple } from '@mui/material/colors';

import './Post.css';
import { Comment } from './Comment';
import { useUser } from '../hooks/useUser';
import { STATIC_URL } from '../routes/consts';
import { loadImage } from '../utils/loadImage';
import { PostBase } from '../types/Post';

export const Post: React.FC<PostBase> = ({
  authorId,
  content,
  timestamp,
  likesCount,
  comments,
}) => {
  const { user: author } = useUser(authorId);
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="fb-post-card">
      <CardHeader className='fb-post-header'
        avatar={
          <Avatar
            className="fb-post-avatar"
            src={author?.image && loadImage(author.image, STATIC_URL)}
            sx={{ bgcolor: deepPurple[400] }}
            alt={author?.name?.charAt(0).toUpperCase()}
          >
          </Avatar>
        }
        title={
          <Typography variant="subtitle1" className="fb-post-author">
            {author?.name || "Unknown User"}
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
          <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="comments-content"
              id="comments-header"
            >
              <Typography variant="subtitle2" className="fb-post-comments-title">
                View {comments.length} Comment{comments.length !== 1 ? 's' : ''}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Divider className="fb-post-divider" />
              {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
              ))}
            </AccordionDetails>
          </Accordion>
        )}
      </CardContent>
    </Card>
  );
};