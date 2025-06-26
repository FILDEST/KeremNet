import React from 'react';
import { AppLayout } from './components/applicationLayout/AppLayout';
import PostLayout from './components/applicationLayout/PostLayout';
import { NewPost } from './components/NewPost';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<PostLayout />} />
          <Route path="/about" element={<PostLayout />} />
          <Route path="/new" element={<NewPost />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;