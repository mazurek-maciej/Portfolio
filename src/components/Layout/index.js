import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from '../../utils/theme';
import Header from '../Header';
import Footer from '../Footer';
import './index.sass';

const GlobalStyle = createGlobalStyle`
  body {
    background-size: 400% 400%;
    background-color: ${theme.colors.$bg};
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: Montserrat;
    *, *::before, **::after {
      box-sizing: border-box;
    }
  }
`;

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Helmet title="Maciej Mazurek Portfolio">
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossOrigin="anonymous"
        />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </>
  </ThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.object.isRequired,
};

export default TemplateWrapper;
