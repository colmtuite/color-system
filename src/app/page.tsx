'use client';

import ColorGrid from './components/ColorGrid';
import { useApp } from './context/AppContext';

export default function Home() {
  const { gap } = useApp();

  return (
    <div style={{ padding: '0 32px 32px 32px' }}>
      <ColorGrid gap={gap} />
    </div>
  );
}
