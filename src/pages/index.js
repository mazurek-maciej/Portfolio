import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Main from '../templates/Main';
import About from '../templates/About';
import Projects from '../templates/Projects';

export default class Index extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <Main laptopImage={data.bg} />
        <About allContent={data.allContent} />
        <Projects nutrikonImg={data.nutrikon} tastyImg={data.tasty} hazeImg={data.haze} blogImg={data.blog} />
      </Layout>
    );
  }
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query Laptop {
    bg: imageSharp(original: { src: { regex: "/Laptopv3/" } }) {
      fluid(maxWidth: 1000, maxHeight: 1000, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
    nutrikon: imageSharp(original: { src: { regex: "/nutrikon/" } }) {
      fluid(maxHeight: 200, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
    tasty: imageSharp(original: { src: { regex: "/tasty/" } }) {
      fluid(maxHeight: 200, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
    blog: imageSharp(original: { src: { regex: "/blog/" } }) {
      fluid(maxHeight: 200, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
    haze: imageSharp(original: { src: { regex: "/haze/" } }) {
      fluid(maxHeight: 900, quality: 100) {
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
