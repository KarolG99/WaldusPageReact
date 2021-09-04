import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import Navigation from 'components/templates/Navigation/Navigation';
import HeaderPhotos from 'components/atoms/HeaderPhotos/HeaderPhotos';
import Quote from 'components/atoms/Quote/Quote';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <header>
        <Navigation></Navigation>
        <HeaderPhotos />
        <Quote />
      </header>
    </ThemeProvider>
  );
};

export default Root;
