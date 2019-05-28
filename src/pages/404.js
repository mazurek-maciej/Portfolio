import React from 'react';
import styled, { keyframes } from 'styled-components';

const Styled404 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const H1 = styled.h1``;
const A = styled.a``;
const SpanAnimation = keyframes`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(30deg)
  }
`;
const Span = styled.span`
  animation: ${SpanAnimation} 1s ease;
`;

export default () => (
  <Styled404>
    <H1>Strona nie istnieje!</H1>
    <A href="https://mazurekm.pl">
      Wróc do strony głównej<Span>👈🏻</Span>
    </A>
  </Styled404>
);
