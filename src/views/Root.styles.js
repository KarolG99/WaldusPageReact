import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;
