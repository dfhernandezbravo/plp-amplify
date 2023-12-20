import { ParsedUrlQuery } from 'querystring';

export default interface PlpQueryParams extends ParsedUrlQuery {
  department: string;
  category: string;
  product?: string;
  filter?: string;
}
