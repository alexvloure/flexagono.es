import { IconEnum, IconComponent } from '@/app/icons';

export default function MathematicCircle() {
  const icons = Object.values(IconEnum).map((icon, index) => {
    const angle = index * 360/Object.values(IconEnum).length;
    return <IconComponent key={icon} type={icon as IconEnum} className={`circle-item`} style={{ transform: `rotate(${angle}deg) translateX(250px)`,}} />
  });

  return (
    <div className="relative w-[500px] h-[500px] flex justify-center items-center rounded-full animate-spin-slow opacity-60">
      {icons}
    </div>
  )
}
