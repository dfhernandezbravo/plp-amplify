import { Content } from '@entities/cms';
import cmsRepository from '@repositories/cms';
import { useQuery } from 'react-query';

interface Props {
  viewName: string;
}

async function getContentViewCms(view: string): Promise<Content[] | null> {
  const { data } = await cmsRepository().getCmsView(view);
  return data.content;
}

export const useGetContentViewCms = ({ viewName }: Props) => {
  const {
    isLoading: isLoadingCMS,
    data: contentCMS,
    isError: isErrorCMS,
  } = useQuery(
    ['get-content-cms', viewName],
    () => getContentViewCms(viewName),
    {
      enabled: !!viewName,
      retry: 1,
    },
  );

  return {
    isLoadingCMS,
    contentCMS,
    isErrorCMS,
  };
};

export default getContentViewCms;
