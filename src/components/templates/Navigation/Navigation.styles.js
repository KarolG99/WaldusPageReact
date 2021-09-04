import styled from 'styled-components';

export const NavWrapper = styled.nav`
  width: 100vw;
  min-height: 8vh;
  background-color: ${({ theme }) => theme.colors.orange};
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkOrange};
  z-index: 2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  padding: 15px 0px 15px 0px;

  @media screen and (max-width: 768px) {
    z-index: 3;
    body {
      overflow-x: hidden;
    }
  } ;
`;

export const Links = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &.nav-active {
    transform: translateX(0%);
  }

  @media screen and (max-width: 768px) {
    position: absolute;
    right: 0px;
    height: 92vh;
    top: 8vh;
    background-color: ${({ theme }) => theme.colors.orange};
    display: flex;
    flex-direction: column;
    width: 60%;
    opacity: 0.92;
    transform: translateX(120%);
    transition: transform 0.5s ease-in-out;
  }
`;

export const Line = styled.div`
  height: 2px;
  width: 20%;
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 0.4s ease;
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  cursor: pointer;
  &:hover ${Line} {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    opacity: 0;
    ${Line} {
      display: none;
    }
  }

  @keyframes navLinkFade {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;

export const Burger = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    cursor: pointer;
    z-index: 2;
    display: block;
    /* padding: 5px 0 5px 0; */
  }
`;

export const BurgerLine = styled.div`
  width: 25px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 5px;
  transition: all 0.3s ease;

  &.toggle {
    &0 {
      transform: rotate(-45deg) translate(-5px, 6px);
    }
    &1 {
      opacity: 0;
    }
    &2 {
      transform: rotate(45deg) translate(-4px, -5px);
    }
  }
`;
