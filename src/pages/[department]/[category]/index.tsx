import { Content } from '@entities/cms';
import PLPStandard from '@modules/plp-standard';
import PlpQueryParams from '@modules/plp-standard/types/plp-query-params';
import getContentViewCms from '@use-cases/cms/get-content-view';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps = (async (context) => {
  const { query } = context;
  const { category } = query as PlpQueryParams;
  const contentCMS = await getContentViewCms(category);
  return {
    props: {
      contentCMS,
    },
  };
}) satisfies GetServerSideProps<{ contentCMS: Content[] | null }>;

const PLPCategory = ({
  contentCMS,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <PLPStandard contentCMS={contentCMS} />;
};

export default PLPCategory;
