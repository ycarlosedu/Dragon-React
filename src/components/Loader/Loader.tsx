import React from 'react';
import { Bars } from 'react-loader-spinner';

import { DivLoader } from './styles';

const Loader: React.FC = () => {
  return (
    <DivLoader>
      <Bars width="100" color="grey" ariaLabel="loading" />
    </DivLoader>
  );
};

export default Loader;
