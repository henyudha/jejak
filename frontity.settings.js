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
      name: "jjo-theme"
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://cms.jejakonline.com",
          postTypes: [
            {
              type: "destinations",
              endpoint: "destinations",
              archive: "/destinations"
            }
          ]
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
