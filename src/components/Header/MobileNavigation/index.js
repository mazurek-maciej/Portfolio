import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import posed from 'react-pose';
import Button from './MobileNavButton';

const PosedNav = posed.nav({
  visible: {
    x: '0%',
    staggerChildren: 100,
    transition: {
      x: { ease: 'easeOut', duration: 300 },
    },
  },
  hidden: {
    x: '150%',
    transition: {
      x: { ease: 'easeIn', duration: 200 },
    },
  },
});
const PosedBg = posed.div({
  visible: {
    applyAtStart: { display: 'block' },
    opacity: 0.6,
    transition: {
      x: { ease: 'easeIn', duration: 180 },
      opacity: { ease: 'easeIn', duration: 100 },
    },
  },
  hidden: {
    applyAtEnd: { display: 'none' },
    opacity: 0,
    transition: {
      x: { ease: 'easeIn', duration: 180 },
      opacity: { ease: 'easeIn', duration: 100 },
    },
  },
});

const MobileNavWraper = styled(PosedNav)`
  position: fixed;
  right: 0;
  transform: translateX(100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.$grayBg};
`;
const BackgroundBlur = styled(PosedBg)`
  position: fixed;
  display: none;
  z-index: 1;
  width: 100%;
  height: 100vh;
  content: '';
  background-color: hsla(0, 0%, 0%, 0.5);
`;

const MobileNavigation = ({ activeMN, handleClick }) => (
  <>
    <MobileNavWraper active={activeMN} pose={activeMN ? 'visible' : 'hidden'}>
      <Button to="main" title="Home" pose={activeMN ? 'visible' : 'hidden'} />
      <Button title="About" to="about" pose={activeMN ? 'visible' : 'hidden'} />
      <Button
        title="Projects"
        to="projects"
        pose={activeMN ? 'visible' : 'hidden'}
      />
      <Button
        title="Contact"
        to="projects"
        pose={activeMN ? 'visible' : 'hidden'}
      />
    </MobileNavWraper>
    <BackgroundBlur
      active={activeMN}
      onClick={handleClick}
      pose={activeMN ? 'visible' : 'hidden'}
    />
  </>
);

MobileNavigation.propTypes = {
  activeMN: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default MobileNavigation;
