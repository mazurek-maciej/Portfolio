import React from 'react';
import Layout from '../components/Layout';
import poser from 'react-pose';
import {graphql} from 'gatsby';
import Main from '../templates/Main';
import About from '../templates/About';
import Projects from '../templates/Projects';

const AnimationLayout = poser.div({
  open: {
    opacity: 1,
    x: 0,
  },
  closed: {
    opacity: 0,
    x: 100,
  },
});
export default class Index extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <Layout>
        <AnimationLayout initialPose="closed" pose="open">
          <Main laptopImage={data.bg} />
          <About allContent={data.allContent} />
          <Projects nutrikonImg={data.nutrikon} tastyImg={data.tasty} />
        </AnimationLayout>
      </Layout>
    );
  }
}

export const query = graphql`
  query Laptop {
    bg: imageSharp(original: {src: {regex: "/Laptopv3/"}}) {
      fluid(maxWidth: 1000, maxHeight: 1000, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
    nutrikon: imageSharp(original: {src: {regex: "/nutrikon/"}}) {
      fluid(maxHeight: 200, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
    tasty: imageSharp(original: {src: {regex: "/tasty/"}}) {
      fluid(maxHeight: 200, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
    allContent: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;
