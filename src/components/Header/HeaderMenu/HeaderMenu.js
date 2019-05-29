import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import posed, { PoseGroup } from 'react-pose';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Menu } from 'styled-icons/feather';
import { media } from '../../../utils/media';

const PosedLink = posed.li({
  open: { x: 0, opacity: 1 },
  closed: { x: -20, opacity: 0 },
});

const PosedMenuLinksWrapper = posed.div({
  open: {
    opacity: 1,
    staggerChildren: 300,
  },
  closed: {
    opacity: 0,
  },
});

const MenuLinksWrapper = styled(PosedMenuLinksWrapper)`
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

const MenuLink = styled(PosedLink)`
  color: ${props =>
    props.position > 50
      ? ({ theme }) => theme.colors.$f
      : ({ theme }) => theme.colors.$h};
  margin-left: 16px;
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
  ${media.tablet`
    display: none;
  `}
  :hover {
    border-bottom: ${props =>
      props.position > 50 ? `2px solid #EDE8E8` : `2px solid #376D8C`};
  }
`;

const MenuButton = styled.a`
  display: none;
  ${media.tablet`
  display: block;
  `}
`;

const MenuIcon = styled(Menu)`
  display: ${props => (props.active ? 'none' : 'block')};
  color: ${props =>
    props.position > 50
      ? ({ theme }) => theme.colors.$f
      : ({ theme }) => theme.colors.$bgGray};
  width: 32px;
  margin-right: 16px;
  &:active {
    color: hsl(203, 80%, 70%);
  }
`;

const HeaderMenu = ({ position, activeMN, onClick }) => {
  const [visible, setVisible] = useState(0);

  function renderVisible() {
    setVisible(1);
  }

  useEffect(() => {
    setTimeout(() => {
      renderVisible();
    }, 200);
  });

  return (
    <MenuLinksWrapper initialPose="closed" pose={visible ? 'open' : 'closed'}>
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
        <MenuIcon
          position={position}
          active={activeMN}
          pose={activeMN ? 'hidden' : 'visible'}
        />
      </MenuButton>
    </MenuLinksWrapper>
  );
};

HeaderMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
  activeMN: PropTypes.bool.isRequired,
  position: PropTypes.number.isRequired,
};

export default HeaderMenu;
