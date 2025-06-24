import React from 'react';
import './AppLayout.css';
import { Navbar } from './Navbar';

export const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="app-layout">
    <Navbar />
    <main className="app-main">{children}</main>
  </div>
);