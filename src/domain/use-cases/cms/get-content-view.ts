import { Content } from '@entities/cms';
import cmsRepository from '@repositories/cms';
import { useQuery } from 'react-query';

interface Props {
  viewName: string;
}

async function getContentViewCms(view: string): Promise<Content[] | null> {
  try {
    const { data } = await cmsRepository().getCmsView(view);
    return data.content;
  } catch (error) {
    return null;
  }
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
    },
  );

  return {
    isLoadingCMS,
    contentCMS,
    isErrorCMS,
  };
};

export default getContentViewCms;
