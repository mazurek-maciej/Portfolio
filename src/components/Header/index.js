import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import MobileNavigation from '../MobileNavigation';
import {Link} from 'react-scroll';
import {Menu, X} from 'styled-icons/feather';
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
const PosedMenuIconCollapsed = posed(X)({
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
});

const HeaderWraper = styled.div`
  position: fixed;
  z-index: 1;
`;
const RelativeWraper = styled.div`
  position: relative;
`;
const StyledHeader = styled.nav`
  display: flex;
  z-index: 1;
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
const MenuIconCollapsed = styled(PosedMenuIconCollapsed)`
  display: ${props => (props.active ? 'block' : 'none')};
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

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: '',
    };
  }
  componentDidMount() {}
  handleClick = () => {
    if (this.state.active === 'active') {
      this.setState({active: ''});
    }
  };
  displayMobileNav = () => {
    this.setState({active: 'active'});
  };
  render() {
    const {active} = this.state;
    console.log(active);
    return (
      <>
        <HeaderWraper>
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
                    O mnie
                  </MenuLink>
                  <MenuLink
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Projekty
                  </MenuLink>
                  <MenuLink to="footer" spy={true} smooth={true} duration={500}>
                    Kontakt
                  </MenuLink>
                  <MenuButton onClick={this.displayMobileNav}>
                    <MenuIcon
                      active={active}
                      pose={active ? 'hidden' : 'visible'}
                    />
                  </MenuButton>
                </RightWraper>
              </LeftAndRightWraper>
            </CenterWraper>
          </StyledHeader>
        </HeaderWraper>
        <MobileNavigation active={active} handleClick={this.handleClick} />
      </>
    );
  }
}

export default Header;
