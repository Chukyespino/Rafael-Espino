module.exports = {
    siteMetadata: {
      contact: {
        name: `Ichabod Crane`,
        company: `Headless Horseman Reviews`,
        address: `1234 N Sleepy Hollow Rd`
      }
    },
    plugins: [
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography.js`
        }
      }
    ]
  };
  