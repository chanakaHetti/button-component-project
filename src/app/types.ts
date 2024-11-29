import { MouseEvent, Ref } from 'react';

export type ColorVariant = 'green' | 'dark';
export type ButtonStyle = 'solid' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ColorVariant;
  buttonStyle?: ButtonStyle;
  size?: ButtonSize;
  fullWidth?: boolean;
  onActionClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  ref?: Ref<HTMLButtonElement>;
}
