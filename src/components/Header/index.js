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

const PosedStyledHeader = posed.nav({
  visible: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  hidden: {
    backgroundColor: '#343434',
  },
});
const HeaderWraper = styled(PosedHeader)`
  position: fixed;
  z-index: 1;
`;
const StyledHeader = styled(PosedStyledHeader)`
  display: flex;
  z-index: 1;
  justify-content: center;
  width: 100vw;
  height: 56px;
`;
const CenterWraper = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: '',
      windowPosition: window.pageYOffset,
      menuVisible: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleClick = () => {
    if (this.state.active === 'active') {
      this.setState({ active: '' });
    }
  };

  displayMobileNav = () => {
    this.setState({ active: 'active' });
  };

  handleScroll = () => {
    const currentPos = window.pageYOffset;
    if (currentPos > 50) {
      this.setState({ menuVisible: true });
    } else if (currentPos < 50) {
      this.setState({ menuVisible: false });
    }
    this.setState({ windowPosition: currentPos });
  };

  render() {
    const { active, windowPosition, menuVisible } = this.state;
    return (
      <>
        <HeaderWraper>
          <StyledHeader
            pose={menuVisible ? 'hidden' : 'visible'}
            initialPose="hidden"
          >
            <CenterWraper>
              <HeaderMenu
                key="hMenu"
                onClick={this.displayMobileNav}
                active={active}
                position={windowPosition}
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
