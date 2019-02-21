import React from 'react';
import styled, {keyframes} from 'styled-components';
import Img from 'gatsby-image';

import Heading from '../../components/Heading';
import {media} from '../../utils/media';

const MainWraper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100vh;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  ${media.phone`
  `}
`;
const IntroWraper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${media.phone`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0 8px;
  `}
`;
const HeadingWraper = styled.div`
  display: flex;
  ${media.phone`
    justify-content: center;
  `}
`;
const Bg = styled.div`
  position: absolute;
  align-self: flex-end;
  z-index: -1;
  width: 800px;
  height: 800px;
  top: 20%;
  ${media.tablet`
    width: 560px;
    height: 560px;
    top: 40%;
  `};
  ${media.phone`
    width: 100%;
    height: 380px;
    background-position: center;
    top: 38%;
  `}
`;
const RegulationDiv = styled.div`
  flex: 1;
`;
const Image = styled(Img)`
  width: 800px;
  height: 800px;

  ${media.tablet`
    width: 560px;
    height: 560px;
  `};
  ${media.phone`
    width: 100%;
    height: 380px;
  `}
`;
const scrollAnimation = keyframes`
  0% {
    transform: translateY(-30px);
    opacity: 1
  }
  50% {
    transform: translateY(-15px);
    opacity: 0.5;
  }
  100% {
    transform: translateY(0);
    opacity: 0.1;
  }
`;
const Scroll = styled.div`
  animation: ${scrollAnimation} 1.1s linear infinite;
  animation-delay: ${props => props.time};
  align-self: center;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid ${({theme}) => theme.colors.$testPrimary};
`;

class Main extends React.Component {
  render() {
    return (
      <MainWraper name="main">
        <IntroWraper>
          <HeadingWraper>
            <Heading>Witam wszystkich!</Heading>
          </HeadingWraper>
        </IntroWraper>
        <RegulationDiv />
        <Bg>
          <Image fluid={this.props.laptopImage.fluid} />
        </Bg>
        <Scroll time="0s" />
        <Scroll time="0.1s" />
        <Scroll time="0.2s" />
      </MainWraper>
    );
  }
}
export default Main;
