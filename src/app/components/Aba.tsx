import React from 'react';
import styled from 'styled-components';

const AbaContainer = styled.div`
  align-items: center;
  border-bottom: 0;
  border-top-left-radius: ${({ theme }) => theme.spacing(1)}px;
  border-top-right-radius: ${({ theme }) => theme.spacing(1)}px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.spacing(2)}px;
  gap: ${({ theme }) => theme.spacing(1)}px;
  height: ${({ theme }) => theme.spacing(5)}px;
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  min-width: ${({ theme }) => theme.spacing(5)}px;
  padding: ${({ theme }) => theme.spacing(0.5)}px ${({ theme }) => theme.spacing(1.5)}px;
  padding-bottom: ${({ theme }) => theme.spacing(0.25)}px;

  > img {
    height: ${({ theme }) => theme.spacing(2)}px;
  }

  &.ativa {
    background-color: ${({ theme }) => theme.colors.backgroundMain};
    border-bottom: 1px solid ${({ theme }) => theme.colors.backgroundMain};
  }

  &.fixo {
    > img {
      height: ${({ theme }) => theme.spacing(3)}px;
    }

    > span {
      display: none;
    }
  }
`;

const AbaBotaoFechar = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  display: flex;
  font-weight: bold;
  height: ${({ theme }) => theme.spacing(2)}px;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(0.5)}px;
  width: ${({ theme }) => theme.spacing(2)}px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.spacing(0.5)}px;
    color: ${({ theme }) => theme.colors.backgroundMain};
  }
`;

export interface AbaProps {
  acaoClicou?: () => void;
  acaoFechar?: () => void;
  ativa?: boolean;
  fixo?: boolean;
  icone: string;
  nome: string;
  rota?: string;
}

export function Aba(props: AbaProps) {
  return (
    <AbaContainer
      onClick={() => props.acaoClicou && props.acaoClicou()}
      className={`${props.fixo ? 'fixo' : ''} ${props.ativa ? 'ativa' : ''}`.trim()}
    >
      <img src={props.icone} />
      <span>{props.nome}</span>
      {!props.fixo && <AbaBotaoFechar onClick={() => props.acaoFechar && props.acaoFechar()}>✖</AbaBotaoFechar>}
    </AbaContainer>
  );
}
