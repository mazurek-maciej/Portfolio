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
  position: relative;
  justify-content: center;
  margin: 8px;
  border-radius: 8px;
  animation: ${IconWraperAnimation} 30s ease infinite;
  background: linear-gradient(38deg, #19242e, #25495e);
  background-size: 400% 400%;
  box-shadow: 0 4px 15px hsla(0, 0%, 0%, 0.5);
`;
const IconText = styled(PosedText)`
  position: absolute;
  align-self: center;
  flex: 1;
  font-size: 1.5rem;
  margin: 8px;
  opacity: 0;
  z-index: 2;
  color: ${({theme}) => theme.colors.$f};
  text-align: center;
  ${media.phone`
    font-size: 1rem;
  `}
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
        <Container>
          <TechWraper>
            <IconWraper
              onMouseEnter={() => this.handleSetState('js')}
              onMouseLeave={() => this.handleSetState('js')}
            >
              <ImgContainer js pose={js ? 'visible' : 'hidden'} />
              <IconText pose={js ? 'visible' : 'hidden'}>Javascript</IconText>
            </IconWraper>

            <IconWraper
              onMouseEnter={() => this.handleSetState('react')}
              onMouseLeave={() => this.handleSetState('react')}
            >
              <ImgContainer react pose={react ? 'visible' : 'hidden'} />
              <IconText pose={react ? 'visible' : 'hidden'}>React</IconText>
            </IconWraper>

            <IconWraper
              onMouseEnter={() => this.handleSetState('gatsby')}
              onMouseLeave={() => this.handleSetState('gatsby')}
            >
              <ImgContainer gatsby pose={gatsby ? 'visible' : 'hidden'} />
              <IconText pose={gatsby ? 'visible' : 'hidden'}>Gatsby</IconText>
            </IconWraper>

            <IconWraper
              onMouseEnter={() => this.handleSetState('sc')}
              onMouseLeave={() => this.handleSetState('sc')}
            >
              <ImgContainer styledIc pose={sc ? 'visible' : 'hidden'} />
              <IconText pose={sc ? 'visible' : 'hidden'}>
                Styled-components
              </IconText>
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
