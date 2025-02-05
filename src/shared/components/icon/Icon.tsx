import { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';

type IconProps = React.ComponentProps<typeof Icons.AlertCircle>;
type IconName = keyof typeof Icons;

interface DynamicIconProps extends IconProps {
  iconName: IconName | string;
  className?: string;
}

const DynamicIcon = ({ iconName, className, ...props }: DynamicIconProps) => {
  const [IconComponent, setIconComponent] = useState<React.ComponentType<IconProps> | null>(() => null);

  useEffect(() => {
    if (iconName && typeof iconName === 'string' && iconName in Icons) {
      setIconComponent(() => Icons[iconName as IconName] as React.ComponentType<IconProps>);
    } else {
      setIconComponent(() => null);
    }
  }, [iconName]);

  return IconComponent ? <IconComponent className={className} {...props} /> : null;
};

export default DynamicIcon;