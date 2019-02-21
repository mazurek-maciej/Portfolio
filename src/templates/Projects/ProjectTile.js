import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Subheading from '../../components/Subheading';
import Description from '../../components/Description';
import {media} from '../../utils/media';

const TemplateContainer = styled.div`
  max-width: 380px;
  width: 100%;
  height: 400px;
  border-radius: 10px;
  margin-bottom: 16px;
  background-color: ${({theme}) => theme.colors.$primary};
  box-shadow: 0 4px 15px hsla(210, 20%, 10%, 0.6);
  transition: all 0.4s;
  position: relative;
  ${media.phone`
    max-width: 300px;
    width: 100%;
    align-self: center;
  `}
  :hover {
    transform: translateY(-1px);
  }
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 8px 25px hsla(210, 20%, 20%, 0.3);
    opacity: 0;
    transition: opacity 0.2s;
    z-index: -1;
  }
  :hover::after {
    opacity: 1;
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

const ProjectTile = ({link, description, heading, img}) => (
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

export default ProjectTile;
