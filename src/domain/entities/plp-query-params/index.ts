import { ParsedUrlQuery } from 'querystring';

export default interface PlpQueryParams extends ParsedUrlQuery {
  department: string;
  category: string;
  product: string;
  clusterId: string;
  eventName: string;
  search: string;
  filter?: string;
  count?: string;
  page?: string;
  sort?: string;
  layout?: string;
}
