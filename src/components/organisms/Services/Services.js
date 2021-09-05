import React from 'react';
import { Article, ServicesHeader } from './Services.styles';
import Paving from 'components/molecules/Paving/Paving';
import Renovation from 'components/molecules/Renovation/Renovation';
import Fences from 'components/molecules/Fences/Fences';
import Excavator from 'components/molecules/Excavator/Excavator';

const Services = () => {
  return (
    <Article>
      <ServicesHeader id="services"> Usługi </ServicesHeader>
      <Paving />
      <Renovation />
      <Fences />
      <Excavator />
    </Article>
  );
};

export default Services;
