'use client';

import Toggle from './Toggle';
import IconWheelShade from '../icons/IconWheelShade';
// import IconWheelColor from '../icons/IconWheelColor';
import IconSunShade from '../icons/IconSunShade';
import IconGridShade from '../icons/IconGridShade';

export default function Header() {


  return (
    <header className="Header">
      <div className="d-f jc-c g-3">
        <Toggle>
          <IconGridShade />
        </Toggle>
        <Toggle>
          <IconWheelShade />
        </Toggle>
        <Toggle>
          <IconSunShade />
        </Toggle>
      </div>
    </header>
  );
} 