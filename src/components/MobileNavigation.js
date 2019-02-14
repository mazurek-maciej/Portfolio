import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import {Link} from 'react-scroll';
import {media} from '../utils/media';

const PosedNav = posed.nav({
  visible: {
    x: '0%',
    transition: {
      x: {ease: 'easeOut', duration: 300},
    },
  },
  hidden: {
    x: '150%',
    transition: {
      x: {ease: 'easeIn', duration: 200},
    },
  },
});
const PosedBg = posed.div({
  visible: {
    x: '0%',
    opacity: 0.6,
    transition: {
      x: {ease: 'easeOut', duration: 200},
      opacity: {ease: 'linear', duration: 180},
    },
  },
  hidden: {
    x: '150%',
    opacity: 0,
    transition: {
      x: {ease: 'easeIn', duration: 200},
    },
  },
});

const MobileNavWraper = styled(PosedNav)`
  position: fixed;
  right: 0;
  transform: translateX(100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  height: 100vh;
  background-color: ${({theme}) => theme.colors.$primary};
`;
const BackgroundBlur = styled(PosedBg)`
  position: fixed;
  display: block;
  right: 0;
  transform: translateX(100%);
  z-index: 1;
  width: 100%;
  height: 100vh;
  content: '';
  background-color: black;
`;
const MenuLink = styled(Link)`
  color: ${({theme}) => theme.colors.$f};
  padding: 24px;
  :active {
    background-color: ${({theme}) => theme.colors.$testPrimary};
  }
`;

const MobileNavigation = ({active, handleClick}) => (
  <>
    <MobileNavWraper active={active} pose={active ? 'visible' : 'hidden'}>
      <MenuLink to="main" spy={true} smooth={true} duration={500}>
        Home
      </MenuLink>
      <MenuLink to="about" spy={true} smooth={true} duration={500}>
        About
      </MenuLink>
      <MenuLink to="projects" spy={true} smooth={true} duration={500}>
        Projects
      </MenuLink>
      <MenuLink to="footer" spy={true} smooth={true} duration={500}>
        Contact
      </MenuLink>
    </MobileNavWraper>
    <BackgroundBlur
      active={active}
      onClick={handleClick}
      pose={active ? 'visible' : 'hidden'}
    />
  </>
);
export default MobileNavigation;
