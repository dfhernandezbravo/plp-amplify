import { Layout } from '@cencosud-ds/easy-design-system';
import FacetsDesktop from './layout/desktop';

const Facets = () => {
  return (
    <Layout is={['Desktop']}>
      <FacetsDesktop />
    </Layout>
  );
};

export default Facets;
