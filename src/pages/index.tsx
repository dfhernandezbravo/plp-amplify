import * as React from 'react';

// Components
import Breadcrumb from '@components/molecules/Breadcrumb';

const App = () => {
  return (
    <Breadcrumb
      links={[
        {
          url: '/muebles',
          text: 'Muebles',
        },
        {
          url: '/muebles-living',
          text: 'Muebles de Living y Sala de Estar',
        },
        {
          url: '/juegos-living',
          text: 'Juegos de Living',
        },
      ]}
    />
  );
};

export default App;
