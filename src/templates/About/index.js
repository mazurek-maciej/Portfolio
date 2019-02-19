import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import posed from 'react-pose';
import {graphql} from 'gatsby';
import Img from 'gatsby-image';

import Subheading from '../../components/Subheading';
import TopNotch from '../../components/TopNotch';
import P from '../../components/P';
import {media} from '../../utils/media';

import jsIcon from '../../images/js.svg';
import reactIcon from '../../images/react.svg';
import gatsbyIcon from '../../images/gatsby.svg';
import styledIcon from '../../images/styled-components.png';

const PosedText = posed.p({
  visible: {
    opacity: 1,
    scale: 1,
  },
  hidden: {
    opacity: 0,
    scale: 0.1,
  },
});
const PosedIcon = posed.div({
  visible: {
    opacity: 0.1,
  },
  hidden: {
    opacity: 1,
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
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  ${media.tablet`
    display: flex;
    justify-content: center;
  `};
  ${media.phone`
    display: flex;
    justify-content: center;
  `}
`;
const TextWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 8px;
`;
const TechWraper = styled.div`
  position: relative;
  height: 260px;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 240px);
  padding-bottom: 2rem;
  ${media.tablet`
    margin-top: 1rem;
    height: 250px;
    padding-bottom: 0;
  `};
  ${media.phone`
    grid-template-columns: repeat(2, 180px);
    grid-template-rows: repeat(2, 120px);
    margin-top: 1rem;
    height: 250px;
    padding-bottom: 0;
  `};
`;
const Text = styled(PosedText)`
  position: absolute;
  align-self: center;
  text-align: center;
  font-size: 24px;
  margin: 0;
  color: ${({theme}) => theme.colors.$white};
`;

const ImgContainer = styled(PosedIcon)`
  position: relative;
  align-self: stretch;
  margin: 32px;
  flex: 1;
  background-image: url(${props =>
    props.js
      ? `${jsIcon}`
      : props.react
      ? `${reactIcon}`
      : props.gatsby
      ? `${gatsbyIcon}`
      : props.styledIc
      ? `${styledIcon}`
      : null});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  ${media.phone` margin: 8px`}
`;
const IconWraperAnimation = keyframes`
    0%{background-position:93% 0%}
    50%{background-position:0% 100%}
    100%{background-position:93% 0%}
`;
const IconWraper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 8px;
  border-radius: 8px;
  animation: ${IconWraperAnimation} 30s ease infinite;
  background: linear-gradient(38deg, #19242e, #25495e);
  background-size: 400% 400%;
  box-shadow: 0 4px 15px hsla(0, 0%, 0%, 0.5);
`;
const IconText = styled.span`
  align-self: stretch;
  margin: 8px;
  font-size: 1.1rem;
  color: ${({theme}) => theme.colors.$f};
  text-align: center;
`;

class About extends Component {
  state = {
    js: false,
    react: false,
    gatsby: false,
    sc: false,
  };

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
        <Container>
          <TechWraper>
            <IconWraper>
              <ImgContainer js />
              <IconText>Javascript</IconText>
            </IconWraper>

            <IconWraper>
              <ImgContainer react />
              <IconText>React</IconText>
            </IconWraper>

            <IconWraper>
              <ImgContainer gatsby />
              <IconText>Gatsby</IconText>
            </IconWraper>

            <IconWraper>
              <ImgContainer styledIc />
              <IconText>styled-components</IconText>
            </IconWraper>
          </TechWraper>
        </Container>
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
