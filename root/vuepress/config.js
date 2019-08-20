module.exports = {
  description: "Tool for office",
  locales: {
    "/": { lang: "v0.1", title: "Office Tool v0.1" },
    "/v02/": { lang: "v0.2", title: "Office Tool v0.2" }
  },
  themeConfig: {
    locales: {
      "/": {
        selectText: "version",
        label: "v0.1",
        nav: [
          { text: "Home", link: "/" },
          { text: "SDD", link: "/guide/" },
          { text: "Version Tree", link: "/versions" }
        ],
        sidebar: [
          {
            title: "",
            collapsable: false,
            children: ["/guide/"]
          }
        ]
      },
      "/v02/": {
        selectText: "version",
        label: "v0.2",
        nav: [
          { text: "Home", link: "/v02/" },
          { text: "SDD", link: "/v02/guide/" },
          { text: "Version Tree", link: "/versions" }
        ],
        sidebar: [
          {
            title: "",
            collapsable: false,
            children: ["/v02/guide/"]
          }
        ]
      }
    }
  }
};
