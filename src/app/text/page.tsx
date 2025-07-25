import { COLOR_FAMILIES } from '../lib/constants';
import DemoGrid, { DemoGridCell } from '../components/DemoGrid';

export default function TextPage() {
  return (
    <div>
      <DemoGrid columns={2} padding={32} label="T1 Low Contrast">
        {COLOR_FAMILIES.map((family) => (
          <DemoGridCell key={family} colorFamily={family}>
            <div style={{ color: `var(--${family}-t1)` }}>
              The quick brown fox jumps over the lazy dog.
            </div>
          </DemoGridCell>
        ))}
      </DemoGrid>
      
      <DemoGrid columns={2} padding={32} label="T2 High Contrast">
        {COLOR_FAMILIES.map((family) => (
          <DemoGridCell key={`t2-${family}`} colorFamily={family}>
            <div style={{ color: `var(--${family}-t2)` }}>
              The quick brown fox jumps over the lazy dog.
            </div>
          </DemoGridCell>
        ))}
      </DemoGrid>
    </div>
  );
} 