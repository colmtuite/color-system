'use client';

import Sidebar from './Sidebar';
import Header from './Header';
import RightSidebar from './RightSidebar';
import { useApp } from '../context/AppContext';

interface LayoutContentProps {
  children: React.ReactNode;
}

export default function LayoutContent({ children }: LayoutContentProps) {
  const { grayscale } = useApp();
  
  return (
    <>
      <Header />
      <div className="main-content">
        <Sidebar />
        <div 
          className="center-content"
          style={{ filter: grayscale ? undefined : 'grayscale(1)' }}
        >
          {children}
        </div>
        <RightSidebar />
      </div>
    </>
  );
} 