import React from 'react';
import AcuteIcon from './acute-stroke-rounded';
import AlphaIcon from './alpha-stroke-rounded';
import Coordinate02Icon from './coordinate-02-stroke-rounded';
import CosIcon from './cos-stroke-rounded';
import CubeIcon from './cube-stroke-rounded';
import FunctionOfXIcon from './function-of-x-stroke-rounded';
import MatrixIcon from './matrix-stroke-rounded';
import MinusPlus01Icon from './minus-plus-01-stroke-rounded';
import MinusSignIcon from './minus-sign-stroke-rounded';
import MultiplicationSignIcon from './multiplication-sign-stroke-rounded';
import NotEqualSignIcon from './not-equal-sign-stroke-rounded';
import PiIcon from './pi-stroke-rounded';
import PlusSignIcon from './plus-sign-stroke-rounded';
import Root01Icon from './root-01-stroke-rounded';
import SinIcon from './sin-stroke-rounded';
import Sine02Icon from './sine-02-stroke-rounded';
import Summation01Icon from './summation-01-stroke-rounded';
import TanIcon from './tan-stroke-rounded';

enum IconEnum {
  // AcuteIcon = 'AcuteIcon',
  // AlphaIcon = 'AlphaIcon',
  // Coordinate02Icon = 'Coordinate02Icon',
  // CosIcon = 'CosIcon',
  // CubeIcon = 'CubeIcon',
  // FunctionOfXIcon = 'FunctionOfXIcon',
  MatrixIcon = 'MatrixIcon',
  MinusPlus01Icon = 'MinusPlus01Icon',
  MinusSignIcon = 'MinusSignIcon',
  MultiplicationSignIcon = 'MultiplicationSignIcon',
  NotEqualSignIcon = 'NotEqualSignIcon',
  PiIcon = 'PiIcon',
  PlusSignIcon = 'PlusSignIcon',
  Root01Icon = 'Root01Icon',
  SinIcon = 'SinIcon',
  Sine02Icon = 'Sine02Icon',
  Summation01Icon = 'Summation01Icon',
  TanIcon = 'TanIcon',
}

const mappedIcons: { [key: string]: React.ComponentType<{ className?: string, style?: React.CSSProperties }> } = {
  // AcuteIcon: AcuteIcon,
  // AlphaIcon: AlphaIcon,
  // Coordinate02Icon: Coordinate02Icon,
  // CosIcon: CosIcon,
  // CubeIcon: CubeIcon,
  // FunctionOfXIcon: FunctionOfXIcon,
  MatrixIcon: MatrixIcon,
  MinusPlus01Icon: MinusPlus01Icon,
  MinusSignIcon: MinusSignIcon,
  MultiplicationSignIcon: MultiplicationSignIcon,
  NotEqualSignIcon: NotEqualSignIcon,
  PiIcon: PiIcon,
  PlusSignIcon: PlusSignIcon,
  Root01Icon: Root01Icon,
  SinIcon: SinIcon,
  Sine02Icon: Sine02Icon,
  Summation01Icon: Summation01Icon,
  TanIcon: TanIcon,
};

type IconComponentProps = {
  type: IconEnum;
  className: string;
  style: React.CSSProperties;
};

const IconComponent = ({ type, className, style }: IconComponentProps) => {
  const Icon = mappedIcons[type];
  return <Icon className={className} style={style} />;
}

export { IconEnum, IconComponent};
