const title = "The Beggar's Opera"
const htmlTitle = "The Beggar's Opera"

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    issue: {
      full: "The Beggars Opera",
      short: "1st Edition",
      path: "/"
    },
    doi: "10.55520/6ZH06EW2",
    group_order: 1,
    title,
    htmlTitle,
    subtitle: "",
    authors: [
      {
        first: "Steve",
        middle: "",
        last: "Newman",
        affiliations: ["Temple University"],
        orcid: ""
      },
      {
        first: "Fred",
        middle: "",
        last: "Rowland",
        affiliations: ["Temple University"],
        orcid: ""
      },
      {
        first: "Alex",
        middle: "",
        last: "Wermer-Colan",
        affiliations: ["Temple University"],
        orcid: ""
      }
    ],
    authors_struct: [
      {
        first: "Steve",
        middle: "",
        last: "Newman",
        affiliations: ["Temple University"],
        orcid: ""
      },
      {
        first: "Fred",
        middle: "",
        last: "Rowland",
        affiliations: ["Temple University"],
        orcid: ""
      },
      {
        first: "Alex",
        middle: "",
        last: "Wermer-Colan",
        affiliations: ["Temple University"],
        orcid: ""
      }
    ],
    repository: "https://github.com/BeggarsOpera/BeggarsOpera.github.io",
    menuLinks: [
      {
        name: "Introduction",
        link: "/"
      },
      {
        name: "CeTEIcean",
        link: "/ceteicean"
      },
      {
        name: "TEI Boilerplate",
        link: "/teibp/tei/BeggarsOpera.xml"
      }
    ]
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-material-ui`,
    `gatsby-theme-ceteicean`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `static/tei`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `introduction`,
        path: `src/introduction`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `background`,
        path: `src/introduction`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Scholarly Editing`,
        short_name: `Scholarly Editing`,
        start_url: `/`,
        icon: `src/images/se-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
