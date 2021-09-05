import styled from 'styled-components';

export const Article = styled.article`
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  margin: auto;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding-bottom: 60px;
  width: 100vw;
`;

export const ServicesHeader = styled.h2`
  max-width: 100vw;
  background-color: ${({ theme }) => theme.colors.lightOrange};
  margin: 40px 30vw 20px 30vw;
  padding: 0.2rem 0.6rem 0.2rem 0.6rem;
  border-radius: 15px 15px 15px 15px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkWhite};
`;
