'use client';

import Toggle from './Toggle';
import IconWheelShade from '../icons/IconWheelShade';
// import IconWheelColor from '../icons/IconWheelColor';
import IconSunShade from '../icons/IconSunShade';
import IconGridShade from '../icons/IconGridShade';
import { useApp } from '../context/AppContext';

export default function Header() {
  const { gap, setGap } = useApp();

  return (
    <header className="Header">
      <div className="d-f jc-c g-3">
        <Toggle defaultPressed={true} onPressedChange={setGap}>
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