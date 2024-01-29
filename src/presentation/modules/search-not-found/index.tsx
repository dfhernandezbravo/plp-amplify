import ComposerCMS from '@components/organisms/composer-cms';
import getContentViewCms from '@use-cases/cms/get-content-view';
import { useQuery } from 'react-query';
import { ComponentsSearchNotFound } from './components';
import { SearchNotFoundContainer } from './styles';

interface Props {
  title?: React.ReactNode;
  view: 'search-not-found' | 'plp-not-found';
}

const SearchNotFound: React.FC<Props> = ({ title, view }) => {
  const { data } = useQuery(['get-plp-not-found'], () =>
    getContentViewCms(view),
  );

  if (!data) return null;

  return (
    <SearchNotFoundContainer>
      <div className="container">
        {title && <h2 className="title">{title}</h2>}

        <ComposerCMS contentCMS={data} components={ComponentsSearchNotFound} />
      </div>
    </SearchNotFoundContainer>
  );
};

export default SearchNotFound;
