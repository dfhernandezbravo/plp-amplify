import * as React from 'react';

// Components
import Banner, { Item } from '@components/organisms/Banner';

const App = () => {
  // Constants
  const items: Item[] = [
    {
      url: 'https://www.easy.cl/eventos/clima',
      image:
        'https://media.easy.cl/is/image/EasySA/bannerplp_modofresh_desktop1',
      title: 'Promo 1',
      external: true,
    },
    {
      url: 'https://www.easy.cl/eventos/clima',
      image:
        'https://media.easy.cl/is/image/EasySA/bannerplp_modofresh_desktop1',
      title: 'Promo 2',
      external: true,
    },
  ];

  return (
    <Banner
      pagination
      items={items}
      autoplay={{ delay: 5000 }}
      onClick={(item) => console.log(item)}
    />
  );
};

export default App;
