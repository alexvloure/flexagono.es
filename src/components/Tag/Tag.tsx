import { CSSProperties } from 'react';

type TagProps = {
  label: string;
  /** Color of the label in hex format */
  textColor?: CSSProperties['color'];
  /** Color of the background in hex format */
  backgroundColor?: CSSProperties['backgroundColor'];
  /** Opacity of the background. Number between 0 and 1 */
  backgroundOpacity?: number;
};

export default function Tag({
  label,
  textColor = '#ffffff',
  backgroundColor = '#2f2f2f',
  backgroundOpacity = 1,
}: TagProps) {

  return (
    <span
      className={`text-base font-light bg-[${backgroundColor}] bg-opacity-[${backgroundOpacity}] text-[${textColor}] rounded-full px-2`}>
      {label}
    </span>
  );
}
