import Skeleton from '@components/atoms/skeleton';
import { ProductPLP } from '@store/slices/products';
import Image from 'next/image';
import React, { useState } from 'react';

interface Props {
  imageUrl: string;
  product: ProductPLP;
}

const ProductImage: React.FC<Props> = ({ imageUrl, product }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {isLoading && (
        <Skeleton animationtype="wave" height="100%" width="100%" />
      )}
      <Image
        src={imageUrl}
        width={718}
        height={575}
        alt={product.productName || ''}
        onLoad={() => {
          setIsLoading(false);
        }}
      />
    </div>
  );
};

export default ProductImage;
