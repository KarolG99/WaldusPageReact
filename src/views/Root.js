import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import Navigation from 'components/templates/Navigation/Navigation';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <header>
        <Navigation></Navigation>
      </header>
    </ThemeProvider>
  );
};

export default Root;
