module.exports = {
  siteMetadata: {
    title: 'Darkness. by David Riches',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Darkness",
        short_name: "darkness.davidrich.es",
        start_url: "/",
        background_color: "#262626",
        theme_color: "#262626",
        display: "minimal-ui",
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
