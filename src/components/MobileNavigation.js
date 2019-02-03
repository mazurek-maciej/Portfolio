import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import {Link} from 'react-scroll';
import {media} from '../utils/media';

const PosedNav = posed.div({
  visible: {
    right: 0,
  },
  hidden: {
    right: -100,
  },
});

const Wraper = styled(PosedNav)`
  position: absolute;
  z-index: 1;
  right: 0;
  height: 100vh;
  display: ${props => (props.active ? 'flex' : 'none')};
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.$primary};
  box-shadow: -6px 5px 15px 0 hsla(0, 0%, 0%, 0.2);
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
`;

const MobileNavigation = ({active, handleClick}) => (
  <React.Fragment>
    <Wraper active={active} pose={active ? 'visible' : 'hidden'}>
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
    </Wraper>
    <BackgroundBlur active={active} onClick={handleClick} />
  </React.Fragment>
);
export default MobileNavigation;
