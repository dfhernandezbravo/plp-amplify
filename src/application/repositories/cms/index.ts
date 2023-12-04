import bffInstance from '@data-sources/bff-web-instance';
import { CMSBody } from '@entities/cms';
import { AxiosResponse } from 'axios';

interface CMSRepository {
  getCmsView: (
    view: string,
    eventName?: string,
  ) => Promise<AxiosResponse<CMSBody>>;
}

const cmsRepository = (httpInstance = bffInstance): CMSRepository => ({
  getCmsView: (view, eventName = 'default') =>
    httpInstance.get(`/cms/views/${view}`, { params: { eventName } }),
});

export default cmsRepository;
