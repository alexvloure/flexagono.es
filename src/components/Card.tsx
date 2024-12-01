import { type Tag } from '@/models/types';

type CardProps = {
  title: string;
  description: string;
  tags?: Tag[];
  className?: string;
};

export default function Card({ title, description, className }: CardProps) {
  return (
    <div
      className={`relative overflow-hidden p-8 col-span-4 ${className}`}>
      <div className="flex justify-between items-center">
        <span className="text-2xl">{title}</span>
      </div>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}
