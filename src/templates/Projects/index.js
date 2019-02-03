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
  height: 90vh;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  ${media.phone`
    height: 100vh;
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
  `}
`;
const LeftContainer = styled.div`
  flex: 1;
  max-width: 380px;
  width: 100%;
  align-self: flex-start;
  border-radius: 10px;
  margin-bottom: 16px;
  box-shadow: 0 4px 20px hsla(210, 20%, 20%, 0.6);
  background-color: ${({theme}) => theme.colors.$primary};
  transition: all 0.2s;
  ${media.phone`
    max-width: 300px;
    width: 100%;
  `}
  :hover {
    box-shadow: 0 5px 25px hsla(210, 20%, 20%, 0.7);
  }
`;
const RightContainer = styled.div`
  flex: 1;
  max-width: 380px;
  width: 100%;
  align-self: flex-end;
  border-radius: 10px;
  margin-bottom: 16px;
  box-shadow: 0 4px 20px hsla(210, 20%, 20%, 0.6);
  background-color: ${({theme}) => theme.colors.$primary};
  transition: all 0.2s;
  ${media.phone`
    max-width: 300px;
    width: 100%;
  `}
  :hover {
    box-shadow: 0 5px 25px hsla(210, 20%, 20%, 0.7);
  }
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
        <ImgContainer fluid={nutrikonImg.fluid} nutrikon />
        <Subheading projects>
          <span>Nutrikon</span>
        </Subheading>
        <Description projects>
          <a href="http://nutrikon.pl/">Link</a>
        </Description>
        <Description desc>Website created on Nutrikon order</Description>
      </LeftContainer>
      <RightContainer>
        <ImgContainer fluid={tastyImg.fluid} tasty />
        <Subheading projects>
          <span>Tasty PO</span>
        </Subheading>
        <Description projects>
          <a href="https://cranky-raman-166572.netlify.com/">Link</a>
        </Description>
        <Description desc>
          Appliaction created as part of the student project
        </Description>
      </RightContainer>
    </ProjectsWraper>
  </MainContentWraper>
);
export default Projects;
