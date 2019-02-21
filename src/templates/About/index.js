import React, {Component} from 'react';
import styled from 'styled-components';
import TechnologiesTiles from './TechnologiesTiles';

import Subheading from '../../components/Subheading';
import P from '../../components/P';
import {media} from '../../utils/media';

const AboutWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  ${media.phone`
    height: 100%;
  `}
`;
const TextWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 8px;
`;

class About extends Component {
  state = {
    js: false,
    react: false,
    gatsby: false,
    sc: false,
  };
  handleSetState = e => this.setState(prevState => ({[e]: !prevState[e]}));

  render() {
    const {js, react, gatsby, sc} = this.state;
    const {edges} = this.props.allContent;
    console.log(edges);
    return (
      <AboutWraper name="about">
        <TextWraper>
          {edges.map((content, index) => (
            <React.Fragment key={index}>
              <Subheading about underline>
                {content.node.frontmatter.title}
              </Subheading>
              <P
                paddingBtm
                dangerouslySetInnerHTML={{__html: content.node.html}}
              />
            </React.Fragment>
          ))}
        </TextWraper>
        <TechnologiesTiles
          handleSetState={this.handleSetState}
          js={js}
          sc={sc}
          react={react}
          gatsby={gatsby}
        />
      </AboutWraper>
    );
  }
}
export default About;
