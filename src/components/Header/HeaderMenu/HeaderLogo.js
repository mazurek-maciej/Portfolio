import React from 'react';
import styled from 'styled-components';
import maciekLogo from '../../../images/maciek_logo.svg';

const LogoWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const MLogo = styled.img`
  height: 36px;
  margin-left: 1rem;
`;

const HeaderLogo = () => (
  <LogoWrapper>
    <MLogo src={maciekLogo} />
  </LogoWrapper>
);

export default HeaderLogo;
