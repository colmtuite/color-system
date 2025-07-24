const COLOR_FAMILIES = [
  'gray', 'mauve', 'slate', 'sage', 'olive', 'sand', 'amber', 'orange', 'red', 'pink', 'plum', 'purple', 'violet', 'indigo', 'blue', 'teal', 'green'
];

const SNIPPETS = [
  'The quick brown fox jumps over the lazy dog.',
  'Sphinx of black quartz, judge my vow.',
  'Pack my box with five dozen liquor jugs.',
  'How vexingly quick daft zebras jump!',
  'Bright vixens jump; dozy fowl quack.',
  'Quick zephyrs blow, vexing daft Jim.',
  'Waltz, nymph, for quick jigs vex Bud.',
  'Glib jocks quiz nymph to vex dwarf.',
  'Jived fox nymph grabs quick waltz.',
  'Brawny gods just flocked up to quiz and vex him.',
  'Sphinx of black quartz, judge my vow.',
  'The five boxing wizards jump quickly.',
  'How quickly daft jumping zebras vex.',
  'Quick wafting zephyrs vex bold Jim.',
  'Jinxed wizards pluck ivy from the big quilt.',
  'Crazy Frederick bought many very exquisite opal jewels.',
  'Amazingly few discotheques provide jukeboxes.'
];

export default function TextPage() {
  return (
    <div className="text-grid">
      {COLOR_FAMILIES.map((family, i) => (
        <div
          key={family}
          className="text-grid-cell"
          style={{ color: `var(--${family}-t1)` }}
        >
          {SNIPPETS[i % SNIPPETS.length]}
        </div>
      ))}
    </div>
  );
} 