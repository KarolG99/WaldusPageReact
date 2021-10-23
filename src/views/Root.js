import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import Navigation from 'components/templates/Navigation/Navigation';
import HeaderPhotos from 'components/molecules/HeaderPhotos/HeaderPhotos';
import Quote from 'components/atoms/Quote/Quote';
import { Main } from './Root.styles';
import InfoSect from 'components/molecules/InfoSect/InfoSect';
import Services from 'components/organisms/Services/Services';
import Cooperation from 'components/organisms/Cooperation/Cooperation';
import Footer from 'components/molecules/Footer/Footer';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <header>
        <Navigation />
        <HeaderPhotos />
        <Quote />
      </header>
      <Main>
        <InfoSect />
        <Services />
        <Cooperation />
        <Footer />
      </Main>
    </ThemeProvider>
  );
};

export default Root;
