import React from 'react';
import styled from 'styled-components';

import Subheading from '../../components/Subheading';
import {media} from '../../utils/media';
import ProjectTile from './ProjectTile';
import {NutrikonDescription, TastyDescription} from './ProjectsDescriptions';

const MainContentWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  max-width: 1120px;
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
  justify-content: space-around;
  position: relative;
  height: 60vh;
  max-width: 900px;
  width: 100%;
  margin-top: 16px;
  ${media.phone`
    flex-direction: column;
    height: 100vh;
    justify-content: center;
  `}
`;

const Projects = ({nutrikonImg, tastyImg}) => (
  <MainContentWraper name="projects">
    <Subheading underline technologies projectsTitle>
      Projects
    </Subheading>
    <ProjectsWraper>
      <ProjectTile
        link="http://nutrikon.pl/"
        description={NutrikonDescription}
        heading="Nutrikon"
        img={nutrikonImg}
      />
      <ProjectTile
        link="https://cranky-raman-166572.netlify.com/"
        description={TastyDescription}
        heading="Tasty"
        img={tastyImg}
      />
    </ProjectsWraper>
  </MainContentWraper>
);
export default Projects;
