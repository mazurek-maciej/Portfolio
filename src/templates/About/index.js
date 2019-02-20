import React, {Component} from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import {graphql} from 'gatsby';
import Img from 'gatsby-image';
import TechnologiesTiles from './TechnologiesTiles';

import Subheading from '../../components/Subheading';
import P from '../../components/P';
import {media} from '../../utils/media';

const PosedText = posed.span({
  visible: {
    opacity: 1,
    scale: 1,
  },
  hidden: {
    opacity: 0,
    scale: 0.1,
  },
});
const AboutWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  max-width: 1120px;
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
  state = {
    js: false,
    react: false,
    gatsby: false,
    sc: false,
  };
  handleSetState = e => this.setState(prevState => ({[e]: !prevState[e]}));

  render() {
    const {js, react, gatsby, sc} = this.state;
    return (
      <AboutWraper name="about">
        <TextWraper>
          <Subheading about underline>
            O mnie
          </Subheading>
          <P>
            Nazywam się Maciej Mazurek i od lipca 2018 roku postanowiłem zostać
            front-end developerem.
          </P>
          <P>
            Systematyczna praca, dążenie do celu oraz chcęc do nauki są moimi
            silnymi atutami.
          </P>
          <P paddingBtm>
            Obecnie najwięcej czasu poświęcam React-owi, którego nauka sprawia
            mi dotychczas najwięcej frajdy oraz budzi chęc odkrywania coraz to
            nowszych kwesti z nim i nie tylko związanych.
          </P>
          <Subheading technologies underline>
            Technologie
          </Subheading>
          <P>Poniżej znajdują się technologie, które obecnie zagłębiam.</P>
          <P>
            W późniejszym etapie rozwoju chce również poznać i nauczyć się
            więcej m.in. o: Node.js, Webpack, Express, MongoDB, Jest oraz wiele
            innych.
          </P>
          <P paddingBtm>
            Również kwestia projektowania UI/UX jest czymś co chcę poznać
            lepiej. Obecnie makiety oraz grafiki tworzę w Sketch-u.
          </P>
        </TextWraper>
        <TechnologiesTiles
          handleSetState={this.handleSetState}
          js={js}
          sc={sc}
          react={react}
          gatsby={gatsby}
        />
      </AboutWraper>
    );
  }
}
export default About;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: {eq: "React-icon.svg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
