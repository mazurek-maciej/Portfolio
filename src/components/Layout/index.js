import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { ThemeProvider, createGlobalStyle, keyframes } from 'styled-components';
import { theme } from '../../utils/theme'
import Header from '../Header'
import Footer from '../Footer'
import './index.sass';


const anim = keyframes`
  0% {
		background-position: 0 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0 50%
	}
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-size: 400% 400%;
    background-color: ${({theme}) => theme.colors.$bg};
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
        <GlobalStyle/>
        <Helmet
          title='Maciej Mazurek Portfolio'
        />
        <Header/>
        {children}

        <Footer>

        </Footer>
      </>
  </ThemeProvider>
)

// TemplateWrapper.propTypes = {
//   children: PropTypes.func
// }

export default TemplateWrapper
