'use client';

import Toggle from './Toggle';
import IconWheelShade from '../icons/IconWheelShade';
// import IconWheelColor from '../icons/IconWheelColor';
import IconSunShade from '../icons/IconSunShade';
import IconGridShade from '../icons/IconGridShade';
import { useApp } from '../context/AppContext';
import { usePathname } from 'next/navigation';

export default function Header() {
  const { gap, setGap } = useApp();
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  return (
    <header className="Header">
      <div className="d-f jc-c g-3">
        <Toggle 
          defaultPressed={true} 
          onPressedChange={isHomepage ? setGap : undefined}
          disabled={!isHomepage}
        >
          <IconGridShade />
        </Toggle>
        <Toggle defaultPressed={true}>
          <IconWheelShade />
        </Toggle>
        <Toggle defaultPressed={true}>
          <IconSunShade />
        </Toggle>
      </div>
    </header>
  );
} 