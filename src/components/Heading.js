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
  margin: 0;
  ${media.tablet`
    font-size: 36px;
  `}
  ${media.phone`
    font-size: 32px;
    margin-left: 0;
  `};
  }
`;
export default Heading;
