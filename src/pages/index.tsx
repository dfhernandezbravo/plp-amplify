import * as React from 'react';
import {
  ButtonEasy,
  Textfield,
  useDevice,
} from '@cencosud-ds/easy-design-system';

const App = () => {
  const { os } = useDevice();

  return (
    <div>
      <h3>Hola</h3>
      <ButtonEasy variant="primary" label="Button Test" />
      <h3>OS: {os}</h3>
      <Textfield placeholder="Hola" label="Hola" />
    </div>
  );
};

export default App;
