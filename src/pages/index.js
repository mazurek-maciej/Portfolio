import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';
import Main from '../templates/Main';
import About from '../templates/About';
import Projects from '../templates/Projects';

export default class Index extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <Layout>
        <Main laptopImage={data.bg} />
        <About allContent={data.allContent} />
        <Projects nutrikonImg={data.nutrikon} tastyImg={data.tasty} />
      </Layout>
    );
  }
}

export const query = graphql`
  query Laptop {
    bg: imageSharp(original: {src: {regex: "/Laptopx2/"}}) {
      fluid(maxWidth: 1200, maxHeight: 1200, quality: 100) {
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
