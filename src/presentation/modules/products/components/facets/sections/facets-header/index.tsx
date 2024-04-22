import { Layout } from '@components/atoms/layout';
import FacetsHeaderDesktop from './desktop';
import FacetsHeaderMobile from './mobile';

const FacetsHeader = () => {
  return (
    <>
      <Layout is={['Desktop']}>
        <FacetsHeaderDesktop />
      </Layout>
      <Layout is={['Phone', 'Tablet']}>
        <FacetsHeaderMobile />
      </Layout>
    </>
  );
};

export default FacetsHeader;
