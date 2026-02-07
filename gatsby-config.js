const basePath = "/"
const title = "The Beggars Opera"
const htmlTitle = "The Beggars Opera"

module.exports = {
  pathPrefix: basePath,
  siteMetadata: {
    issue: {
      full: "The Beggars Opera",
      short: "1st Edition",
      path: "/"
    },
    doi: '10.55520/6ZH06EW2',
    group_order: 1,
    title,
    htmlTitle,
    description: `A Scholarly Edition of ${title}. Edited by Steve Newman, Fred Rowland, and Alex Wermer-Colan.`,
    authors: [
      {
        "first": "Steve",
        "last": "Newman",
        "affiliations": [
          "Temple University"
        ]
      },
      {
        "first": "Fred",
        "last": "Rowland",
        "affiliations": [
          "Temple University"
        ]
      },
      {
        "first": "Alex",
        "last": "Wermer-Colan",
        "affiliations": [
          "Temple University"
        ],
        "middle": "",
        "orcid": ""
      }
    ],
    repository: "https://github.com/BeggarsOpera/BeggarsOpera.github.io",
    menuLinks: [
      {
        name: 'Introduction',
        link: '/'
      },
      {
        name: 'Background',
        link: '/background'
      },
      {
        name: "Beggar's Opera",
        link: '/embedSVG_bo1'
      },
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
        icon: `src/images/se-icon.png`,
      },
    },
  ],
}
