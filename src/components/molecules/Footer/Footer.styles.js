import styled from 'styled-components';

export const Wrapper = styled.footer`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.orange};
  padding: 20px;
  margin-top: 80px;
  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
  & h4 {
    padding-bottom: 15px;
  }
`;

export const Line = styled.div`
  width: 120px;
  border: 1px solid white;
  margin-left: auto;
  margin-right: auto;
`;

export const ContactDetails = styled.div`
  padding-bottom: 15px;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.darkOrange};

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const Creator = styled.div`
  padding-top: 20px;
`;
