import React, { ReactNode } from 'react';
import { EnvioExpressIcon } from './envio-express-icon';
import { EnvioGratisIcon } from './envio-gratis-icon';
import { PickupIcon } from './pickup-icon';

export const getIcon = (id: string): ReactNode => {
  switch (id) {
    case 'Envío gratis':
      return <EnvioGratisIcon />;
    case 'Envío express':
      return <EnvioExpressIcon />;
    case 'Retiro en tienda':
      return <PickupIcon />;
    default:
      return <></>;
  }
};
