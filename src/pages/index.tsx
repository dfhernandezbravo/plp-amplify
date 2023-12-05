import * as React from 'react';
import PLPStandard from '@modules/plp-standard';
import { ThemeProviderEasy } from '@cencosud-ds/easy-design-system';

const App = () => {
  return (
    <ThemeProviderEasy>
      <PLPStandard />
    </ThemeProviderEasy>
  );
};

export default App;
