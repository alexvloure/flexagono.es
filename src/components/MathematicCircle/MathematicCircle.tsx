import { IconEnum, IconComponent } from '@/app/icons';

export default function MathematicCircle({ translateIcon }: { translateIcon: number }) {
  const icons = Object.values(IconEnum).map((icon, index) => {
    const angle = index * 360/Object.values(IconEnum).length;
    return <IconComponent key={icon} type={icon as IconEnum} className="circle-item" style={{ transform: `rotate(${angle}deg) translateX(${translateIcon}px)`}} />
  });

  return (
    <div className="circle-container animate-spin-slow">
      {icons}
    </div>
  )
}
