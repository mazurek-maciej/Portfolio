import React from 'react';
import posed from 'react-pose';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { media } from '../../../utils/media';

const PosedIntroButton = posed.button({
  hoverable: true,
  focusable: true,
  init: { backgroundColor: '#376D8C' },
  hover: { backgroundColor: '#2a76a3' },
  focus: { backgroundColor: '#2a76a3' },
});

const IntroButton = styled(PosedIntroButton)`
  font-size: 22px;
  padding: 8px 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.$primary};
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
  ${media.tablet`
    font-size: 18px;
  `}
`;

const HeroButton = () => (
  <div>
    <IntroButton pose="init">
      <Link to="about" offset={-60} spy smooth duration={500}>
        Find out!
      </Link>
    </IntroButton>
  </div>
);

export default HeroButton;
