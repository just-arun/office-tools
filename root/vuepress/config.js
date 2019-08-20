module.exports = {
  description: "Tool for office",
  locales: {
    "/": { lang: "v0.01", title: "Office Tool v0.01" },
  },
  themeConfig: {
    locales: {
      "/": {
        selectText: "version",
        label: "v0.01",
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
          },
          {
            title: "",
            collapsable: false,
            children: ["/guide/sprint"]
          }
        ]
      },
    }
  }
};
