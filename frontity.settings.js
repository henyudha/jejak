const settings = {
  name: "jejak",
  state: {
    frontity: {
      url: "https://cms.jejakonline.com/",
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
            ["news", "/category/news/"],
            ["lifestyle", "/category/lifestyle/"],
            ["editorial", "/category/editorial/"],
            ["figur", "/category/figur/"],
            ["komunitas", "/category/komunitas/"],
          ],
          featured: {
            showOnList: true,
            showOnPost: true,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://cms.jejakonline.com/",
          postsPage: "/blog",
          homepage: "/home",
          // categoryBase: "c",
          // tagBase: "topic",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
