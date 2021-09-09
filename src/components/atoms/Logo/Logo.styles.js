import styled from 'styled-components';

export const StyledLogo = styled.div`
  color: ${({ theme }) => theme.colors.white};
  z-index: 3;

  h1 {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }
`;
