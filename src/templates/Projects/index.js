import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Subheading from '../../components/Subheading';
import { media } from '../../utils/media';
import ProjectTile from './ProjectTile';
import { NutrikonDescription, TastyDescription } from './ProjectsDescriptions';

const MainContentWraper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  ${media.phone`
    height: 100%;
  `}
  h2 {
    align-self: flex-start;
  }
`;
const ProjectsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 2rem;
`;

const Projects = ({ nutrikonImg, tastyImg }) => (
  <MainContentWraper name="projects">
    <Subheading underline technologies projectsTitle>
      Projects
    </Subheading>
    <ProjectsWrapper>
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
    </ProjectsWrapper>
  </MainContentWraper>
);

Projects.propTypes = {
  nutrikonImg: PropTypes.object,
  tastyImg: PropTypes.object,
};

export default Projects;
