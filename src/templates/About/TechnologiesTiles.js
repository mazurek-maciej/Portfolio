import React from 'react';
import styled, {keyframes} from 'styled-components';
import posed from 'react-pose';
import {media} from '../../utils/media';

import jsIcon from '../../images/js.svg';
import reactIcon from '../../images/react.svg';
import gatsbyIcon from '../../images/gatsby.svg';
import styledIcon from '../../images/styled-components.png';

// Animations
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
const IconWraperAnimation = keyframes`
    0%{background-position:93% 0%}
    50%{background-position:0% 100%}
    100%{background-position:93% 0%}
`;

// SC
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

const TechnologiesTiles = ({handleSetState, js, react, gatsby, sc}) => (
  <Container>
    <TechWraper>
      <IconWraper
        onMouseEnter={() => handleSetState('js')}
        onMouseLeave={() => handleSetState('js')}
      >
        <ImgContainer js pose={js ? 'visible' : 'hidden'} />
        <IconText pose={js ? 'visible' : 'hidden'}>Javascript</IconText>
      </IconWraper>

      <IconWraper
        onMouseEnter={() => handleSetState('react')}
        onMouseLeave={() => handleSetState('react')}
      >
        <ImgContainer react pose={react ? 'visible' : 'hidden'} />
        <IconText pose={react ? 'visible' : 'hidden'}>React</IconText>
      </IconWraper>

      <IconWraper
        onMouseEnter={() => handleSetState('gatsby')}
        onMouseLeave={() => handleSetState('gatsby')}
      >
        <ImgContainer gatsby pose={gatsby ? 'visible' : 'hidden'} />
        <IconText pose={gatsby ? 'visible' : 'hidden'}>Gatsby</IconText>
      </IconWraper>

      <IconWraper
        onMouseEnter={() => handleSetState('sc')}
        onMouseLeave={() => handleSetState('sc')}
      >
        <ImgContainer styledIc pose={sc ? 'visible' : 'hidden'} />
        <IconText pose={sc ? 'visible' : 'hidden'}>Styled-components</IconText>
      </IconWraper>
    </TechWraper>
  </Container>
);

export default TechnologiesTiles;
