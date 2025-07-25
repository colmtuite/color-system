import { COLOR_FAMILIES } from '../lib/constants';
import DemoGrid from '../components/DemoGrid';

export default function TextPage() {
  return (
    <div>
      <DemoGrid columns={2} padding={32} label="Primary Text Colors">
        {COLOR_FAMILIES.map((family) => (
          <div
            key={family}
            className="demo-grid-cell"
            style={{ color: `var(--${family}-t1)` }}
          >
            The quick brown fox jumps over the lazy dog.
          </div>
        ))}
      </DemoGrid>
      
      <DemoGrid columns={2} padding={32} label="Secondary Text Colors">
        {COLOR_FAMILIES.map((family) => (
          <div
            key={`t2-${family}`}
            className="demo-grid-cell"
            style={{ color: `var(--${family}-t2)` }}
          >
            The quick brown fox jumps over the lazy dog.
          </div>
        ))}
      </DemoGrid>
    </div>
  );
} 