import styled from 'styled-components';

export const MenuButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.spacing(2.5)}px;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(1)}px ${({ theme }) => theme.spacing(2)}px;
`;
