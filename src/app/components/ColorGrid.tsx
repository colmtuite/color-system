'use client';

import { COLOR_FAMILIES, getHueGroup } from '../lib/constants';
import GridHeader from './GridHeader';
import Scale from './Scale';
import { useApp } from '../context/AppContext';

const STEP_LABELS = ['s0', 's1', 's2', 'c1', 'c2', 'c3', 'o1', 'o2', 'o3', 'p1', 'p2', 'p3', 't1', 't2'];

interface ColorGridProps {
  gap?: boolean;
}

export default function ColorGrid({ gap = false }: ColorGridProps) {
  const { hueFilters, squashed } = useApp();
  
  const filteredFamilies = COLOR_FAMILIES.filter(family => {
    const hueGroup = getHueGroup(family);
    return hueFilters[hueGroup as keyof typeof hueFilters];
  });

  return (
    <div className={`Grid ${squashed ? 'squashed' : ''}`} style={{ gap: gap ? '1px' : undefined }}>
      <GridHeader />
      {filteredFamilies.map((family) => (
        <Scale 
          key={family} 
          name={family} 
          steps={STEP_LABELS.map((step) => ({
            label: '',
            style: { backgroundColor: `var(--${family}-${step})` },
          }))}
        />
      ))}
    </div>
  );
} 