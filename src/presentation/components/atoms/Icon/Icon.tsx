import { Suspense, useEffect, useRef, useState, FC, SVGProps } from 'react';

// Constants
import Icons from '../../../assets/icons/list.json';

// Definitions
import { Props } from './types';

const Icon = (props: Props) => {
  // Props
  const { id, name, color, size, style } = props;

  // Refs
  const Icon = useRef<FC<SVGProps<SVGSVGElement>> | null>();

  // States
  const [key, setKey] = useState(0);

  // Methods
  const getIcon = async () => {
    Icon.current = (await import(`@assets/icons/${Icons[name]}`)).default;
    setKey((prev) => ++prev);
  };

  // On name change
  useEffect(() => {
    getIcon();
  }, [name]);

  return (
    <Suspense>
      {Icon?.current && (
        <Icon.current
          key={key}
          id={id}
          fill={color}
          stroke={color}
          style={{ width: size, height: size, ...style }}
        />
      )}
    </Suspense>
  );
};

export default Icon;
