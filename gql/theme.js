

const getThemeQuery = `query ThemeQuery {
    theme {
      logo {
        url
      }
      name
      primaryColor {
        hex
      }
      secondaryColor {
        hex
      }
      slogan
    }
  }`;

export { getThemeQuery };
