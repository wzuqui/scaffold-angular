import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.spacing(6)}px;
  background-color: ${({ theme }) => theme.colors.backgroundHeader};
  padding: 0 ${({ theme }) => theme.spacing(3)}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
`;

const HeaderItem = styled.div`
  align-items: center;
  display: flex;
  position: relative;
`;

export { Header, HeaderItem };
