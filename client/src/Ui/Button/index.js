import React from 'react';

import { StyledButton } from './style';

const Button = ({ children, borderRadius = 0, state = 'success' }) => {
  return <StyledButton {...{ borderRadius, state }}>{children}</StyledButton>;
};

export default Button;
