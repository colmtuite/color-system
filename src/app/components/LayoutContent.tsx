'use client';

import Sidebar from './Sidebar';
import Header from './Header';
import RightSidebar from './RightSidebar';
import { useApp } from '../context/AppContext';

interface LayoutContentProps {
  children: React.ReactNode;
}

export default function LayoutContent({ children }: LayoutContentProps) {
  const { grayscale, sidebarsVisible } = useApp();
  
  return (
    <>
      <Header />
      <div className="main-content">
        {sidebarsVisible && <Sidebar />}
        <div 
          className="center-content"
          style={{ filter: grayscale ? undefined : 'grayscale(1)' }}
        >
          {children}
        </div>
        {sidebarsVisible && <RightSidebar />}
      </div>
    </>
  );
} 