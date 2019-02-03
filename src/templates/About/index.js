import React, {Component} from 'react';
import styled from 'styled-components';
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
  height: 80vh;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  ${media.phone`
    height: 100vh;
  `}
`;
const Container = styled.div`
  margin: 0 auto;
  max-width: 500px;
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
  max-width: 500px;
  height: 420px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #19242e;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%2375c1f0' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  box-shadow: 0 4px 25px hsla(203, 0%, 20%, 0.5);
  padding: 32px;
  border-radius: 2.1rem;
  margin-top: 2rem;
  ${media.tablet`
    margin-top: 1rem;
    height: 250px;
    padding-top: 32px;
    padding-bottom: 0;
    max-width: 260px;
  `};
  ${media.phone`
    margin-top: 1rem;
    height: 250px;
    padding-top: 32px;
    padding-bottom: 0;
    max-width: 260px;
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
const TopContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const BottomContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const ImgContainer = styled(PosedIcon)`
  position: relative;
  flex: 1;
  margin: 32px;
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
  ${media.phone` margin: 16px`}
`;
const IconWraper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

class About extends Component {
  state = {
    js: false,
    react: false,
    gatsby: false,
    sc: false,
  };

  onHoverChangeState = e => this.setState({[e]: true});
  onLeaveChangeState = e => this.setState({[e]: false});

  render() {
    const {js, react, gatsby, sc} = this.state;
    return (
      <AboutWraper name="about">
        <TextWraper>
          <Subheading about underline>
            Few words about me
          </Subheading>
          <P>
            Since July 2018 I decide to change my point of interest from Swift
            lang to become front-end developer.
          </P>
          <P>
            Minimalists aproach to design websites is what I prefere, but I'am
            trying to fit to the clients needs.
          </P>
          <P>
            Now I’am mostly focused on learning React and improving JavaScript.
            Motivation to work and full commitment they are my driving force in
            developing
          </P>
          <Subheading technologies underline>
            Technologies
          </Subheading>
          <P>Prime technologies that I'am mostly focused on</P>
        </TextWraper>
        <Container>
          <TechWraper>
            <TopNotch />
            <TopContainer>
              <IconWraper
                onMouseEnter={() => this.onHoverChangeState('js')}
                onMouseLeave={() => this.onLeaveChangeState('js')}
              >
                <ImgContainer js pose={js ? 'visible' : 'hidden'} />
                <Text pose={js ? 'visible' : 'hidden'}>JavaScript</Text>
              </IconWraper>

              <IconWraper
                onMouseEnter={() => this.onHoverChangeState('react')}
                onMouseLeave={() => this.onLeaveChangeState('react')}
              >
                <ImgContainer react pose={react ? 'visible' : 'hidden'} />
                <Text pose={react ? 'visible' : 'hidden'}>React</Text>
              </IconWraper>
            </TopContainer>
            <BottomContainer>
              <IconWraper
                onMouseEnter={() => this.onHoverChangeState('gatsby')}
                onMouseLeave={() => this.onLeaveChangeState('gatsby')}
              >
                <ImgContainer gatsby pose={gatsby ? 'visible' : 'hidden'} />
                <Text pose={gatsby ? 'visible' : 'hidden'}>Gatsby </Text>
              </IconWraper>

              <IconWraper
                onMouseEnter={() => this.onHoverChangeState('sc')}
                onMouseLeave={() => this.onLeaveChangeState('sc')}
              >
                <ImgContainer styledIc pose={sc ? 'visible' : 'hidden'} />
                <Text pose={sc ? 'visible' : 'hidden'}>styled-components</Text>
              </IconWraper>
            </BottomContainer>
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
