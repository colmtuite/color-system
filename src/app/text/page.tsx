import { COLOR_FAMILIES } from '../lib/constants';

interface DemoGridProps {
  columns: number;
}

function DemoGrid({ columns }: DemoGridProps) {
  return (
    <div className="demo-grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {COLOR_FAMILIES.map((family) => (
        <div
          key={family}
          className="demo-grid-cell"
          style={{ color: `var(--${family}-t1)` }}
        >
          The quick brown fox jumps over the lazy dog.
        </div>
      ))}
    </div>
  );
}

export default function TextPage() {
  return <DemoGrid columns={2} />;
} 