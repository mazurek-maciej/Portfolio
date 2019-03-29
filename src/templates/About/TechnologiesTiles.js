import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import posed from 'react-pose';
import { media } from '../../utils/media';

import jsIcon from '../../images/js.svg';
import reactIcon from '../../images/react.svg';
import gatsbyIcon from '../../images/gatsby.svg';
import styledIcon from '../../images/styled-components.png';

const ImageWrapperAnimation = keyframes`
    0%{background-position:93% 0%}
    50%{background-position:0% 100%}
    100%{background-position:93% 0%}
`;

const FlexWrapper = styled.div`
  flex: 2;
  width: 100%;
`;
const TechWraper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
  ${media.tablet`
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  `}
`;
const ImgContainer = styled.img`
  align-self: center;
  justi-self: center;
  padding: 1rem;
  height: 200px;
  width: 160px;
  ${media.tablet`
    width: 100px;
    height: 140px;
  `}
`;

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin: 8px;
  border-radius: 8px;
  animation: ${ImageWrapperAnimation} 30s ease infinite;
  background: linear-gradient(38deg, #19242e, #25495e);
  background-size: 400% 400%;
  box-shadow: 0 4px 15px hsla(0, 0%, 0%, 0.5);
`;

const TechnologiesTiles = () => (
  <FlexWrapper>
    <TechWraper>
      <ImageWrapper>
        <ImgContainer src={jsIcon} />
      </ImageWrapper>

      <ImageWrapper>
        <ImgContainer src={reactIcon} />
      </ImageWrapper>

      <ImageWrapper>
        <ImgContainer src={gatsbyIcon} />
      </ImageWrapper>

      <ImageWrapper>
        <ImgContainer src={styledIcon} />
      </ImageWrapper>
    </TechWraper>
  </FlexWrapper>
);

export default TechnologiesTiles;
