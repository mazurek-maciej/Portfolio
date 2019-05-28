import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import HeroText from './HeroText';
import ImagePlaceholder from './ImagePlaceholder';
import LaptopImage from '../../images/Laptopv3.svg';
import { media } from '../../utils/media';

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

const HeroWrapper = styled(PosedMain)`
  display: flex;
  opacity: 0;
  position: relative;
  flex-direction: column;
  height: 100vh;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`;

const Divider = styled.div`
  position: absolute;
  width: 100%;
  height: 800px;
  background: ${({ theme }) => theme.colors.$grayBg};
  z-index: -2;
  bottom: 0;
  clip-path: polygon(0 50%, 100% 0%, 100% 50%, 0% 100%);
  ${media.phone`
    clip-path: polygon(0 70%, 100% 50%, 100% 80%, 0% 100%);
  `}
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
      <HeroWrapper
        name="main"
        initialPose="hidden"
        pose={visible ? 'visible' : 'hidden'}
      >
        <HeroText />
        <ImagePlaceholder image={LaptopImage} />
      </HeroWrapper>
      <Divider />
    </React.Fragment>
  );
};
export default Main;
