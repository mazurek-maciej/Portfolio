import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import {Link} from 'react-scroll';

import Heading from '../../components/Heading';
import Subheading from '../../components/Subheading';
import P from '../../components/P';
import {media} from '../../utils/media';

const MainWraper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
  height: calc(100vh - 56px);
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  ${media.phone`
  `}
`;
const Wraper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${media.phone`
    flex: 1;
    margin: 0 8px;
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

const Main = ({laptopImage}) => (
  <MainWraper name="main">
    <Wraper>
      <Heading>Hello everyone!</Heading>
      <Subheading>My name is Maciej Mazurek</Subheading>
      <Subheading>I'am a front-end developer</Subheading>
    </Wraper>
    <RegulationDiv />
    <Bg>
      <Image fluid={laptopImage.fluid} />
    </Bg>
  </MainWraper>
);
export default Main;
