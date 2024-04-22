import Skeleton from '@components/atoms/skeleton';
import { QuickFilterSkeletonContainer } from './styles';
import useDevice from '@hooks/use-device';

const QuickFilterSkeleton = () => {
  const { device } = useDevice();

  const elements = device === 'Desktop' ? 8 : device === 'Tablet' ? 6 : 3;

  return (
    <QuickFilterSkeletonContainer>
      {new Array(elements).fill(null).map((_, index) => (
        <Skeleton
          height="80px"
          width="80px"
          radius="50%"
          animationtype="pulse"
          key={index}
        />
      ))}
    </QuickFilterSkeletonContainer>
  );
};

export default QuickFilterSkeleton;
