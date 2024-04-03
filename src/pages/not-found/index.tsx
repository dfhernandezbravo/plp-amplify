import SearchNotFound from '@modules/search-not-found';
import PLPLayout from '@presentation/layouts/plp-layout';

const NotFoundPage = () => {
  return (
    <PLPLayout>
      <SearchNotFound view="plp-not-found" type="page-not-found" />
    </PLPLayout>
  );
};

export default NotFoundPage;
