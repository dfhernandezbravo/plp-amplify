import { SkeletonComponent } from '@components/atoms/skeleton/skeleton';
import { ProductPLP } from '@store/slices/products';
import Image from 'next/image';
import React, { useState } from 'react';

interface Props {
  imageUrl: string;
  product: ProductPLP;
  layout: 'grid' | 'list';
}

const ProductImage: React.FC<Props> = ({ imageUrl, product, layout }) => {
  const [isLoading, setIsLoading] = useState(false);

  const skeletonSize = () => {
    if (layout === 'grid')
      return { width: '100%', height: '200px', top: 10, right: 0 };
    return { width: '202px', height: '160px', top: 10, right: 4 };
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        minWidth: isLoading ? 205 : 215,
      }}
    >
      <Image
        src={product.imageUrl}
        width={450}
        height={333}
        placeholder="empty"
        loading="lazy"
        alt={product.productName || ''}
        onLoad={() => {
          setIsLoading(true);
        }}
      />
      {!isLoading && (
        <SkeletonComponent
          width={skeletonSize().width}
          height={skeletonSize().height}
          top={skeletonSize().top}
          right={skeletonSize().right}
        />
      )}
    </div>
  );
};

export default ProductImage;
