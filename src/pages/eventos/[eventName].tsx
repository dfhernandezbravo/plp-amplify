import { Content } from '@entities/cms';
import PLPCMS from '@modules/plp-standard/variants/plp-cms';
import PLPDefault from '@modules/plp-standard/variants/plp-default';
import PLPLayout from '@presentation/layouts/plp-layout';
import getContentViewCms from '@use-cases/cms/get-content-view';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';

interface Props {
  contentCMS: Content[] | null;
}
interface PlpQueryParams extends ParsedUrlQuery {
  eventName: string;
}

const PLPContent: React.FC<Props> = ({ contentCMS }) => {
  if (contentCMS) return <PLPCMS contentCMS={contentCMS} />;

  return <PLPDefault />;
};

export const getServerSideProps = (async (context) => {
  const { query } = context;
  const { eventName } = query as PlpQueryParams;
  const contentCMS = await getContentViewCms(eventName);

  return {
    props: {
      contentCMS,
    },
  };
}) satisfies GetServerSideProps<Props>;

const EventsPLPPage = ({
  contentCMS,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <PLPLayout>
      <PLPContent contentCMS={contentCMS} />
    </PLPLayout>
  );
};

export default EventsPLPPage;
