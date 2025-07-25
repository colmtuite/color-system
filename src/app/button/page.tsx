import { COLOR_FAMILIES } from '../lib/constants';
import DemoGrid, { DemoGridCell } from '../components/DemoGrid';

export default function ButtonPage() {
  return (
    <div>
      <DemoGrid columns={7} align="center" aspectRatio={1} label="Filled">
        {COLOR_FAMILIES.map((family) => (
          <DemoGridCell key={family} colorFamily={family}>
            <button className={`Button variant-filled color-${family}`}>
              Button
            </button>
          </DemoGridCell>
        ))}
      </DemoGrid>
      
      <DemoGrid columns={7} align="center" aspectRatio={1} label="Soft">
        {COLOR_FAMILIES.map((family) => (
          <DemoGridCell key={`soft-${family}`} colorFamily={family}>
            <button className={`Button variant-soft color-${family}`}>
              Button
            </button>
          </DemoGridCell>
        ))}
      </DemoGrid>
      
      <DemoGrid columns={7} align="center" aspectRatio={1} label="Text">
        {COLOR_FAMILIES.map((family) => (
          <DemoGridCell key={`text-${family}`} colorFamily={family}>
            <button className={`Button variant-text color-${family}`}>
              Button
            </button>
          </DemoGridCell>
        ))}
      </DemoGrid>
      
      <DemoGrid columns={7} align="center" aspectRatio={1} label="Classic">
        {COLOR_FAMILIES.map((family) => (
          <DemoGridCell key={`classic-${family}`} colorFamily={family}>
            <button className={`Button variant-classic color-${family}`}>
              Button
            </button>
          </DemoGridCell>
        ))}
      </DemoGrid>
      
      <DemoGrid columns={7} align="center" aspectRatio={1} label="Outlined">
        {COLOR_FAMILIES.map((family) => (
          <DemoGridCell key={`outlined-${family}`} colorFamily={family}>
            <button className={`Button variant-outlined color-${family}`}>
              Button
            </button>
          </DemoGridCell>
        ))}
      </DemoGrid>
    </div>
  );
} 