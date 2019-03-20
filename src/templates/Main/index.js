import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import posed from 'react-pose';
import Intro from './HelloIntro';
import ImagePlaceholder from './ImagePlaceholder';
import Lpt from '../../images/Laptopv3.svg';

const AnimationMain = posed.section({
  visible: {
    opacity: 1,
    x: 0,
    delay: 300,
    ease: 'easeIn',
    transition: { type: 'spring' },
  },
  hidden: {
    x: -50,
    opacity: 0,
  },
});

const MainWraper = styled(AnimationMain)`
  display: flex;
  opacity: 0;
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100vh;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
`;

const Main = () => {
  const [visible, setVisible] = useState(0);

  function renderVisible() {
    setVisible(1);
  }

  useEffect(() => {
    setTimeout(() => {
      renderVisible();
    }, 500);
  });

  return (
    <MainWraper
      name="main"
      initialPose="hidden"
      pose={visible ? 'visible' : 'hidden'}
    >
      <Intro />
      <ImagePlaceholder image={Lpt} />
    </MainWraper>
  );
};
export default Main;
