'use client';

import Toggle from './Toggle';
import IconWheelShade from '../icons/IconWheelShade';
import IconWheelColor from '../icons/IconWheelColor';
import IconSunShade from '../icons/IconSunShade';
import IconGridShade from '../icons/IconGridShade';
import { useApp } from '../context/AppContext';
import { usePathname } from 'next/navigation';

export default function Header() {
  const { gap, setGap, grayscale, setGrayscale, hueFilters, setHueFilter } = useApp();
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  return (
    <header className="Header">
      <div className="d-f jc-c g-3">
        <Toggle 
          defaultPressed={true} 
          onPressedChange={isHomepage ? setGap : undefined}
          disabled={!isHomepage}
          aria-label="toggle grid gap"
        >
          <IconGridShade />
        </Toggle>
        <Toggle 
          defaultPressed={true} 
          onPressedChange={setGrayscale}
          className="color-wheel"
          aria-label="toggle grayscale"
        >
          <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', opacity: grayscale ? '1' : '0' }}>
            <IconWheelColor />
          </div>
          <div style={{ transform: 'rotate(360deg)', position: 'absolute', display: 'flex', alignItems: 'center', opacity: grayscale ? '0' : '1' }}>
            <IconWheelShade />
          </div>
        </Toggle>
        
        {/* Hue Group Toggles */}
        <Toggle 
          defaultPressed={true} 
          onPressedChange={(pressed) => setHueFilter('grays', pressed)}
          aria-label="toggle grays"
        >
          <span style={{ fontSize: '12px', fontWeight: '500' }}>G</span>
        </Toggle>
        
        <Toggle 
          defaultPressed={true} 
          onPressedChange={(pressed) => setHueFilter('yellows', pressed)}
          aria-label="toggle yellows"
        >
          <span style={{ fontSize: '12px', fontWeight: '500' }}>Y</span>
        </Toggle>
        
        <Toggle 
          defaultPressed={true} 
          onPressedChange={(pressed) => setHueFilter('reds', pressed)}
          aria-label="toggle reds"
        >
          <span style={{ fontSize: '12px', fontWeight: '500' }}>R</span>
        </Toggle>
        
        <Toggle 
          defaultPressed={true} 
          onPressedChange={(pressed) => setHueFilter('purples', pressed)}
          aria-label="toggle purples"
        >
          <span style={{ fontSize: '12px', fontWeight: '500' }}>P</span>
        </Toggle>
        
        <Toggle 
          defaultPressed={true} 
          onPressedChange={(pressed) => setHueFilter('blues', pressed)}
          aria-label="toggle blues"
        >
          <span style={{ fontSize: '12px', fontWeight: '500' }}>B</span>
        </Toggle>
        
        <Toggle 
          defaultPressed={true} 
          onPressedChange={(pressed) => setHueFilter('greens', pressed)}
          aria-label="toggle greens"
        >
          <span style={{ fontSize: '12px', fontWeight: '500' }}>G</span>
        </Toggle>
      </div>
    </header>
  );
} 