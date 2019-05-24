import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { media } from '../../utils/media';

const Bg = styled.div`
  position: absolute;
  right: 0%;
  top: 25%;
  z-index: -1;
  ${media.tablet`
    display: none;
    top: 35%;
  `};
  ${media.phone`
    top: 35%;
  `}
`;
const FloatingLpt = keyframes`
  0% {
    transform: translate(0, 0);
  };
  100% {
    transform: translate(0, 30px);
  },
`;
const Image = styled.img`
  animation: ${FloatingLpt} 4s alternate ease-in-out infinite;
`;
const ImagePlaceholder = ({ image }) => (
  <Bg>
    <Image src={image} alt="lpt" />
  </Bg>
);

export default ImagePlaceholder;
