import GridHeader from './GridHeader';
import Scale from './Scale';

const COLOR_FAMILIES = [
  { name: 'Gray', prefix: 'gray' },
  { name: 'Mauve', prefix: 'mauve' },
  { name: 'Slate', prefix: 'slate' },
  { name: 'Sage', prefix: 'sage' },
  { name: 'Olive', prefix: 'olive' },
  { name: 'Sand', prefix: 'sand' },
  { name: 'Amber', prefix: 'amber' },
  { name: 'Orange', prefix: 'orange' },
  { name: 'Red', prefix: 'red' },
  { name: 'Pink', prefix: 'pink' },
  { name: 'Plum', prefix: 'plum' },
  { name: 'Purple', prefix: 'purple' },
  { name: 'Violet', prefix: 'violet' },
  { name: 'Indigo', prefix: 'indigo' },
  { name: 'Blue', prefix: 'blue' },
  { name: 'Teal', prefix: 'teal' },
  { name: 'Green', prefix: 'green' },
];

const STEP_LABELS = [
  's0', 's1', 's2', 'c1', 'c2', 'c3', 'o1', 'o2', 'o3', 'p1', 'p2', 'p3', 't1', 't2'
];

export default function ColorGrid() {
  return (
    <div className="Grid" id="color-grid">
      <GridHeader />
      {COLOR_FAMILIES.map(({ name, prefix }) => (
        <Scale
          key={prefix}
          name={name}
          steps={STEP_LABELS.map((step) => ({
            label: '',
            style: { backgroundColor: `var(--${prefix}-${step})` },
          }))}
        />
      ))}
    </div>
  );
} 