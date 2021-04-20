import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  background-color: ${({ theme, state }) => theme.colors.stateColors[state]};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 2rem;
  font-size: 1.5em;
  ${({ borderRadius }) =>
    borderRadius ? `border-radius:${borderRadius}px;` : ``}
  &:hover {
    opacity: 0.8;
  }
`;
