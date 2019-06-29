import React, { Component } from 'react';
import styled from 'styled-components';
import AboutMe from './AboutMe';
import { media } from '../../utils/media';

const AboutWraper = styled.section`
  display: flex;
  align-items: center;
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
      </AboutWraper>
    );
  }
}
export default About;
