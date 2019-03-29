import React, { Component } from 'react';
import styled from 'styled-components';
import TechnologiesTiles from './TechnologiesTiles';

import Subheading from '../../components/Subheading';
import P from '../../components/P';
import { media } from '../../utils/media';

const AboutWraper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  ${media.phone`
    height: 100%;
  `}
`;
const TextWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 8px;
`;

class About extends Component {
  render() {
    const { edges } = this.props.allContent;
    console.log(edges);
    return (
      <AboutWraper name="about">
        <TextWraper>
          <React.Fragment>
            <Subheading about underline>
              About
            </Subheading>
            <div>
              My name is Maciej Mazurek and since July 2018 I have started my
              journey to become front-end developer.
              <br /> Systematic work, pursuing to achive goal and willing to
              learn new technologies are my main assets.
              <br /> Currently I'm in love with the React, so most of my time is
              dedicated to this framework.
            </div>
          </React.Fragment>
        </TextWraper>
        <TextWraper>
          <React.Fragment>
            <Subheading about underline>
              Technologies
            </Subheading>
            <div>
              Below are technologies that I'm currently mostly delve into.
              <br /> In the next stage of my learning journey I want to get
              better knowledge in: Node.js, Webpack, Express, MongoDB, Jest and
              many more that will appear.
              <br /> In the meantime I'm also learning how to create beautiful
              UI designs. For mockups and graphics I'm using Sketch.
            </div>
          </React.Fragment>
        </TextWraper>
        <TechnologiesTiles />
      </AboutWraper>
    );
  }
}
export default About;
