import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import ComposerCMS from '@components/organisms/composer-cms';
import getContentViewCms from '@use-cases/cms/get-content-view';
import { ComponentsSearchNotFound } from './components';
import customEvents from '@use-cases/observability/custom-events';
import SearchSkeleton from '@modules/plp-standard/components/search-skeleton';
import { SearchNotFoundContainer } from './styles';

interface Props {
  title?: React.ReactNode;
  view: 'search-not-found' | 'plp-not-found';
  type: 'events' | 'cluster' | 'search' | 'category' | 'page-not-found';
}

const SearchNotFound: React.FC<Props> = ({ title, view, type }) => {
  const { asPath } = useRouter();

  const { data, isLoading } = useQuery(['get-plp-not-found'], () =>
    getContentViewCms(view),
  );

  useEffect(() => {
    customEvents({
      eventName: `page-not-found`,
      data: {
        url: asPath,
        type,
      },
    });
  }, []);

  if (isLoading) return <SearchSkeleton />;

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
