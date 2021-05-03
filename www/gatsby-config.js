module.exports = {
  siteMetadata: {
    title: "nutricompanion",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "90674583191aa134438cf30b9e229a",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
        name: `Nutricompanion`,
        short_name: `Nutri`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        appendScript: `src/pwa/service-worker.js`,
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          "@blocks": "./blocks",
          "@components": "./components",
          "@gql": "./gql",
          "@hooks": "./hooks",
          "@images": "./images",
          "@pages": "./pages",
          "@styles": "./styles",
          "@services": "./services"
        }
      }
    }
  ]
};
