import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import MobileNavigation from '../MobileNavigation';
import HeaderMenu from './HeaderMenu';

const PosedHeader = posed.div({
  open: {
    staggerChildren: 50,
  },
  closed: {
    opacity: 1,
  },
});
const HeaderWraper = styled(PosedHeader)`
  position: fixed;
  z-index: 1;
`;
const StyledHeader = styled.nav`
  display: flex;
  z-index: 1;
  justify-content: center;
  width: 100vw;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.$primary};
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
`;
const CenterWraper = styled.div`
  max-width: 1120px;
  width: 100%;
  display: flex;
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
      this.setState({ active: '' });
    }
  };

  displayMobileNav = () => {
    this.setState({ active: 'active' });
  };

  render() {
    const { active } = this.state;
    return (
      <>
        <HeaderWraper>
          <StyledHeader>
            <CenterWraper>
              <HeaderMenu
                key="hMenu"
                onClick={this.displayMobileNav}
                active={active}
              />
            </CenterWraper>
          </StyledHeader>
        </HeaderWraper>
        <MobileNavigation active={active} handleClick={this.handleClick} />
      </>
    );
  }
}

export default Header;
