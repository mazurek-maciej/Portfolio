import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { Link } from 'react-scroll';

const PosedMenuLink = posed.div({
  visible: {
    x: 0,
    opacity: 1,
  },
  hidden: {
    x: 20,
    opacity: 0,
  },
});
const MenuLink = styled(PosedMenuLink)`
  color: ${({ theme }) => theme.colors.$f};
  padding: 24px;
  :active {
    background-color: ${({ theme }) => theme.colors.$primary};
  }
`;

const MobileNavButton = props => (
  <MenuLink {...props} key={props.title}>
    <Link spy smooth duration={500} {...props}>
      {props.title}
    </Link>
  </MenuLink>
);
export default MobileNavButton;
