import { ThemeProvider } from '@cencosud-ds/easy-design-system';
import PLPStandard from '@modules/plp-standard';

const App = () => {
  return (
    <ThemeProvider>
      <PLPStandard />
    </ThemeProvider>
  );
};

export default App;
