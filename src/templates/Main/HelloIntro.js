import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { Link } from 'react-scroll';
import Heading from '../../components/Heading';
import { media } from '../../utils/media';

const PosedIntroButton = posed.button({
  hoverable: true,
  focusable: true,
  init: { backgroundColor: '#376D8C' },
  hover: { backgroundColor: '#2a76a3' },
  focus: { backgroundColor: '#2a76a3' },
});

const IntroWraper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${media.phone`
    margin: 0 8px;
  `}
`;
const HeadingWraper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 25%;
  ${media.tablet`
    justify-content: center;
    padding-bottom: 50%;
  `}
`;
const HeadingSmall = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.$p};
`;
const IntroButton = styled(PosedIntroButton)`
  font-size: 22px;
  padding: 8px 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.$testPrimary};
  color: ${({ theme }) => theme.colors.$f};
  border: transparent;
  position: relative;
  cursor: pointer;
  &::before {
    position: absolute;
    z-index: -1;
    border-radius: 8px;
    border: transparent;
    content: '';
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.colors.$h};
    left: -4px;
    top: 4px;
  }
`;

const HelloIntro = () => (
  <>
    <IntroWraper>
      <HeadingWraper>
        <Heading>Hello everyone!</Heading>
        <HeadingSmall>Below you can find information about me</HeadingSmall>
        <div>
          <IntroButton pose="init">
            <Link to="about" spy smooth duration={500}>
              Find out more!
            </Link>
          </IntroButton>
        </div>
      </HeadingWraper>
    </IntroWraper>
  </>
);
export default HelloIntro;
