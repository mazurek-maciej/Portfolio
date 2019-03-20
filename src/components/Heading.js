import styled, { keyframes, css } from 'styled-components';
import { media } from '../utils/media';

const HeadingAnim = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const AfterAndBefore = css`
  animation: ${HeadingAnim} 1s linear infinite alternate;
  font-family: Fire Code;
  top: 0;
  position: absolute;
  color: ${({ theme }) => theme.colors.$testPrimary};
`;

const Heading = styled.h1`
  font-size: 48px;
  font-weight: ${({ theme }) => theme.font.superbold};
  position: relative;
  text-align: center;
  ${media.tablet`
    font-size: 36px;
  `}
  ${media.phone`
    font-size: 24px;
    margin-left: 0;
    margin-bottom: 1rem;
  `};
  ::before {
    ${AfterAndBefore};
    left: -40px;
    content: '<';
    ${media.phone`
      left: -20px;
    `};
  }
  ::after {
    ${AfterAndBefore};
    content: '/>';
    right: -60px;
    ${media.phone`
        right: -35px;
    `};
  }
`;
export default Heading;
