import { SkeletonComponent } from '@components/atoms/skeleton/skeleton';
import { LayoutOptions } from '@components/molecules/Display';
import { ProductPLP } from '@store/slices/products';
import Image from 'next/image';
import React, { useState } from 'react';
import { ImageContainer } from './styles';

interface Props {
  imageUrl: string;
  product: ProductPLP;
  layout: LayoutOptions;
}

const ProductImage: React.FC<Props> = ({ imageUrl, product, layout }) => {
  const [isLoading, setIsLoading] = useState(false);

  const skeletonSize = () => {
    if (layout === 'grid') {
      return { width: '100%', height: '200px', top: 10, right: 0 };
    }
    return { width: '202px', height: '160px', top: 10, right: 4 };
  };

  return (
    <ImageContainer>
      <Image
        src={imageUrl}
        width={layout === 'list' ? 200 : 160}
        height={layout === 'list' ? 200 : 160}
        placeholder="empty"
        loading="lazy"
        sizes={layout === 'grid' ? '100vw' : undefined}
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
    </ImageContainer>
  );
};

export default ProductImage;
