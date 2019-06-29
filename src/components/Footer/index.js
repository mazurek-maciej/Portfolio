import React from 'react';
import styled, { keyframes } from 'styled-components';
import posed from 'react-pose';
import maciekLogo from '../../images/maciek_logo.svg';
import { media } from '../../utils/media';

const PosedLinkTo = posed.a({
  hoverable: true,
  enter: {
    scale: 1.1,
  },
  exit: {
    scale: 1,
  },
});

const slideIn = keyframes``;

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(17, 21, 24, 1);
  background: linear-gradient(
    45deg,
    rgba(17, 21, 24, 1) 0%,
    rgba(17, 21, 24, 1) 31%,
    rgba(49, 59, 69, 1) 95%,
    rgba(49, 59, 69, 1) 100%
  );
  color: ${({ theme }) => theme.colors.$f};
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  width: 100%;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 360px;
  ${media.tablet`
    padding: 0 16px;
  `}
`;
const IconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const IconWrapper = styled.a`
  display: flex;
  align-items: baseline;
  color: ${({ theme }) => theme.colors.$f};
  cursor: pointer;
`;
const Icon = styled.div`
  width: 56px;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.$primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
`;
const H4 = styled.h4`
  font-size: 36px;
  margin: 16px 0;
  ${media.phone`
  font-size: 24px;
  `}
`;
const P = styled.p`
  font-size: ${props => (props.tag ? '14px' : '22px')};
  color: hsl(203, 80%, 90%);
  margin: 0;
  padding-top: ${props => (props.tag ? '32px' : '0')};
  ${media.phone`
    font-size: ${props => (props.tag ? '14px' : '18px')};
  `}
`;
const IconP = styled.p`
  font-size: 22px;
  padding: 8px;
  ${media.phone`
  font-size: 18px;
  `}
`;
const LinkTo = styled(PosedLinkTo)`
  color: ${({ theme }) => theme.colors.$f};
  font-size: 3rem;
`;
const MLogo = styled.img`
  width: 48px;
`;

const Footer = () => (
  <StyledFooter name="footer">
    <Wrapper>
      <TextWrapper>
        <H4>Reach me</H4>
        <P>Feel free to contact with me and also check my resources</P>
      </TextWrapper>
      <IconsWrapper>
        <div>
          <IconWrapper
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/mazurek-maciej"
          >
            <Icon>
              <i className="fab fa-github" />
            </Icon>
            <IconP>GitHub</IconP>
          </IconWrapper>
          <IconWrapper
            target="_blank"
            rel="noopener noreferrer"
            href="www.linkedin.com/in/maciej-mazurek-087a6011a"
          >
            <Icon>
              <i className="fab fa-linkedin" />
            </Icon>
            <IconP>LinkedIn</IconP>
          </IconWrapper>
          <IconWrapper
            target="_blank"
            rel="noopener noreferrer"
            href="mailto: maciej.mazurek.prv@gmail.com"
          >
            <Icon>
              <i className="fas fa-paper-plane" />
            </Icon>
            <IconP>Mail</IconP>
          </IconWrapper>
        </div>
      </IconsWrapper>
    </Wrapper>
    <div>
      <P tag>Made with 💙 by Maciej Mazurek</P>
    </div>
  </StyledFooter>
);

export default Footer;
