import React from 'react';

interface DemoGridProps {
  columns: number;
  aspectRatio?: number;
  align?: 'start' | 'center' | 'end';
  padding?: number;
  children: React.ReactNode;
}

export default function DemoGrid({ columns, aspectRatio, align = 'start', padding, children }: DemoGridProps) {
  return (
    <div 
      className="demo-grid" 
      style={{ 
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        '--demo-grid-aspect-ratio': aspectRatio ? `${aspectRatio}` : undefined,
        '--demo-grid-align': align,
        '--demo-grid-padding': padding ? `${padding}px` : undefined,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
} 