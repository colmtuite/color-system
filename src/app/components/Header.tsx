'use client';

import Toggle from './Toggle';
import IconWheelShade from '../icons/IconWheelShade';
import IconWheelColor from '../icons/IconWheelColor';
import IconSunShade from '../icons/IconSunShade';
import IconGridShade from '../icons/IconGridShade';
import { useApp } from '../context/AppContext';
import { usePathname } from 'next/navigation';

export default function Header() {
  const { gap, setGap, grayscale, setGrayscale, hueFilters, setHueFilter, sidebarsVisible, setSidebarsVisible, squashed, setSquashed } = useApp();
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
        
        <Toggle 
          defaultPressed={true} 
          onPressedChange={setSidebarsVisible}
          aria-label="toggle sidebars"
        >
          <IconSunShade />
        </Toggle>
        
        <Toggle 
          defaultPressed={false} 
          onPressedChange={setSquashed}
          aria-label="toggle squashed cells"
        >
          <span style={{ fontSize: '12px', fontWeight: '500' }}>S</span>
        </Toggle>
        
        {/* Hue Group Toggles */}
        <Toggle 
          defaultPressed={true} 
          onPressedChange={(pressed) => setHueFilter('grays', pressed)}
          aria-label="toggle grays"
        >
          <div className="d-f w-5">
            <div className="HueIndicator" role="presentation" style={{ backgroundColor: 'var(--gray-c2)' }} />
          </div>
        </Toggle>
        
        <Toggle 
          defaultPressed={true} 
          onPressedChange={(pressed) => setHueFilter('yellows', pressed)}
          aria-label="toggle yellows"
        >
          <div className="d-f w-5">
            <div className="HueIndicator" role="presentation" style={{ backgroundColor: 'var(--amber-p1)' }} />
          </div>
        </Toggle>
        
        <Toggle 
          defaultPressed={true} 
          onPressedChange={(pressed) => setHueFilter('reds', pressed)}
          aria-label="toggle reds"
        >
          <div className="d-f w-5">
            <div className="HueIndicator" role="presentation" style={{ backgroundColor: 'var(--orange-p1)' }} />
            <div className="HueIndicator" role="presentation" style={{ backgroundColor: 'var(--red-p1)' }} />
          </div>
        </Toggle>
        
        <Toggle 
          defaultPressed={true} 
          onPressedChange={(pressed) => setHueFilter('purples', pressed)}
          aria-label="toggle purples"
        >
          <div className="d-f w-5">
            <div className="HueIndicator" role="presentation" style={{ backgroundColor: 'var(--pink-p1)' }} />
            <div className="HueIndicator" role="presentation" style={{ backgroundColor: 'var(--plum-p1)' }} />
            <div className="HueIndicator" role="presentation" style={{ backgroundColor: 'var(--purple-p1)' }} />
            <div className="HueIndicator" role="presentation" style={{ backgroundColor: 'var(--violet-p1)' }} />
            
          </div>
        </Toggle>
        
        <Toggle 
          defaultPressed={true} 
          onPressedChange={(pressed) => setHueFilter('blues', pressed)}
          aria-label="toggle blues"
        >
          <div className="d-f w-5">
            <div className="HueIndicator" role="presentation" style={{ backgroundColor: 'var(--indigo-p1)' }} />
            <div className="HueIndicator" role="presentation" style={{ backgroundColor: 'var(--blue-p1)' }} />
          </div>
        </Toggle>
        
        <Toggle 
          defaultPressed={true} 
          onPressedChange={(pressed) => setHueFilter('greens', pressed)}
          aria-label="toggle greens"
        >
          <div className="d-f w-5">
            <div className="HueIndicator" role="presentation" style={{ backgroundColor: 'var(--teal-p1)' }} />
            <div className="HueIndicator" role="presentation" style={{ backgroundColor: 'var(--green-p1)' }} />
          </div>
        </Toggle>
      </div>
    </header>
  );
} 