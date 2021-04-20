import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 30%;

  /* @media (min-width: 601px) {
    width: 90%;
  }

  @media (min-width: 993px) {
    width: 80%;
  } */
`;

export const InputsContainer = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.primary.lighter};
  border-radius: 15px;
  overflow: hidden;
`;

export const ListUl = styled.ul`
  list-style: none;
  padding: 0 2rem;
`;

export const Divider = styled.hr`
  margin: 2rem 0;
  border-color: ${({ theme }) => theme.colors.primary.lighter};
  opacity: 0.6;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const ListItemTextContent = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.lg};
  ${({ done }) => (done ? 'text-decoration: line-through;' : '')}
`;
