const basePath = "/"
const title = "The Beggars Opera"
const htmlTitle = "The Beggars Opera"

module.exports = {
  pathPrefix: basePath,
  siteMetadata: {
    issue: {
      full: "The Beggars Opera",
      short: "Home",
      path: "/"
    },
    doi: '10.55520/FAKE',
    group_order: 1,
    title,
    htmlTitle,
    description: `A Scholarly Edition of. ${title}. Edited by Steve Newman, Fred Rowland, Alex Wermer-Colan.`,
    authors: [
      {
        "first": "Steve",
        "middle": "",
        "last": "Newman",
        "affiliations": [
          "Temple University"
        ],
        orcid:"0000-0000-0000-0000"
      },
      {
        "first": "Henry",
        "middle": "A",
        "last": "Wermer-Colan",
        "affiliations": [
          "Temple University"
        ],
        orcid:"0000-0000-0000-0000"
      },
      {
        "first": "Fred",
        "middle": "",
        "last": "Rowland",
        "affiliations": [
          "Temple University"
        ],
        orcid:"0000-0000-0000-0000"
      }
    ],
    repository: "https://github.com/BeggarsOpera/BeggarsOpera.github.io",
    menuLinks: [
      {
        name: 'introduction',
        link: '/'
      },
      {
        name: 'background',
        link: '/background'
      },
      {
        name: 'edition',
        link: '/example'
      },
      {
        name: 'beggars opera',
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
