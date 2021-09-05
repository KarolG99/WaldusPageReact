import styled from 'styled-components';

export const Section = styled.section`
  width: 40vw;
  margin: 20px;
  padding: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  & img {
    width: 20%;
    padding: 20px;
  }
  & .sect-text {
    width: 50%;
    color: ${({ theme }) => theme.colors.grey};
    & h2 {
      color: ${({ theme }) => theme.colors.darkGrey};
    }
    & p {
      margin: 15px 0px;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 80vw;
  }
  @media screen and (max-width: 768px) {
    height: auto;
    flex-direction: column;
    width: 70vw;
    & .sect-text {
      order: 1;
      width: fit-content;
      text-align: center;
      padding: 10px 10px;
    }
    & img {
      width: 40%;
    }
  }
`;
