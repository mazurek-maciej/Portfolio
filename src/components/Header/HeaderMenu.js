import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import {Link} from 'react-scroll';
import {Menu} from 'styled-icons/feather';
import {media} from '../../utils/media';
import maciekLogo from '../../images/maciek_logo.svg';

const PosedMenuIcon = posed(Menu)({
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
});

const LeftAndRightWraper = styled.div`
  display: flex;
  width: 100vw;
`;
const LeftWraper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const RightWraper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${media.tablet`
    :last-child {
      margin-right: 16px;
    }
  `}
`;
const MenuLink = styled(Link)`
  color: ${({theme}) => theme.colors.$f};
  z-index: 10;
  margin-left: 16px;
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
  ${media.phone`
    display: none;
  `}
  :hover {
    border-bottom: 2px solid ${({theme}) => theme.colors.$f};
  }
`;
const MenuButton = styled.a`
  display: none;
  ${media.phone`
  display: block;
  `}
`;
const MenuIcon = styled(PosedMenuIcon)`
  display: ${props => (props.active ? 'none' : 'block')};
  color: ${({theme}) => theme.colors.$f};
  width: 32px;
  margin-right: 16px;
  :active {
    color: hsl(203, 80%, 70%);
  }
`;
const MLogo = styled.img`
  height: 36px;
  margin-left: 1rem;
`;

const HeaderMenu = ({onClick, active}) => (
  <LeftAndRightWraper>
    <LeftWraper>
      <MLogo src={maciekLogo} />
    </LeftWraper>
    <RightWraper>
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
      <MenuButton onClick={onClick}>
        <MenuIcon active={active} pose={active ? 'hidden' : 'visible'} />
      </MenuButton>
    </RightWraper>
  </LeftAndRightWraper>
);

export default HeaderMenu;
