import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import HeaderMenu from './HeaderMenu';
import HeaderLogo from './HeaderLogo';

const HeaderMenuWrapper = styled.div`
  display: flex;
  width: 100vw;
`;

const Header = ({ onClick, active, position }) => (
  <HeaderMenuWrapper>
    <HeaderLogo />
    <HeaderMenu position={position} onClick={onClick} active={active} />
  </HeaderMenuWrapper>
);

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
};

export default Header;
