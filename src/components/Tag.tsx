import { type Tag } from '@/models/types';

type TagProps = Tag;

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
