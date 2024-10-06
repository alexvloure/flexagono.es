import { CSSProperties } from 'react';

export type Tag = {
  label: string;
  /** Color of the label in hex format */
  textColor?: CSSProperties['color'];
  /** Color of the background in hex format */
  backgroundColor?: CSSProperties['backgroundColor'];
  /** Opacity of the background. Number between 0 and 1 */
  backgroundOpacity?: number;
};
