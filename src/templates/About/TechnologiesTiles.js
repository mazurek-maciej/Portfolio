import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import posed from 'react-pose';
import { media } from '../../utils/media';

import jsIcon from '../../images/js.svg';
import reactIcon from '../../images/react.svg';
import gatsbyIcon from '../../images/gatsby.svg';
import styledIcon from '../../images/styled-components.png';

const IconWraperAnimation = keyframes`
    0%{background-position:93% 0%}
    50%{background-position:0% 100%}
    100%{background-position:93% 0%}
`;

const TechWraper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
`;
const ImgContainer = styled.img`
  padding: 1rem;
  height: 200px;
  width: 160px;
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

const TechnologiesTiles = () => (
  <TechWraper>
    <IconWraper>
      <ImgContainer src={jsIcon} />
    </IconWraper>

    <IconWraper>
      <ImgContainer src={reactIcon} />
    </IconWraper>

    <IconWraper>
      <ImgContainer src={gatsbyIcon} />
    </IconWraper>

    <IconWraper>
      <ImgContainer src={styledIcon} />
    </IconWraper>
  </TechWraper>
);

export default TechnologiesTiles;
