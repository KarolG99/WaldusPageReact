import React from 'react';
import { Wrapper, Line, ContactDetails, Creator } from './Footer.styles';

const Footer = () => {
  return (
    <Wrapper>
      <h4>
        Szybki Kontakt
        <Line />
      </h4>
      <ContactDetails>
        <a href="tel:123456789"> Tel: (+48) 123 456 789</a>
        <p>Jastrzębia (adres)</p>
        <p>33-191</p>
        <p>woj. małopolskie</p>
        <p>Pn. - Pt. 7:00 - 18:00</p>
        <address>adres@adres.com</address>
      </ContactDetails>
      <Creator>
        adres.pl 2021 &copy; Karol Gucwa - <address>karolgucwav2@gmail.com </address>
      </Creator>
    </Wrapper>
  );
};

export default Footer;
