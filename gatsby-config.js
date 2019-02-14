const dotenv = require('dotenv');

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config();
}

const {spaceId, accessToken} = process.env;

module.exports = {
  siteMetadata: {
    title: 'Maciej Mazurek portoflio site',
    description: 'Portoflio site made by Maciej Mazurek',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#376D8C',
        theme_color: '#376D8C',
        display: 'minimal-ui',
      },
    },
    // {
    //   resolve: "gatsby-source-contentful",
    //   options: {
    //     spaceId,
    //     accessToken
    //   }
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
