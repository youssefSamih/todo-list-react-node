import styled from 'styled-components';

export const InputStyle = styled.input`
  font-size: ${({ size, theme }) =>
    size ? `${size}pt` : theme.fonts.size.base};
  font-weight: ${({ theme }) => theme.fonts.weight.light};
  padding: 1.25rem 0.93rem;
  width: 100%;
  outline: none;
  color: ${({ theme, color }) => color || theme.colors.grey[200]};
  text-align: ${({ align }) => align || 'left'};
  background-color: ${({ theme }) => theme.colors.grey[100]};
  border: 1px solid transparent;
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey[200]};
    opacity: 0.5;
  }
`;
