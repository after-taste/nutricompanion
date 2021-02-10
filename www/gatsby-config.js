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
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
        appendScript: require.resolve(`./src/pwa/service-worker.js`),
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
