import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import {Link} from 'react-scroll';
import {media} from '../utils/media';

const PosedNav = posed.div({
  visible: {
    x: '0%',
    transition: {
      x: {ease: 'easeOut', duration: 300},
    },
  },
  hidden: {
    x: '100%',
    transition: {
      x: {ease: 'easeIn', duration: 200},
    },
  },
});

const MobileNavWraper = styled(PosedNav)`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 100vh;
  background-color: ${({theme}) => theme.colors.$primary};
`;
const BackgroundBlur = styled.div`
  width: 100vw;
  height: 100vh;
  content: '';
  display: ${props => (props.active ? 'block' : 'none')};
  background-color: black;
  opacity: 0.4;
`;
const MenuLink = styled(Link)`
  color: ${({theme}) => theme.colors.$f};
  padding: 24px;
  :active {
    background-color: ${({theme}) => theme.colors.$testPrimary};
  }
`;

const MobileNavigation = ({active, handleClick}) => (
  <React.Fragment>
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
    <BackgroundBlur active={active} onClick={handleClick} />
  </React.Fragment>
);
export default MobileNavigation;
