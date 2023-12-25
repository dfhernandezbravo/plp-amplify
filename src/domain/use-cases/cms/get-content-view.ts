import { Content } from '@entities/cms';
import cmsRepository from '@repositories/cms';

async function getContentViewCms(view: string): Promise<Content[] | null> {
  try {
    const { data } = await cmsRepository().getCmsView(view);
    return data.content;
  } catch (error) {
    return null;
  }
}

export default getContentViewCms;
