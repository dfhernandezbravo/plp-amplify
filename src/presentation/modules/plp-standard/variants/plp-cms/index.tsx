import ComposerCMS from '@components/organisms/composer-cms';
import { Content } from '@entities/cms';
import ContentComponent from '@modules/plp-standard/components';
import Desktop from '@modules/plp-standard/layouts/Desktop';
import Mobile from '@modules/plp-standard/layouts/Mobile';
import { PlpContainer } from '@modules/plp-standard/styles';
import { Layout } from '@cencosud-ds/easy-design-system';

interface Props {
  contentCMS: Content[];
}

const PLPCMS = ({ contentCMS }: Props) => {
  return (
    <PlpContainer>
      <Layout is={['Tablet', 'Phone']}>
        <Mobile>
          <ComposerCMS contentCMS={contentCMS} components={ContentComponent} />
        </Mobile>
      </Layout>
      <Layout is={['Desktop']}>
        <Desktop>
          <ComposerCMS contentCMS={contentCMS} components={ContentComponent} />
        </Desktop>
      </Layout>
    </PlpContainer>
  );
};

export default PLPCMS;
