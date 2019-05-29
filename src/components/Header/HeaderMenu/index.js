import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import HeaderMenu from './HeaderMenu';
import HeaderLogo from './HeaderLogo';

const HeaderMenuWrapper = styled.div`
  display: flex;
  width: 100vw;
`;

const Header = ({ onClick, activeMN, position }) => (
  <HeaderMenuWrapper>
    <HeaderLogo />
    <HeaderMenu position={position} onClick={onClick} activeMN={activeMN} />
  </HeaderMenuWrapper>
);

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  activeMN: PropTypes.bool.isRequired,
  position: PropTypes.number.isRequired,
};

export default Header;
