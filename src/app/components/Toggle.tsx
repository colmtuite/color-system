import * as React from 'react';
import { Toggle as TogglePrimitive } from '@base-ui-components/react/toggle';

export default function Toggle(props: React.ComponentProps<typeof TogglePrimitive>) {
  const { className, ...otherProps } = props;
  return <TogglePrimitive {...otherProps} className={`Toggle ${className || ''}`} />;
} 