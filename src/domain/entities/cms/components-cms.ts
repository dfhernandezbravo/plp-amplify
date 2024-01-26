import { Content } from '.';

type R<P = Record<string, never>> = React.FC<P>;

export interface ComponentsCMS {
  [key: string]: R<Content>;
}
