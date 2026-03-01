import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider, Theme, StyledEngineProvider } from "@mui/material/styles";

import theme from "../theme"
import Header from "./header"
import Footer from "./footer"
import styled from '@emotion/styled'


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

type Children = JSX.Element | JSX.Element[]

interface Props {
  location?: string
  children?: Children
  wideHeader?: boolean
}

const Main = styled.div(() => ({
  paddingBottom: '1.45rem',
  minHeight: "60vh",
  "& h2, & h3": {
    paddingBottom: '1rem'
  }
}))

const Layout = ({ location, children, wideHeader }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          repository
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)
  
  const {repository, menuLinks} = data.site.siteMetadata

  const footer = <Footer repository={repository}/>

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header
          location={location || ''}
          menuLinks={menuLinks}
          wideHeader={wideHeader}
        />
        <Main>{children}</Main>
        {footer}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default Layout
