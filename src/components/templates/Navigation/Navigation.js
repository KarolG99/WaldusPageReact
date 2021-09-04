import React from 'react';
import { NavWrapper, StyledLink, Line, Links, Burger, BurgerLine } from './Navigation.styles';
import Logo from 'components/atoms/Logo/Logo';


const navSlide = () => {
  const links = document.querySelector(Links);
  const styledLink = document.querySelectorAll(StyledLink);
  const burgerLine = document.querySelectorAll(BurgerLine);
  if (burgerLine) {
    burgerLine[0].classList.toggle('toggle0');
    burgerLine[1].classList.toggle('toggle1');
    burgerLine[2].classList.toggle('toggle2');
  }

  links.classList.toggle('nav-active');

  styledLink.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.35}s`;
    }
  });
};

const Navigation = () => {
  return (
    <NavWrapper>
      <Logo />
      <Links>
        <StyledLink>
          Strona Główna
          <Line />
        </StyledLink>
        <StyledLink>
          Usługi
          <Line />
        </StyledLink>
        <StyledLink>
          Kontakt
          <Line />
        </StyledLink>
      </Links>
      <Burger onClick={navSlide}>
        <BurgerLine />
        <BurgerLine />
        <BurgerLine />
      </Burger>
    </NavWrapper>
  );
};

export default Navigation;
