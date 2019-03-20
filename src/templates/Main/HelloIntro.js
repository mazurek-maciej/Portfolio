import React from 'react';
import styled from 'styled-components';
import Heading from '../../components/Heading';
import { media } from '../../utils/media';

const IntroWraper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${media.phone`
    margin: 0 8px;
  `}
`;
const HeadingWraper = styled.div`
  display: flex;
  padding-bottom: 25%;
  ${media.tablet`
    justify-content: center;
    padding-bottom: 50%;
  `}
`;

const HelloIntro = () => (
  <>
    <IntroWraper>
      <HeadingWraper>
        <Heading>Hello everyone!</Heading>
      </HeadingWraper>
    </IntroWraper>
  </>
);
export default HelloIntro;
