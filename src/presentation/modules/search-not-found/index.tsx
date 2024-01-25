import ComposerCMS from '@components/organisms/composer-cms';
import getContentViewCms from '@use-cases/cms/get-content-view';
import { useQuery } from 'react-query';
import { ComponentsSearchNotFound } from './components';
import { SearchNotFoundContainer } from './styles';

interface Props {
  searchTerm: string;
}

const SearchNotFound: React.FC<Props> = ({ searchTerm }) => {
  const { data } = useQuery(['get-search-not-found'], () =>
    getContentViewCms('search-not-found'),
  );

  if (!data) return <div>Error!!!</div>;

  return (
    <SearchNotFoundContainer>
      <div className="container">
        <h2 className="title">
          Sin resultados de búsqueda para {`"${searchTerm}"`}
        </h2>

        <ComposerCMS contentCMS={data} components={ComponentsSearchNotFound} />
      </div>
    </SearchNotFoundContainer>
  );
};

export default SearchNotFound;
