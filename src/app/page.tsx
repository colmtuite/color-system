'use client';

import { useState } from 'react';
import './theme.css';
import './main.css';
import './button.css';
import ColorGrid from './components/ColorGrid';

export default function Home() {
  const [showGap, setShowGap] = useState(false);
  const [showGrayScale, setShowGrayScale] = useState(false);
  const [showBlur, setShowBlur] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleGap = () => setShowGap(!showGap);
  const toggleGrayScale = () => setShowGrayScale(!showGrayScale);
  const toggleBlur = () => setShowBlur(!showBlur);
  const toggleLightMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={isDarkMode ? 'theme-dark' : ''}>
      <ColorGrid />
    </div>
  );
}
