import { ThemeProvider } from '@cencosud-ds/easy-design-system';
import { Content } from '@entities/cms';
import QueryProvider from '@presentation/providers/query-provider';
import StoreProvider from '@store/provider';
import PLPStandardContainer from './plp-standard-container';

interface Props {
  contentCMS: Content[] | null;
}

const PLPStandard: React.FC<Props> = ({ contentCMS }) => {
  return (
    <QueryProvider>
      <StoreProvider>
        <ThemeProvider>
          <PLPStandardContainer contentCMS={contentCMS} />
        </ThemeProvider>
      </StoreProvider>
    </QueryProvider>
  );
};

export default PLPStandard;
