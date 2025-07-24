import React from 'react';

type SwatchProps = {
  label?: string;
  style?: React.CSSProperties;
  className?: string;
};

export default function Swatch({ label, style, className = '' }: SwatchProps) {
  return (
    <div className={`Swatch ${className}`} style={style}>
      {label}
    </div>
  );
} 