import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { media } from '../../../utils/media';

const TileBottomContainer = styled.div`
  flex: 3;
`;
const ImgContainer = styled(Img)`
  width: 100%;
  height: 100%;
  background-color: hsl(210, 0%, 20%);
  ${media.phone`
    height: 160px;
  `}
`;
const BottomContainer = ({ link, img }) => (
  <TileBottomContainer>
    <a target="_blank" rel="noopener noreferrer" href={link}>
      <ImgContainer fluid={img} nutrikon />
    </a>
  </TileBottomContainer>
);

BottomContainer.propTypes = {
  link: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
};

export default BottomContainer;
