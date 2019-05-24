import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import posed from 'react-pose';
import Img from 'gatsby-image';

import Subheading from '../../components/Subheading';
import Description from '../../components/Description';
import { media } from '../../utils/media';
import GitHubLogo from '../../images/gh_logo.svg';

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

const ImgContainer = styled(Img)`
  width: 100%;
  height: 100%;
  background-color: hsl(210, 0%, 20%);
  ${media.phone`
    height: 160px;
  `}
`;
const TileTopContainer = styled.div`
  flex: 1;
`;
const TileBottomContainer = styled.div`
  flex: 3;
`;
const TileTopDoubleBox = styled.div`
  display: flex;
  align-items: flex-end;
`;
const GitHubImg = styled.img`
  flex: 1;
  width: 32px;
  height: 32px;
  margin: 0 4px;
`;

const ProjectTile = ({ link, ghLink, description, heading, img }) => (
  <TemplateContainer>
    <TileTopContainer>
      <Subheading projects>
        <span>{heading}</span>
      </Subheading>
      <TileTopDoubleBox>
        <Description style={{ flex: '1' }} desc>
          {description}
        </Description>
        <a target="_blank" rel="noopener noreferrer" href={ghLink}>
          <GitHubImg src={GitHubLogo} />
        </a>
      </TileTopDoubleBox>
    </TileTopContainer>
    <TileBottomContainer>
      <a target="_blank" rel="noopener noreferrer" href={link}>
        <ImgContainer fluid={img.fluid} nutrikon />
      </a>
    </TileBottomContainer>
  </TemplateContainer>
);

ProjectTile.propTypes = {
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
};

export default ProjectTile;
