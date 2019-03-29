import React, { Component } from 'react';
import styled from 'styled-components';
import TechnologiesTiles from './TechnologiesTiles';
import AboutMe from './AboutMe';
import Technolgies from './Technologies';

import { media } from '../../utils/media';

const AboutWraper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  ${media.phone`
    height: 100%;
  `}
`;

class About extends Component {
  render() {
    return (
      <AboutWraper name="about">
        <AboutMe />
        <Technolgies />
        <TechnologiesTiles />
      </AboutWraper>
    );
  }
}
export default About;
