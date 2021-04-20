import React from 'react';

import { InputStyle } from './style';

const Input = ({ placeholder = '', value, onChange, name }) => {
  return <InputStyle {...{ placeholder, value, onChange, name }} />;
};

export default Input;
