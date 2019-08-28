import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Subheading from '../../../components/Tags/Subheading';
import Description from '../../../components/Tags/Description';
import GitHubLogo from '../../../assets/images/gh_logo.svg';

const TileTopContainer = styled.div`
  flex: 1;
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

const TopContainer = ({ heading, description, ghLink }) => (
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
);

TopContainer.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ghLink: PropTypes.string.isRequired,
};

export default TopContainer;
