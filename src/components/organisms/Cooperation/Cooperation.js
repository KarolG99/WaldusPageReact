import React from 'react';
import { Content, HowToContact, TextBackground, Wrapper } from './Cooperation.styles';
import { ReactComponent as ContactUs } from 'icons/unDrawIcons/contact-us.svg';
import { ReactComponent as Analytics } from 'icons/unDrawIcons/analytics.svg';
import { ReactComponent as Agreement } from 'icons/unDrawIcons/agreement.svg';
import { ReactComponent as WellDone } from 'icons/unDrawIcons/well-done.svg';
import { ReactComponent as ArrowDown } from 'icons/arrow-down.svg';

const Cooperation = () => {
  const style = { overflow: 'visible' };
  return (
    <Wrapper id="cooperation">
      <h1>Jak wyglada współpraca?</h1>

      <Content>
        <p>
          <TextBackground>Kontakt z nami</TextBackground>
        </p>
        <ContactUs />
      </Content>

      <br />
      <ArrowDown />
      <br />

      <Content>
        <p>
          <TextBackground>Wizyta i wycena</TextBackground>
        </p>
        <Analytics />
      </Content>

      <br />
      <ArrowDown />
      <br />

      <Content>
        <p>
          <TextBackground>Podpisanie umowy</TextBackground>
        </p>
        <Agreement style={style} />
      </Content>

      <br />
      <ArrowDown />
      <br />

      <Content>
        <p>
          <TextBackground>Nasze wykonanie</TextBackground>
          <br />
          <br />
          <TextBackground>Twoje zadowolenie</TextBackground>
        </p>
        <WellDone />
      </Content>

      <HowToContact>Zobacz jak się z nami skontaktować</HowToContact>
      <ArrowDown className="animate-arrow" />
    </Wrapper>
  );
};

export default Cooperation;
