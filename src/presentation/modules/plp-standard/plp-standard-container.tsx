import getContentViewCms from '@use-cases/cms/get-content-view';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { useQuery } from 'react-query';
import PLPCMS from './variants/plp-cms';
import PLPDefault from './variants/plp-default';

interface PageUrlQuery extends ParsedUrlQuery {
  department: string;
  category: string;
  product?: string;
}

const PLPStandardContainer = () => {
  const router = useRouter();
  const { category } = router.query as PageUrlQuery;

  const { data: contentCMS, isLoading } = useQuery(
    ['get-content-cms', category],
    () => getContentViewCms(category),
    {
      enabled: !!category,
      retry: 2,
    },
  );

  if (isLoading) return <div>Loading</div>;

  if (!contentCMS) return <PLPDefault />;

  return <PLPCMS contentCMS={contentCMS} />;
};

export default PLPStandardContainer;
