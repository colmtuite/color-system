import { COLOR_FAMILIES } from '../lib/constants';
import GridHeader from './GridHeader';
import Scale from './Scale';

const STEP_LABELS = ['s0', 's1', 's2', 'c1', 'c2', 'c3', 'o1', 'o2', 'o3', 'p1', 'p2', 'p3', 't1', 't2'];

export default function ColorGrid() {
  return (
    <div className="Grid">
      <GridHeader />
      {COLOR_FAMILIES.map((family) => (
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