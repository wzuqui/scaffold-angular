import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  spacing(size: number) {
    return size * 8;
  },
  colors: {
    primary: '#5454A0',
    backgroundHeader: '#E9E9E9',
    backgroundMain: '#FFF',
    backgroundPerfilHover: '#ffffff7d',
  },
  logo: '/assets/logo.svg',
};

type ThemeType = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

export function Theme(props: React.PropsWithChildren<{}>) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
