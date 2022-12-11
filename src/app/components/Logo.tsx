import styled from 'styled-components';

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: ${({ theme }) => `url(${theme.logo})`};
  background-size: contain;
  background-repeat: no-repeat;
  width: ${({ theme }) => theme.spacing(7.5)}px;
  height: ${({ theme }) => theme.spacing(3.5)}px;
  margin-left: ${({ theme }) => theme.spacing(2)}px;
  margin-right: ${({ theme }) => theme.spacing(2)}px;
`;
