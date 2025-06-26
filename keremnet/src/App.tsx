import React from 'react';
import { AppLayout } from './components/applicationLayout/AppLayout';
import PostLayout from './components/applicationLayout/PostLayout';

export const App: React.FC = () => {
  return (
    <AppLayout>
      <PostLayout />
    </AppLayout>
  );
};

export default App;