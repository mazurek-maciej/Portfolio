import React from 'react';
import styled from 'styled-components';

export const TopNotchWraper = styled.div`
  position: absolute;
  width: 100%;
  height: 40px;
  background-color: hsl(210, 60%, 97%);
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  top: 0;
`;

const TopNotch = () => (
  <TopNotchWraper>
    <svg>
      <circle cx="50" cy="20" r="10" fill="#FF8C8C" />
      <circle cx="80" cy="20" r="10" fill="#FFFE8C" />
      <circle cx="110" cy="20" r="10" fill="#A5FF8C" />
    </svg>
  </TopNotchWraper>
);

export default TopNotch;
