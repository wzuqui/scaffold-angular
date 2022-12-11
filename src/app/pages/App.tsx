import React, { PropsWithChildren, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { Aba, AbaProps } from '../components/Aba';
import { Header, HeaderItem } from '../components/Header';
import { Logo } from '../components/Logo';
import { Main } from '../components/Main';
import { MenuButton } from '../components/MenuButton';
import { Perfil } from '../components/Perfil';
import { Theme } from '../components/Theme';
import { Home } from './Home';
import { PessoasJuridicas } from './PessoasJuridicas';

const Container = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

export interface AppProps extends PropsWithChildren<{}> {}

export function App(props: AppProps) {
  const [, setMenuIsOpen] = useState(false);
  const [abas, setAbas] = useState<AbaProps[]>([
    { rota: '/home', nome: 'Home', fixo: true, icone: '/assets/home.svg' },
    {
      rota: '/pessoas-juridicas',
      nome: 'Pessoas Jurídicas',
      icone: '/assets/pessoas-juridicas.svg',
    },
  ]);
  const [abaAtiva, setAbaAtiva] = useState('Home');
  const [, setPerfilIsOpen] = useState(false);
  const navigate = useNavigate();

  /**
   * 1. Remover a aba da lista de abas
   * 2. Se a aba que foi fechada era a aba ativa, ativar a aba posterior se existir
   * 3. Se não existir aba posterior, ativar a aba anterior se existir
   * 4. Se não existir aba anterior, ativar a aba Home
   */
  function acaoFecharAba(rota?: string) {
    const indiceAba = abas.findIndex((aba) => aba.rota === rota);
    if (indiceAba === -1) {
      return;
    }
    const abasAtualizadas = [...abas];
    abasAtualizadas.splice(indiceAba, 1);
    setAbas(abasAtualizadas);
    if (abaAtiva === rota) {
      if (indiceAba < abasAtualizadas.length) {
        setAbaAtiva(abasAtualizadas[indiceAba].nome);
      } else if (indiceAba > 0) {
        setAbaAtiva(abasAtualizadas[indiceAba - 1].nome);
      } else {
        setAbaAtiva('Home');
      }
    }
  }

  return (
    <Theme>
      <Container>
        <Header>
          <HeaderItem>
            <MenuButton onClick={() => setMenuIsOpen(true)}>☰</MenuButton>
            <Logo />
            {abas.map((aba) => (
              <Aba
                key={aba.rota}
                fixo={aba.fixo}
                icone={aba.icone}
                nome={aba.nome}
                ativa={abaAtiva === aba.nome}
                acaoClicou={() => {
                  navigate(aba.rota || '/');
                  setAbaAtiva(aba.nome);
                }}
                acaoFechar={() => {
                  acaoFecharAba(aba.rota);
                }}
              />
            ))}
          </HeaderItem>
          <HeaderItem>
            <Perfil acaoClicou={() => setPerfilIsOpen(true)} />
          </HeaderItem>
        </Header>
        <Main>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/pessoas-juridicas" element={<PessoasJuridicas />} />
          </Routes>
        </Main>
      </Container>
    </Theme>
  );
}
