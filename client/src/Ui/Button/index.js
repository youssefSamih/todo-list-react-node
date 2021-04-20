import React from 'react';

import { StyledButton } from './style';

const Button = ({
  children,
  borderRadius = 0,
  state = 'success',
  type,
  onClick,
}) => {
  return (
    <StyledButton {...{ borderRadius, state, type, onClick }}>
      {children}
    </StyledButton>
  );
};

export default Button;
