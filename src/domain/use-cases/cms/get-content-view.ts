import { Content } from '@entities/cms';
import cmsRepository from '@repositories/cms';

async function getContentViewCms(view: string): Promise<Content[]> {
  try {
    const { data } = await cmsRepository().getCmsView(view);
    return data.content;
  } catch (error) {
    throw new Error(`${JSON.stringify(error)}`);
  }
}

export default getContentViewCms;
