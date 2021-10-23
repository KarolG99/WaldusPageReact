import styled from 'styled-components';

export const SiteIsBuildingInfo = styled.p`
  margin-bottom: 70px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.lightOrange};
  /* opacity: 0.8; */
  color: ${({ theme }) => theme.colors.black};
  padding: 10px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap row;
  font-weight: 400;
  width: 50vw;
  margin-bottom: 100px;

  & h1 {
    border-bottom: 2px solid ${({ theme }) => theme.colors.darkGrey};
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  & p {
    margin-top: 15px;
    color: ${({ theme }) => theme.colors.grey};
  }

  @media screen and (max-width: 900px) {
    width: 80vw;
    margin-bottom: 60px;
  }
`;
