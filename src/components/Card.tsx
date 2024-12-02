import { type Tag } from "@/models/types";

type CardProps = {
  title: string;
  description: string;
  tags?: Tag[];
  className?: string;
};

export default function Card({ title, description, className }: CardProps) {
  return (
    <div
      className={`relative overflow-hidden py-6 sm:py-8 px-4 sm:px-6 col-span-4 rounded-3xl border-[0.5px] border-[#343434] ${className}`}
    >
      <div className="flex flex-col justify-between gap-10">
        <p className="text-xl sm:text-2xl">{title}</p>
        <p className="text-gray-300 text-lg">{description}</p>
      </div>
    </div>
  );
}
