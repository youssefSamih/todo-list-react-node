import React from 'react';

import { InputStyle } from './style';

const Input = ({ placeholder = '' }) => {
  return <InputStyle {...{ placeholder }} />;
};

export default Input;
