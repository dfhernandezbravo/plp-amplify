import * as React from 'react';
import {
  ButtonEasy,
  ThemeProviderEasy,
  useDevice,
} from '@cencosud-ds/easy-design-system';

const App = () => {
  const { device, os } = useDevice();
  return (
    <ThemeProviderEasy>
      <h3>Device: {device}</h3>
      <h3>OS: {os}</h3>
      <ButtonEasy variant="primary" label="Button Test" />
    </ThemeProviderEasy>
  );
};

export default App;
