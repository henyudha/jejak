const settings = {
  name: "jejak",
  state: {
    frontity: {
      url: "https://jejakonline.com",
      title: "jejakonline",
      description: "kepemimpinan, teknologi dan qalbu ihsani",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["News", "/c/news/"],
            ["Lifestyle", "/c/lifestyle/"],
            ["Editorial", "/c/editorial/"],
            ["Figur", "/c/figur/"],
            ["Komunitas", "/c/komunitas/"],
          ],
          featured: {
            showOnList: true,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://jejakonline.com",
          categoryBase: "c",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
