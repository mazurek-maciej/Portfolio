import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Subheading from '../../components/Subheading';
import Description from '../../components/Description';
import {media} from '../../utils/media';
import nutrikonImage from '../../images/nutrikon.png';
import tastyImage from '../../images/tasty.png';

const MainContentWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  ${media.phone`
    height: 100%;
  `}
  h2 {
    align-self: flex-start;
  }
`;
const ProjectsWraper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 60vh;
  max-width: 900px;
  width: 100%;
  margin-top: 16px;
  ${media.phone`
    height: 100vh;
    justify-content: center;
  `}
`;

const RightContainer = styled.div`
  flex: 1;
  max-width: 380px;
  width: 100%;
  align-self: flex-end;
  border-radius: 10px;
  margin-bottom: 16px;
  background-color: ${({theme}) => theme.colors.$primary};
  box-shadow: 0 5px 25px hsla(210, 20%, 20%, 0.4);
  transition: all 0.2s;
  position: relative;
  ${media.phone`
    max-width: 300px;
    width: 100%;
    align-self: center;
  `}
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 8px 35px hsla(210, 20%, 20%, 0.3);
    opacity: 0;
    transition: opacity 0.2s;
    z-index: -1;
  }
  :hover::after {
    opacity: 1;
  }
`;
const LeftContainer = styled(RightContainer)`
  align-self: flex-start;
  ${media.phone`
    align-self: center;
  `}
`;
const ImgContainer = styled(Img)`
  width: 100%;
  height: 200px;
  background-color: hsl(210, 0%, 20%);
  margin-bottom: 8px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  ${media.phone`
    height: 160px;
  `}
`;
const Projects = ({nutrikonImg, tastyImg}) => (
  <MainContentWraper name="projects">
    <Subheading underline technologies>
      Projects
    </Subheading>
    <ProjectsWraper>
      <LeftContainer>
        <a href="http://nutrikon.pl/">
          <ImgContainer fluid={nutrikonImg.fluid} nutrikon />
        </a>
        <Subheading projects>
          <span>Nutrikon</span>
        </Subheading>
        <Description desc>
          Website created for Nutrikon company created using Gatsby.
        </Description>
      </LeftContainer>
      <RightContainer>
        <a href="https://cranky-raman-166572.netlify.com/">
          <ImgContainer fluid={tastyImg.fluid} tasty />
        </a>
        <Subheading projects>
          <span>Tasty PO</span>
        </Subheading>
        <Description desc>
          Appliaction created as part of the academic project based on React and
          Firebase - as store and authentication.
        </Description>
      </RightContainer>
    </ProjectsWraper>
  </MainContentWraper>
);
export default Projects;
