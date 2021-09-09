import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 95vw;
  & h1 {
    margin-top: 70px;
    padding-bottom: 20px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 15%;
  }
  & .animate-arrow {
    margin-top: 30px;
    background-color: ${({ theme }) => theme.colors.lightOrange};
    border-radius: 50%;
    animation: arrow 1.3s ease-in-out infinite;
  }
  @keyframes arrow {
    0% {
      transform: translateY(-5px);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(-5px);
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: wrap-row;
  max-width: 60vw;
  margin: 60px auto 60px auto;
  @media screen and (max-width: 768px) {
    max-width: 85vw;
    height: auto;
    flex-direction: column;
    & p {
      text-align: center;
      margin: 40px;
    }
  }
`;

export const TextBackground = styled.span`
  background-color: ${({ theme }) => theme.colors.lightOrange};
  width: 110%;
  font-weight: 600;
  padding: 3px 10px 3px 10px;
  border-radius: 15px 2px 15px 2px;
`;

export const HowToContact = styled.h2`
  padding-top: 40px;
`;
