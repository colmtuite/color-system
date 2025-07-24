import { COLOR_FAMILIES } from '../lib/constants';
import DemoGrid from '../components/DemoGrid';

export default function ButtonPage() {
  return (
    <div>
      <DemoGrid columns={7} align="center" aspectRatio={1}>
        {COLOR_FAMILIES.map((family) => (
          <div
            key={family}
            className="demo-grid-cell"
          >
            <button className={`Button variant-filled color-${family}`}>
              Button
            </button>
          </div>
        ))}
      </DemoGrid>
      
      <DemoGrid columns={7} align="center" aspectRatio={1}>
        {COLOR_FAMILIES.map((family) => (
          <div
            key={`soft-${family}`}
            className="demo-grid-cell"
          >
            <button className={`Button variant-soft color-${family}`}>
              Button
            </button>
          </div>
        ))}
      </DemoGrid>
      
      <DemoGrid columns={7} align="center" aspectRatio={1}>
        {COLOR_FAMILIES.map((family) => (
          <div
            key={`text-${family}`}
            className="demo-grid-cell"
          >
            <button className={`Button variant-text color-${family}`}>
              Button
            </button>
          </div>
        ))}
      </DemoGrid>
      
      <DemoGrid columns={7} align="center" aspectRatio={1}>
        {COLOR_FAMILIES.map((family) => (
          <div
            key={`classic-${family}`}
            className="demo-grid-cell"
          >
            <button className={`Button variant-classic color-${family}`}>
              Button
            </button>
          </div>
        ))}
      </DemoGrid>
      
      <DemoGrid columns={7} align="center" aspectRatio={1}>
        {COLOR_FAMILIES.map((family) => (
          <div
            key={`outlined-${family}`}
            className="demo-grid-cell"
          >
            <button className={`Button variant-outlined color-${family}`}>
              Button
            </button>
          </div>
        ))}
      </DemoGrid>
    </div>
  );
} 