import React from 'react';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
import { Link } from 'react-scroll';
import { Menu } from 'styled-icons/feather';
import { media } from '../../utils/media';
import maciekLogo from '../../images/maciek_logo.svg';

const LeftAndRightWraper = styled.div`
  display: flex;
  width: 100vw;
`;

const LeftWraper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const PosedRightWraper = posed.div({
  open: {
    opacity: 1,
    staggerChildren: 300,
  },
  closed: {
    opacity: 0,
  },
});

const RightWraper = styled(PosedRightWraper)`
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

const PosedLink = posed.li({
  open: { x: 0, opacity: 1 },
  closed: { x: -20, opacity: 0 },
});

const MenuLink = styled(PosedLink)`
  color: ${props =>
    props.position > 50
      ? ({ theme }) => theme.colors.$f
      : ({ theme }) => theme.colors.$h};
  z-index: 10;
  margin-left: 16px;
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
  ${media.tablet`
    display: none;
  `}
  ${media.phone`
    display: none;
  `}
  :hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.$testPrimary};
  }
`;

const MenuButton = styled.a`
  display: none;
  ${media.tablet`
  display: block;
  `}
  ${media.phone`
  display: block;
  `}
`;

const PosedMenuIcon = posed(Menu)({
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
});
const MenuIcon = styled(PosedMenuIcon)`
  display: ${props => (props.active ? 'none' : 'block')};
  color: ${({ theme }) => theme.colors.$f};
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

const HeaderMenu = ({ onClick, active, position }) => (
  <LeftAndRightWraper>
    <LeftWraper>
      <MLogo src={maciekLogo} />
    </LeftWraper>
    <RightWraper initialPose="closed" pose="open">
      <PoseGroup>
        <MenuLink position={position} key="1" initialPose="closed" pose="open">
          <Link to="main" spy smooth duration={500}>
            Home
          </Link>
        </MenuLink>
        <MenuLink position={position} key="2" initialPose="closed" pose="open">
          <Link to="about" spy smooth duration={500}>
            About
          </Link>
        </MenuLink>
        <MenuLink position={position} key="3" initialPose="closed" pose="open">
          <Link to="projects" spy smooth duration={500}>
            Projects
          </Link>
        </MenuLink>
        <MenuLink position={position} key="4" initialPose="closed" pose="open">
          <Link to="footer" spy smooth duration={500}>
            Contact
          </Link>
        </MenuLink>
      </PoseGroup>
      <MenuButton onClick={onClick}>
        <MenuIcon active={active} pose={active ? 'hidden' : 'visible'} />
      </MenuButton>
    </RightWraper>
  </LeftAndRightWraper>
);

export default HeaderMenu;
