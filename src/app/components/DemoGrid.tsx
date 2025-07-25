import React from 'react';

interface DemoGridProps {
  columns: number;
  aspectRatio?: number;
  align?: 'start' | 'center' | 'end';
  padding?: number;
  label?: string;
  children: React.ReactNode;
}

// Wrapper component that automatically adds color family label
const DemoGridCell = ({ children, colorFamily }: { children: React.ReactNode; colorFamily: string }) => (
  <div className="demo-grid-cell">
    {children}
    <span className="demo-grid-cell-label">{colorFamily}</span>
  </div>
);

export default function DemoGrid({ columns, aspectRatio, align = 'start', padding, label, children }: DemoGridProps) {
  return (
    <div className="demo-grid-container">
      {label && (
        <h2 className="demo-grid-label">{label}</h2>
      )}
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
    </div>
  );
}

// Export the cell wrapper for use in pages
export { DemoGridCell }; 