import Swatch from './Swatch';

export type ScaleProps = {
  name: string;
  steps: { label: string; style?: React.CSSProperties }[];
};

export default function Scale({ name, steps }: ScaleProps) {
  return (
    <>
      <div className="Name">{name}</div>
      {steps.map((step, i) => (
        <Swatch key={i} label={step.label} style={step.style} />
      ))}
    </>
  );
} 