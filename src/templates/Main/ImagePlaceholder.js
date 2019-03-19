import React from 'react'
import PropTypes from 'prop-types';
import styled, {keyframes} from 'styled-components'
import { media } from '../../utils/media';

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
const ImagePlaceholder = ({image}) => {
  return (
    <Bg>
      <Image src={image} alt="lpt" />
    </Bg>
  )
}


export default ImagePlaceholder