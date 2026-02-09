exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  await makeIntroduction(createPage, reporter, graphql)
}

async function makeIntroduction(createPage, reporter, graphql) {
  const introductionComponent = require.resolve(`./src/templates/introduction.tsx`)
  const backgroundComponent = require.resolve(`./src/templates/background.tsx`)

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const component = node.frontmatter.path === "/background"
      ? backgroundComponent
      : introductionComponent

    createPage({
      path: node.frontmatter.path,
      component,
      context: {
        html: node.html,
        title: node.frontmatter.title
      }
    })
  })
}
