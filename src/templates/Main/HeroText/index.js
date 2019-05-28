import React from 'react';
import styled from 'styled-components';
import HeroButton from './HeroButton';
import Heading from '../../../components/Tags/Heading';
import { media } from '../../../utils/media';

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
  flex-direction: column;
  padding-bottom: 25%;
  ${media.tablet`
    justify-content: center;
    padding-bottom: 50%;
    margin-left: 10%;
  `}
`;
const HeadingSmall = styled.p`
  font-size: 16px;
  margin: 8px 0;
  color: ${({ theme }) => theme.colors.$p};
`;

const HelloIntro = () => (
  <>
    <IntroWraper>
      <HeadingWraper>
        <Heading>Hello everyone!</Heading>
        <HeadingSmall>Below you can find information about me</HeadingSmall>
        <HeroButton />
      </HeadingWraper>
    </IntroWraper>
  </>
);
export default HelloIntro;
