import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-scroll';
import {Menu} from 'styled-icons/feather/Menu';
import {media} from '../../utils/media';
import maciekLogo from '../../images/maciek_logo.svg';

const StyledHeader = styled.nav`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 56px;
  background-color: ${({theme}) => theme.colors.$primary};
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
`;
const CenterWraper = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
`;
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
  margin-left: 16px;
  ${media.phone`
    display: none;
  `}
`;
const MenuButton = styled.a`
  display: none;
  ${media.phone`
  display: block;
  `}
`;
const MenuIcon = styled(Menu)`
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

const Header = () => {
  return (
    <StyledHeader>
      <CenterWraper>
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
            <MenuButton>
              <MenuIcon />
            </MenuButton>
          </RightWraper>
        </LeftAndRightWraper>
      </CenterWraper>
    </StyledHeader>
  );
};

export default Header;
