import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';
import posed from 'react-pose';
import Intro from './HelloIntro';
import ImagePlaceholder from './ImagePlaceholder';
import Lpt from '../../images/Laptopv3.svg';

const PosedScroll = posed.a({
  hoverable: true,
  init: {
    y: 0,
    ease: 'easeIn',
    transition: { type: 'spring' },
  },
  hover: {
    y: 10,
  },
});
const PosedMain = posed.section({
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 600 },
  },
  hidden: {
    x: -50,
    opacity: 0,
  },
});

const MainWraper = styled(PosedMain)`
  display: flex;
  opacity: 0;
  position: relative;
  flex-direction: column;
  height: 100vh;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`;

const ScrollTo = styled(PosedScroll)`
  align-self: center;
  color: ${({ theme }) => theme.colors.$testPrimary};
  width: 2rem;
  text-align: center;
  font-size: 2rem;
`;
const Divider = styled.div`
  position: absolute;
  width: 100%;
  height: 800px;
  background: ${({ theme }) => theme.colors.$grayBg};
  z-index: -2;
  bottom: 0;
  -webkit-clip-path: polygon(0 50%, 100% 35%, 100% 70%, 0% 100%);
  clip-path: polygon(0 50%, 100% 0%, 100% 50%, 0% 100%);
`;

const Main = () => {
  const [visible, setVisible] = useState(0);

  function renderVisible() {
    setVisible(1);
  }

  useEffect(() => {
    setTimeout(() => {
      renderVisible();
    }, 200);
  });

  return (
    <React.Fragment>
      <MainWraper
        name="main"
        initialPose="hidden"
        pose={visible ? 'visible' : 'hidden'}
      >
        <Intro />
        <ImagePlaceholder image={Lpt} />
      </MainWraper>
      <Divider />
    </React.Fragment>
  );
};
export default Main;
