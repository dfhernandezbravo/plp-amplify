import { useDevice } from '@cencosud-ds/easy-design-system';
import ComposerCMS from '@components/organisms/composer-cms';
import { Content } from '@entities/cms';
import ContentComponent from '@modules/plp-standard/components';
import Desktop from '@modules/plp-standard/layouts/Desktop';
import Mobile from '@modules/plp-standard/layouts/Mobile';
import { PlpContainer } from '@modules/plp-standard/styles';

interface Props {
  contentCMS: Content[];
}

const PLPCMS = ({ contentCMS }: Props) => {
  const { device } = useDevice();

  return (
    <PlpContainer>
      {device === 'Phone' ? (
        <Mobile>
          <ComposerCMS contentCMS={contentCMS} components={ContentComponent} />
        </Mobile>
      ) : (
        <Desktop>
          <ComposerCMS contentCMS={contentCMS} components={ContentComponent} />
        </Desktop>
      )}
    </PlpContainer>
  );
};

export default PLPCMS;
