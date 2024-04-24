import { LayoutOptions } from '@components/molecules/Display';
import { OrderOptions } from '@components/molecules/Filter';
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
  sort?: OrderOptions;
  layout?: LayoutOptions;
}
