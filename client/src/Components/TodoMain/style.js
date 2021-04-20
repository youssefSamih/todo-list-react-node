import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 30%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 90%;
  }
`;

export const InputsContainer = styled.form`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 15px;
  overflow: hidden;
`;

export const ListUl = styled.ul`
  list-style: none;
  padding: 0 2rem;
`;

export const Divider = styled.hr`
  margin: 2rem 0;
  border-color: ${({ theme }) => theme.colors.primary};
  opacity: 0.6;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const ListItemTextContent = styled.button`
  font-size: ${({ theme }) => theme.fonts.size.lg};
	width: 100%;
    border: none;
    background: transparent;
    text-align: left;
}
  ${({ done }) => (done ? 'text-decoration: line-through;' : '')}
`;
