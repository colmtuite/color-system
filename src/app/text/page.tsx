const COLOR_FAMILIES = [
  'gray', 'mauve', 'slate', 'sage', 'olive', 'sand', 'amber', 'orange', 'red', 'pink', 'plum', 'purple', 'violet', 'indigo', 'blue', 'teal', 'green'
];

export default function TextPage() {
  return (
    <div className="text-grid">
      {COLOR_FAMILIES.map((family) => (
        <div
          key={family}
          className="text-grid-cell"
          style={{ color: `var(--${family}-t1)` }}
        >
          The quick brown fox jumps over the lazy dog.
        </div>
      ))}
    </div>
  );
} 