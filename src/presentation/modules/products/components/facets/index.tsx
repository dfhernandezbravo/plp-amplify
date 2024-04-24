import { Layout } from '@components/atoms/layout';
import { useAppSelector } from '@store/hooks';
import FacetsDesktop from './layout/desktop';
import FacetsMobile from './layout/mobile';

const Facets = () => {
  const { isOpenFacetsMobile } = useAppSelector((state) => state.products);

  return (
    <>
      <Layout is={['Desktop']}>
        <FacetsDesktop />
      </Layout>
      <Layout is={['Tablet', 'Phone']}>
        {isOpenFacetsMobile ? <FacetsMobile /> : null}
      </Layout>
    </>
  );
};

export default Facets;
