import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import { ArrowButtonWrapper } from './style';
import { useDevice } from '@cencosud-ds/easy-design-system';

interface Props {
  position: 'right' | 'left';
  isPositionAbsolute: boolean;
  disabled: boolean;
  onClick: () => void;
}

const ArrowButton = ({
  position,
  isPositionAbsolute,
  disabled,
  onClick,
}: Props) => {
  const { device } = useDevice();
  return (
    <ArrowButtonWrapper
      onClick={onClick}
      disabled={disabled}
      position={position}
      isPositionAbsolute={
        device === 'Phone' || device === 'Tablet' || isPositionAbsolute
      }
    >
      {position === 'left' && <MdOutlineArrowBackIos />}
      {position === 'right' && <MdOutlineArrowForwardIos />}
    </ArrowButtonWrapper>
  );
};

export default ArrowButton;
