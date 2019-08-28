import React from 'react';
import styled from 'styled-components';
import Subheading from '../../components/Tags/Subheading';
import me from '../../assets/images/Me.svg';

const TextWraper = styled.div`
  flex: 1;
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 8px;
`;
const AboutMeWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: wrap-reverse;
`;
const AboutMeImageContainer = styled.div`
  flex: 1;
  padding: 2rem;
  max-width: 300px;
  min-width: 250px;
  width: 100%;
`;

const AboutMe = () => (
  <AboutMeWrapper>
    <AboutMeImageContainer>
      <img src={me} alt="Author sketch" />
    </AboutMeImageContainer>
    <TextWraper>
      <React.Fragment>
        <Subheading about underline>
          About
        </Subheading>
        My name is Maciej Mazurek and since July 2018 I have started my journey
        to become front-end developer.
        <br /> Systematic work, pursuing to achive goal and willing to learn new
        technologies are my main assets.
        <br /> Currently I'm in love with the React, so most of my time is
        dedicated to this framework.
      </React.Fragment>
    </TextWraper>
  </AboutMeWrapper>
);
export default AboutMe;
