const settings = {
  name: "jejak",
  state: {
    frontity: {
      url: "https://cms.jejakonline.com",
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
            ["home", "/"],
            ["news", "/c/news/"],
            ["lifestyle", "/c/lifestyle/"],
            ["editorial", "/c/editorial/"],
            ["figur", "/c/figur/"],
            ["komunitas", "/c/komunitas/"],
            ["tentang", "/tentang/"],
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
          url: "https://cms.jejakonline.com",
          categoryBase: "c",
          tagBase: "topic",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
