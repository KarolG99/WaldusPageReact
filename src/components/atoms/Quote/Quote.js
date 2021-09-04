import React from 'react';
import { ContentWrapper, QuoteText, QuoteWrapper } from './Quote.styles';

const Quote = () => {
  return (
    <QuoteWrapper>
      <ContentWrapper>
        <QuoteText>
          Rzeczy niemożliwe robimy od zaraz,
          <br />a na cuda trzeba poczekać.
        </QuoteText>
      </ContentWrapper>
    </QuoteWrapper>
  );
};

export default Quote;
