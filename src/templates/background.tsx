import React from "react"

import SEO from "../components/seo"
import { ThemeProvider, Theme, StyledEngineProvider } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import CssBaseline from "@mui/material/CssBaseline"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

import theme from "../theme"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


interface Props {
  pageContext: {
    title?: string
    html: string
  },
  location: string
}

const useStyles = makeStyles({
  orcid: {
    marginLeft: ".5rem"
  },
  Content: {
    "& p": {
      textIndent: "2rem"
    },
    "& p:first-of-type, & h2 + p, & h3 + p, & h4 + p, & h5 + p, & h6 + p, & .noindent p": {
      textIndent: "0"
    },
    "& blockquote": {
      marginLeft: "5rem"
    },
    "& .footnote-backref": {
      marginLeft: ".75rem"
    }
  }
})

export default function Introduction({pageContext}: Props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            htmlTitle
          }
        }
      }
    `
  )

  const classes = useStyles()

  return (
    <Layout location="background">
      <SEO title="Background" />
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container component="main" maxWidth="md">
          <Typography variant="h3" component="h2" gutterBottom sx={{marginBottom: '0.5rem'}} dangerouslySetInnerHTML={
            {__html: site.siteMetadata.htmlTitle}
          } />
          {pageContext.title ?
            <Typography variant="h4" component="h3" gutterBottom sx={{marginBottom: '1.5rem'}} dangerouslySetInnerHTML={
              {__html: pageContext.title}
            } />
          : ''}
          <Typography
            className={classes.Content}
            variant="body1"
            gutterBottom
            component="div"
            dangerouslySetInnerHTML={{ __html: pageContext.html }}
          />
          </Container>
        </ThemeProvider>
      </StyledEngineProvider>
    </Layout>
  );
}
