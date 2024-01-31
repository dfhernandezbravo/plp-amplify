import { Layout } from '@cencosud-ds/easy-design-system';
import FacetsDesktop from './layout/desktop';
import FacetsMobile from './layout/mobile';

const Facets = () => {
  return (
    <>
      <Layout is={['Desktop']}>
        <FacetsDesktop />
      </Layout>
      <Layout is={['Tablet', 'Phone']}>
        <FacetsMobile />
      </Layout>
    </>
  );
};

export default Facets;
