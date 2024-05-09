import { Content } from '@entities/cms';
import React from 'react';
import { ImagePromotionalRibbon, PromotionalRibbonContainer } from './styles';
import useDevice from '@hooks/use-device';

const PromotionalRibbons = (content: Content) => {
  const { alt, backgroundColor, imageMobile, imageDesktop, link, fullWidth } =
    content;
  const { device } = useDevice();

  return (
    <div>
      <PromotionalRibbonContainer
        background={backgroundColor}
        href={link || ''}
      >
        <ImagePromotionalRibbon
          src={
            device === 'Desktop' || device === 'Tablet'
              ? imageDesktop || ''
              : imageMobile || ''
          }
          alt={alt || ''}
          sizes="100vw"
          height={0}
          width={0}
          fullwidth={fullWidth}
        />
      </PromotionalRibbonContainer>
    </div>
  );
};

export default PromotionalRibbons;
