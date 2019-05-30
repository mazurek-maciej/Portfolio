import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import MobileNavigation from './MobileNavigation';
import HeaderMenu from './HeaderMenu';

const PosedHeader = posed.header({
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

const PosedStyledHeader = posed.nav({
  visible: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  hidden: {
    backgroundColor: '#343434',
  },
});
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
      activeMN: false,
      windowPosition: 0,
      menuVisible: true,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleClick = () => {
    const { activeMN } = this.state;
    if (activeMN === true) this.setState({ activeMN: false });
  };

  handleDisplayMobileNavigation = () => {
    this.setState({ activeMN: true });
  };

  handleScroll = () => {
    const currentPos = window.pageYOffset;
    if (currentPos > 50) {
      this.setState({ menuVisible: false });
    } else if (currentPos < 50) {
      this.setState({ menuVisible: true });
    }
    this.setState({ windowPosition: currentPos });
  };

  render() {
    const { activeMN, windowPosition, menuVisible } = this.state;
    return (
      <>
        <HeaderWraper>
          <StyledHeader
            pose={menuVisible ? 'visible' : 'hidden'}
            initialPose="visible"
          >
            <CenterWraper>
              <HeaderMenu
                key="hMenu"
                onClick={this.handleDisplayMobileNavigation}
                activeMN={activeMN}
                position={windowPosition}
              />
            </CenterWraper>
          </StyledHeader>
        </HeaderWraper>
        <MobileNavigation activeMN={activeMN} handleClick={this.handleClick} />
      </>
    );
  }
}

export default Header;
