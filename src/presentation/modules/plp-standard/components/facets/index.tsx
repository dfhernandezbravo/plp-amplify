import { Layout } from '@cencosud-ds/easy-design-system';
import FacetsDesktop from './layout/desktop';
import FacetsMobile from './layout/mobile';
import { useAppSelector } from '@store/hooks';

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
