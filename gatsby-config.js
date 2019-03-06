module.exports = {
  siteMetadata: {
    title: 'Brand Hub - David Riches',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Brand Hub",
        short_name: "brandhub.davidrich.es",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#EE4938",
        display: "minimal-ui",
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
