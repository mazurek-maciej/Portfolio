import React from 'react'
import styled from 'styled-components'
import Heading from '../../components/Heading';
import { media } from '../../utils/media';

const IntroWraper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${media.phone`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 8px;
  `}
`;
const HeadingWraper = styled.div`
  display: flex;
  ${media.phone`
    justify-content: center;
  `}
`;
const RegulationDiv = styled.div`
  flex: 1;
`;

const HelloIntro = () => {
  return (
    <>
      <IntroWraper>
        <HeadingWraper>
          <Heading>Hello everyone!</Heading>
        </HeadingWraper>
      </IntroWraper>
      <RegulationDiv />
    </>
  )
}
export default HelloIntro