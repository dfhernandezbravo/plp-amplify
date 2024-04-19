import PromotionalText from '@components/molecules/PromotionalText';
import useDevice from '@hooks/use-device';
import PLPContext from '@presentation/context/plp-context';
import React, { useContext } from 'react';

const PROMOTIONAL_TEXT = 'promotional-text-plp';

const PromotionalTextCMS = () => {
  const { device } = useDevice();
  const { contentCMS, isLoadingCMS } = useContext(PLPContext);

  if (isLoadingCMS) return <div></div>;

  const promotionalTextComponent = contentCMS?.find(
    (content) => content.component === PROMOTIONAL_TEXT,
  );

  if (!promotionalTextComponent) return null;

  const { description, title } = promotionalTextComponent;

  if (!description) return null;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <PromotionalText
        title={title}
        description={description}
        isMobile={device === 'Phone'}
      />
    </div>
  );
};

export default PromotionalTextCMS;
