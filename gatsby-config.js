module.exports = {
  siteMetadata: {
    title: 'limitlessmatrix',
    description: 'Built with React, MDbootstrap, and Gatsby from jacob-cavazos theme',
    siteUrl: 'https://limitlessmatrix.com',
    author: 'jeremy-retamar-arrieta'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${ __dirname }/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-svgr`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `react-gatsby-template`,
        short_name: `MDBReact Template`,
        start_url: `/`,
        display: `standalone`,
        icon: 'src/images/binary-vortex.jpg'
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://limitlessmatrix.com',
        sitemap: 'https://limitlessmatrix.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
    //  {
    //   resolve: `gatsby-plugin-google-analytics`,
    // options: {
    //  trackingId: ''
    //    }
    //  }
  ]
}
