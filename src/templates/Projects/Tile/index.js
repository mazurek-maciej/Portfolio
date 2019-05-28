import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import posed from 'react-pose';
import TopContainer from './TopContainer';
import BottomContainer from './BottomContainer';
import { media } from '../../../utils/media';

const PosedTemplate = posed.div({
  hoverable: true,
  enter: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 25,
  },
  init: {
    y: 0,
    boxShadow: '0px 2px 10px rgba(0,0,0,0.3)',
    transition: {
      all: { ease: 'easeInOut', duration: 500 },
    },
  },
  hover: {
    y: '-1px',
    boxShadow: '0px 5px 14px rgba(0,0,0,0.4)',
    transition: {
      all: { ease: 'easeInOut', duration: 500 },
    },
  },
});
const TemplateContainer = styled(PosedTemplate)`
  display: flex;
  flex-direction: column;
  justify-self: center;
  border-radius: 10px;
  margin: 1rem;
  background-color: ${({ theme }) => theme.colors.$grayBg};
  position: relative;
  overflow: hidden;
  ${media.phone`
    max-width: 300px;
    width: 100%;
    align-self: center;
  `}
`;

const ProjectTile = ({ link, ghLink, description, heading, img }) => (
  <TemplateContainer>
    <TopContainer heading={heading} description={description} ghLink={ghLink} />
    <BottomContainer link={link} img={img.fluid} />
  </TemplateContainer>
);

ProjectTile.propTypes = {
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
  ghLink: PropTypes.string.isRequired,
};

export default ProjectTile;
