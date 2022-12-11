import React from 'react';
import styled from 'styled-components';
import { BreadCrumb } from '../components/BreadCrumb';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Titulo = styled.h1`
  font-size: ${(props) => props.theme.spacing(5)}px;
  margin: ${(props) => props.theme.spacing(10)}px 0;
`;

const Header = styled.div`
  display: flex;
  height: ${(props) => props.theme.spacing(6)}px;
  overflow: hidden;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export function PessoasJuridicas() {
  return (
    <Container>
      <Header>
        <BreadCrumb />
        <Titulo>Pessoas Jurídicas</Titulo>
      </Header>
      <Main>
        <p>Conteúdo</p>
      </Main>
    </Container>
  );
}
