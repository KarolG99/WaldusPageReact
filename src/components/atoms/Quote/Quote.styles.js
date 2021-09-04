import styled from 'styled-components';

export const QuoteWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: 35px;
  padding: 30px 20px;
  position: relative;
  top: -90px;
  text-align: center;
  margin: 20px;
  box-shadow: inset 0px 2px 20px 7px ${({ theme }) => theme.colors.darkOrange};
  -webkit-box-shadow: inset 0px 2px 20px 7px ${({ theme }) => theme.colors.darkOrange};
  -moz-box-shadow: inset 0px 2px 20px 7px ${({ theme }) => theme.colors.darkOrange};
`;

export const QuoteText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  z-index: 2;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: 600;
  letter-spacing: 1px;
  font-style: italic;
  color: ${({ theme }) => theme.colors.darkWhite};
  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;
