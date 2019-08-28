import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Subheading from '../../components/Tags/Subheading';
import { media } from '../../utils/media';
import ProjectTile from './Tile';
import * as Description from './ProjectsDescriptions';

const MainContentWraper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: relative;
  ${media.phone`
    height: 100%;
  `}
  h2 {
    align-self: flex-start;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  width: 100%;
`;
const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 2rem;
`;

const Projects = ({ nutrikonImg, hazeImg, blogImg }) => (
  <MainContentWraper name="projects">
    <Wrapper>
      <Subheading underline technologies projectsTitle>
        Projects
      </Subheading>
      <ProjectsWrapper>
        <ProjectTile
          link="http://nutrikon.pl/"
          ghLink="https://github.com/mazurek-maciej/Nutrikon-Website"
          description={Description.NutrikonDescription}
          heading="Nutrikon"
          img={nutrikonImg}
        />
        <ProjectTile
          link="https://haze.netlify.com/"
          ghLink="https://github.com/mazurek-maciej/Haze"
          description={Description.HazeDescription}
          heading="Haze"
          img={hazeImg}
        />
        <ProjectTile
          link="https://minidotmalism.netlify.com/"
          ghLink="https://github.com/mazurek-maciej/mini.malism"
          description={Description.BlogDescription}
          heading="Personal blog"
          img={blogImg}
        />
      </ProjectsWrapper>
    </Wrapper>
  </MainContentWraper>
);

Projects.propTypes = {
  nutrikonImg: PropTypes.object,
  tastyImg: PropTypes.object,
};

export default Projects;
