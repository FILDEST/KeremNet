import React, { PropsWithChildren } from 'react';
import './AppLayout.css';
import { Navbar } from './Navbar';

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="app-layout">
    <Navbar />
    <main className="app-main">{children}</main>
  </div>
);