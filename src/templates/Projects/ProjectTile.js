import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import posed from 'react-pose';
import Img from 'gatsby-image';

import Subheading from '../../components/Subheading';
import Description from '../../components/Description';
import { media } from '../../utils/media';

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
    boxShadow: '0px 0px 0px rgba(0,0,0,0.1)',
    transition: {
      all: { ease: 'easeInOut', duration: 500 },
    },
  },
  hover: {
    y: '-1px',
    boxShadow: '0px 5px 10px rgba(0,0,0,0.3)',
    transition: {
      all: { ease: 'easeInOut', duration: 500 },
    },
  },
});
const TemplateContainer = styled(PosedTemplate)`
  max-width: 380px;
  width: 100%;
  height: 400px;
  border-radius: 10px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.$primary};
  position: relative;
  overflow: hidden;
  ${media.phone`
    max-width: 300px;
    width: 100%;
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

const ProjectTile = ({ link, description, heading, img }) => (
  <TemplateContainer>
    <a target="_blank" rel="noopener noreferrer" href={link}>
      <ImgContainer fluid={img.fluid} nutrikon />
    </a>
    <Subheading projects>
      <span>{heading}</span>
    </Subheading>
    <Description desc>{description}</Description>
  </TemplateContainer>
);

ProjectTile.propTypes = {
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
};

export default ProjectTile;
