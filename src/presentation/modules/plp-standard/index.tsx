import QueryProvider from '@presentation/providers/query-provider';
import StoreProvider from '@store/provider';
import PLPStandardContainer from './plp-standard-container';
import { ThemeProvider } from '@cencosud-ds/easy-design-system';

const PLPStandard = () => {
  return (
    <QueryProvider>
      <StoreProvider>
        <ThemeProvider>
          <PLPStandardContainer />
        </ThemeProvider>
      </StoreProvider>
    </QueryProvider>
  );
};

export default PLPStandard;
