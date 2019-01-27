import React from 'react';
import styled from 'styled-components';
import mLogo from '../../images/M_logo.svg';
import maciekLogo from '../../images/maciek_logo.svg';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30vh;
  background-color: ${({theme}) => theme.colors.$primary};
  color: ${({theme}) => theme.colors.$f};
`;
const LinksWraper = styled.div`
  display: flex;
  max-width: 600px;
  width: 100%;
  justify-content: center;
  flex: 3;
`;
const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
`;
const CenterContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
const BottomContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: hsl(203, 80%, 70%);
`;
const MLogo = styled.img`
  width: 48px;
`;

const Footer = () => {
  return (
    <StyledFooter name="footer">
      <LinksWraper>
        <LeftContainer>
          <MLogo src={maciekLogo} />
        </LeftContainer>
        <CenterContainer>
          <a>Home</a>
          <a>About</a>
          <a>Projects</a>
        </CenterContainer>
        <RightContainer>
          <a>LinkedIn</a>
          <a>Github</a>
          <a>Mail</a>
        </RightContainer>
      </LinksWraper>
      <BottomContainer>maciej.mazurek.prv@gmail.com</BottomContainer>
    </StyledFooter>
  );
};

export default Footer;
