'use client';

import Toggle from './Toggle';
import IconWheelShade from '../icons/IconWheelShade';
import IconWheelColor from '../icons/IconWheelColor';
import IconSunShade from '../icons/IconSunShade';
import IconGridShade from '../icons/IconGridShade';
import { useApp } from '../context/AppContext';
import { usePathname } from 'next/navigation';

export default function Header() {
  const { gap, setGap, grayscale, setGrayscale } = useApp();
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
      </div>
    </header>
  );
} 