import Swatch from './Swatch';

const HEADER_LABELS = [
  'S0', 'S1', 'S2', 'C1', 'C2', 'C3', 'O1', 'O2', 'O3', 'P1', 'P2', 'P3', 'T1', 'T2'
];

export default function GridHeader() {
  return (
    <>
      <div className="Name"></div>
      {HEADER_LABELS.map((label) => (
        <Swatch key={label} label={label} />
      ))}
    </>
  );
} 