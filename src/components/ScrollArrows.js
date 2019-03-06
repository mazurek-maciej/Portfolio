import React from 'react';
import styled, {keyframes} from 'styled-components';
import posed from 'react-pose';

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
const ScrollArrows = () => {
  return (
    <>
      <Scroll time="0s" />
      <Scroll time="0.1s" />
      <Scroll time="0.2s" />
    </>
  );
};

export default ScrollArrows;
