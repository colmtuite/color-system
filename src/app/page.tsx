'use client';

import { useState } from 'react';
import './theme.css';
import './main.css';
import './button.css';

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
      <div>
        <div className={`Grid ${showGrayScale ? 'f-g' : ''} ${showBlur ? 'blur' : ''} ${showGap ? 'gap' : ''}`} id="color-grid">
          <div className="Name"></div>
          <div className="Swatch">S0</div>
          <div className="Swatch">S1</div>
          <div className="Swatch">S2</div>
          <div className="Swatch">C1</div>
          <div className="Swatch">C2</div>
          <div className="Swatch">C3</div>
          <div className="Swatch">O1</div>
          <div className="Swatch">O2</div>
          <div className="Swatch">O3</div>
          <div className="Swatch">P1</div>
          <div className="Swatch">P2</div>
          <div className="Swatch">P3</div>
          <div className="Swatch">T1</div>
          <div className="Swatch">T2</div>

          <div className="Name">Gray</div>
          <div className="Swatch" style={{ backgroundColor: 'var(--gray-s0)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--gray-s1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--gray-s2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--gray-c1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--gray-c2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--gray-c3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--gray-o1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--gray-o2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--gray-o3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--gray-p1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--gray-p2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--gray-p3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--gray-t1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--gray-t2)' }}></div>

          <div className="Name">Mauve</div>
          <div className="Swatch" style={{ backgroundColor: 'var(--mauve-s0)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--mauve-s1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--mauve-s2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--mauve-c1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--mauve-c2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--mauve-c3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--mauve-o1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--mauve-o2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--mauve-o3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--mauve-p1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--mauve-p2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--mauve-p3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--mauve-t1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--mauve-t2)' }}></div>

          <div className="Name">Slate</div>
          <div className="Swatch" style={{ backgroundColor: 'var(--slate-s0)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--slate-s1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--slate-s2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--slate-c1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--slate-c2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--slate-c3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--slate-o1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--slate-o2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--slate-o3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--slate-p1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--slate-p2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--slate-p3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--slate-t1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--slate-t2)' }}></div>

          <div className="Name">Sage</div>
          <div className="Swatch" style={{ backgroundColor: 'var(--sage-s0)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--sage-s1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--sage-s2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--sage-c1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--sage-c2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--sage-c3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--sage-o1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--sage-o2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--sage-o3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--sage-p1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--sage-p2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--sage-p3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--sage-t1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--sage-t2)' }}></div>

          <div className="Name">Olive</div>
          <div className="Swatch" style={{ backgroundColor: 'var(--olive-s0)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--olive-s1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--olive-s2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--olive-c1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--olive-c2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--olive-c3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--olive-o1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--olive-o2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--olive-o3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--olive-p1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--olive-p2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--olive-p3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--olive-t1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--olive-t2)' }}></div>

          <div className="Name">Sand</div>
          <div className="Swatch" style={{ backgroundColor: 'var(--sand-s0)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--sand-s1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--sand-s2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--sand-c1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--sand-c2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--sand-c3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--sand-o1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--sand-o2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--sand-o3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--sand-p1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--sand-p2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--sand-p3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--sand-t1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--sand-t2)' }}></div>

          <div className="Name">Amber</div>
          <div className="Swatch" style={{ backgroundColor: 'var(--amber-s0)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--amber-s1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--amber-s2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--amber-c1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--amber-c2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--amber-c3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--amber-o1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--amber-o2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--amber-o3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--amber-p1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--amber-p2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--amber-p3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--amber-t1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--amber-t2)' }}></div>

          <div className="Name">Orange</div>
          <div className="Swatch" style={{ backgroundColor: 'var(--orange-s0)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--orange-s1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--orange-s2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--orange-c1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--orange-c2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--orange-c3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--orange-o1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--orange-o2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--orange-o3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--orange-p1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--orange-p2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--orange-p3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--orange-t1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--orange-t2)' }}></div>

          <div className="Name">Red</div>
          <div className="Swatch" style={{ backgroundColor: 'var(--red-s0)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--red-s1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--red-s2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--red-c1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--red-c2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--red-c3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--red-o1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--red-o2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--red-o3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--red-p1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--red-p2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--red-p3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--red-t1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--red-t2)' }}></div>

          <div className="Name">Pink</div>
          <div className="Swatch" style={{ backgroundColor: 'var(--pink-s0)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--pink-s1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--pink-s2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--pink-c1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--pink-c2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--pink-c3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--pink-o1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--pink-o2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--pink-o3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--pink-p1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--pink-p2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--pink-p3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--pink-t1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--pink-t2)' }}></div>

          <div className="Name">Plum</div>
          <div className="Swatch" style={{ backgroundColor: 'var(--plum-s0)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--plum-s1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--plum-s2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--plum-c1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--plum-c2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--plum-c3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--plum-o1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--plum-o2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--plum-o3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--plum-p1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--plum-p2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--plum-p3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--plum-t1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--plum-t2)' }}></div>

          <div className="Name">Purple</div>
          <div className="Swatch" style={{ backgroundColor: 'var(--purple-s0)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--purple-s1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--purple-s2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--purple-c1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--purple-c2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--purple-c3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--purple-o1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--purple-o2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--purple-o3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--purple-p1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--purple-p2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--purple-p3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--purple-t1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--purple-t2)' }}></div>

          <div className="Name">Violet</div>
          <div className="Swatch" style={{ backgroundColor: 'var(--violet-s0)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--violet-s1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--violet-s2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--violet-c1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--violet-c2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--violet-c3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--violet-o1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--violet-o2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--violet-o3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--violet-p1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--violet-p2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--violet-p3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--violet-t1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--violet-t2)' }}></div>

          <div className="Name">Indigo</div>
          <div className="Swatch" style={{ backgroundColor: 'var(--indigo-s0)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--indigo-s1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--indigo-s2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--indigo-c1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--indigo-c2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--indigo-c3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--indigo-o1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--indigo-o2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--indigo-o3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--indigo-p1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--indigo-p2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--indigo-p3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--indigo-t1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--indigo-t2)' }}></div>

          <div className="Name">Blue</div>
          <div className="Swatch" style={{ backgroundColor: 'var(--blue-s0)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--blue-s1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--blue-s2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--blue-c1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--blue-c2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--blue-c3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--blue-o1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--blue-o2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--blue-o3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--blue-p1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--blue-p2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--blue-p3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--blue-t1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--blue-t2)' }}></div>

          <div className="Name">Teal</div>
          <div className="Swatch" style={{ backgroundColor: 'var(--teal-s0)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--teal-s1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--teal-s2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--teal-c1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--teal-c2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--teal-c3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--teal-o1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--teal-o2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--teal-o3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--teal-p1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--teal-p2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--teal-p3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--teal-t1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--teal-t2)' }}></div>

          <div className="Name">Green</div>
          <div className="Swatch" style={{ backgroundColor: 'var(--green-s0)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--green-s1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--green-s2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--green-c1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--green-c2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--green-c3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--green-o1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--green-o2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--green-o3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--green-p1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--green-p2)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--green-p3)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--green-t1)' }}></div>
          <div className="Swatch" style={{ backgroundColor: 'var(--green-t2)' }}></div>
        </div>
      </div>
    </div>
  );
}
