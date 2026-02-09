import { Link, withPrefix } from "gatsby"
import React from "react"
import Container from "@mui/material/Container"

import Nav from "./nav"

import titleImg from "../images/se-title.png"
import banner from "../images/se-banner.jpg"
import theme from "../theme"

import styled from '@emotion/styled'

interface Links {
  name: string
  link: string
}

interface Props {
  location: string
  siteTitle: string
  menuLinks: Links[]
  doi: string
  wideHeader?: boolean
  issue: {
    short: string
    path: string
  }
}

// Styled components

const Banner = styled.div(() => ({
  backgroundImage: `url(${banner})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "brightness(1.5) opacity(80%)",
  paddingBottom: "1.45rem",
}))

const Wrapper = styled.header(() => ({
  background: theme.palette.secondary.main,
  marginBottom: "1.45rem",
}))

const Logo = styled.div(() => ({
  padding: "1.45rem 0 0 0",
  marginLeft: "-24px",
  "& a": {
    textDecoration: "none",
  },
  "& img": {
    maxWidth: "300px",
    padding: "10px 20px 15px 20px",
  },
}))

// LogoBkgr removed - no longer needed without Info component

// Main Component

const Header = ({ location, menuLinks, doi, issue, wideHeader }: Props) => (
    <Wrapper>
      <Banner>
        <Container maxWidth={wideHeader ? false : "md"} disableGutters={!!wideHeader}>
          <Logo>
            <Link to={withPrefix("/")}>
              <img src={titleImg} alt="Scholarly Editing Logo" width={200} />
            </Link>
          </Logo>
        </Container>
      </Banner>
      <Nav location={location} menuLinks={menuLinks} wideHeader={wideHeader} />
    </Wrapper>
)

export default Header
