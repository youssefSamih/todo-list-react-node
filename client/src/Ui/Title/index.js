import React from 'react';

import { StyledTitle } from './style';

const Title = ({ title = '' }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

export default Title;
