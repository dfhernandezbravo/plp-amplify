import QueryProvider from '@presentation/providers/query-provider';
import StoreProvider from '@store/provider';
import React from 'react';
import PLPStandardContainer from './plp-standard-container';

const PLPStandard = () => {
  return (
    <QueryProvider>
      <StoreProvider>
        <PLPStandardContainer />
      </StoreProvider>
    </QueryProvider>
  );
};

export default PLPStandard;
