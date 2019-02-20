import styled, {keyframes} from 'styled-components';
import {media} from '../utils/media';

const HeadingAnim = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Heading = styled.h1`
  font-size: 48px;
  position: relative;
  text-align: center;
  ${media.phone`
    font-weight: ${({theme}) => theme.font.superbold};
    font-size: 1.8rem;
    margin-bottom: 1rem;
  `};
  ::before {
    animation: ${HeadingAnim} 2s linear infinite alternate;
    font-family: Fire Code;
    left: -40px;
    top: 0;
    content: '<';
    position: absolute;
    color: ${({theme}) => theme.colors.$testPrimary};
    ${media.phone`
      left: -20px;
    `};
  }
  ::after {
    animation: ${HeadingAnim} 2s linear infinite alternate;
    font-family: Fire Code;
    content: '/>';
    right: -60px;
    top: 0;
    position: absolute;
    color: ${({theme}) => theme.colors.$testPrimary};
    ${media.phone`
        right: -35px;
    `};
  }
`;
export default Heading;
