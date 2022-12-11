import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-size: ${(props) => props.theme.spacing(1.5)}px;
  gap: ${(props) => props.theme.spacing(1)}px;
  justify-content: center;
  padding: ${(props) => props.theme.spacing(0.5)}px ${(props) => props.theme.spacing(1)}px;

  &:hover {
    background-color: ${(props) => props.theme.colors.backgroundHeader};
    background: ${(props) => props.theme.colors.backgroundPerfilHover};
    border-radius: 4px;
  }
`;

const Avatar = styled.div`
  border-radius: 50%;
  height: ${(props) => props.theme.spacing(4)}px;
  overflow: hidden;
  width: ${(props) => props.theme.spacing(4)}px;
`;

const Content = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const Nome = styled.span`
  font-weight: bold;
`;

const Tenant = styled.span``;

export interface PerfilProps {
  acaoClicou?: () => void;
}

export function Perfil(props: PerfilProps) {
  return (
    <Container onClick={() => props.acaoClicou && props.acaoClicou()}>
      <Avatar>
        <img
          src="https://pt.gravatar.com/userimage/138300529/3088b96f163856f511fe152e5dfe856c.jpg"
          alt="Foto"
          height={'100%'}
        />
      </Avatar>
      <Content>
        <Nome>Willian Luis Zuqui</Nome>
        <Tenant>Ravex</Tenant>
      </Content>
    </Container>
  );
}
