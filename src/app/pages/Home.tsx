import { SelectBox } from 'devextreme-react';
import DataSource from 'devextreme/data/data_source';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Telas } from '../telas';

const Logo = styled.img`
  src: ${(props) => props.src};
  height: ${(props) => props.theme.spacing(25)}px;
  margin: ${(props) => props.theme.spacing(10)}px 0;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Pesquisa = styled(SelectBox)`
  width: ${(props) => props.theme.spacing(60)}px;
`;

export function Home() {
  const dataSource = new DataSource({
    store: Telas.filter((p) => p.categoria),
    group: 'categoria',
  });
  const navigate = useNavigate();

  return (
    <Container>
      <Logo src="/assets/logo.svg" />
      <Pesquisa
        acceptCustomValue={true}
        dataSource={dataSource}
        displayExpr="nome"
        grouped={true}
        valueExpr="rota"
        placeholder="Pesquise por uma tela"
        onContentReady={(e) => {
          e.component.focus();
        }}
        onValueChanged={(e) => {
          console.log(e.value);
          navigate(e.value.rota);
        }}
      />
    </Container>
  );
}
