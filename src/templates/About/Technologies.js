import React from 'react';
import styled from 'styled-components';
import Subheading from '../../components/Subheading';

const TextWraper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 8px;
`;
const Technologies = () => (
  <TextWraper>
    <React.Fragment>
      <Subheading about underline>
        Technologies
      </Subheading>
      <div>
        Below are technologies that I'm currently mostly delve into.
        <br /> In the next stage of my learning journey I want to get better
        knowledge in: Node.js, Webpack, Express, MongoDB, Jest and many more
        that will appear.
        <br /> In the meantime I'm also learning how to create beautiful UI
        designs. For mockups and graphics I'm using Sketch.
      </div>
    </React.Fragment>
  </TextWraper>
);
export default Technologies;
