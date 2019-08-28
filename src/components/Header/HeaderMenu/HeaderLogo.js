import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import maciekLogo from '../../../assets/images/maciek_logo.svg';

const PosedLogo = posed.img({
  open: {
    opacity: 1,
    transition: { duration: 1000 },
  },
  closed: {
    opacity: 0,
  },
});

const LogoWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const MLogo = styled(PosedLogo)`
  height: 36px;
  margin-left: 1rem;
  opacity: 0;
`;

const HeaderLogo = () => (
  <LogoWrapper>
    <MLogo pose="open" initialPose="closed" src={maciekLogo} />
  </LogoWrapper>
);

export default HeaderLogo;
