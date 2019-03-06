import React from 'react';
import styled, {keyframes} from 'styled-components';
import poser from 'react-pose';

import Heading from '../../components/Heading';
import {media} from '../../utils/media';
import Lpt from '../../images/Laptopv3.svg';

const EntryAnimation = poser.div({
  open: {
    opacity: 1,
    y: 0,
    delay: 300,
  },
  closed: {
    opacity: 0,
    y: 200,
  },
});
const MainWraper = styled(EntryAnimation)`
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
    justify-content: center;
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
const FloatingLpt = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  };
  100% {
    transform: translate3d(0, 20px, 0);
  },
`;
const Image = styled.img`
  border-radius: 30%;
  width: 600px;
  height: 600px;
  ${media.tablet`
    width: 560px;
    height: 560px;
  `};
  ${media.phone`
    width: 100%;
    height: 380px;
  `}
`;

class Main extends React.Component {
  render() {
    return (
      <MainWraper initialPose="closed" pose="open" name="main">
        <IntroWraper>
          <HeadingWraper>
            <Heading>Hello everyone!</Heading>
          </HeadingWraper>
        </IntroWraper>
        <RegulationDiv />
        <Bg>
          <Image src={Lpt} alt="lpt" />
        </Bg>
      </MainWraper>
    );
  }
}
export default Main;
