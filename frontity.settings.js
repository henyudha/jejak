const settings = {
  name: "jejak",
  state: {
    frontity: {
      url: "https://test.frontity.org",
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
          url: "https://test.frontity.org",
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
