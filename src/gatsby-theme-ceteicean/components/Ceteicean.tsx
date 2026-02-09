import React, { useMemo, useState } from "react"
import { IGatsbyImageData } from "gatsby-plugin-image"
import { graphql, useStaticQuery, withPrefix } from "gatsby"
import Ceteicean, {Routes} from "gatsby-theme-ceteicean/src/components/Ceteicean"
import {
  Tei,
  TeiHeader
} from "gatsby-theme-ceteicean/src/components/DefaultBehaviors"
import Pb from "./Pb"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Container from "@mui/material/Container"
import { Helmet } from "react-helmet"

interface Props {
  pageContext: {
    name: string
    prefixed: string
    elements: string[]
  },
  location: string
}

export interface Fac {
  name: string
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
}

const EditionCeteicean = ({pageContext}: Props) => {
  const isMerged = pageContext.name.includes("tei-boilerplate")
  const [theme, setTheme] = useState("default")
  const [showPageBreaks, setShowPageBreaks] = useState(true)

  const themeHref = useMemo(() => {
    const themeMap: Record<string, string> = {
      default: withPrefix("/teibp/static/css/teibp.css"),
      sleepy: withPrefix("/teibp/static/css/sleepy.css"),
      terminal: withPrefix("/teibp/static/css/terminal.css")
    }
    return themeMap[theme] || themeMap.default
  }, [theme])

  const queryData = useStaticQuery(graphql`
  query general {
    facs: allFile(filter: {relativeDirectory: {in: "facs"}}) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`)
const facs: Fac[] = queryData.facs.nodes

  const routes: Routes = {
    "tei-tei": Tei,
    "tei-teiheader": TeiHeader,
    "tei-pb": (props) => <Pb facs={facs} {...props}/>,
  }

  return(
    <Layout location={pageContext.name} wideHeader={isMerged}>
      <SEO title="Edition" />
      {isMerged && (
        <Helmet>
          <link rel="stylesheet" href={themeHref} />
          <link rel="stylesheet" href={withPrefix("/teibp/static/css/custom.css")} />
        </Helmet>
      )}
      {isMerged && (
        <div className="teibp-toolbar">
          <label>
            <input
              type="checkbox"
              checked={showPageBreaks}
              onChange={() => setShowPageBreaks(!showPageBreaks)}
            />
            Page breaks
          </label>
          <label>
            Theme
            <select value={theme} onChange={(event) => setTheme(event.target.value)}>
              <option value="default">Default</option>
              <option value="sleepy">Sleepy</option>
              <option value="terminal">Terminal</option>
            </select>
          </label>
        </div>
      )}
      {isMerged ? (
        <div className={`merged-tei-wrapper${!showPageBreaks ? " hide-pb" : ""}`}>
          <Ceteicean pageContext={pageContext} routes={routes} />
        </div>
      ) : (
        <Container component="main" maxWidth="md">
          <Ceteicean pageContext={pageContext} routes={routes} />
        </Container>
      )}
      {isMerged && (
        <style>{`
          .teibp-toolbar {
            display: flex;
            gap: 16px;
            align-items: center;
            padding: 8px 0;
            max-width: 1600px;
            margin: 0 auto;
            padding-left: 24px;
            padding-right: 24px;
          }
          .teibp-toolbar label {
            display: inline-flex;
            gap: 8px;
            align-items: center;
          }
          .merged-tei-wrapper {
            max-width: 1600px;
            width: 100%;
            margin: 0 auto;
            padding: 0 24px;
          }
          .merged-tei-wrapper.hide-pb tei-pb,
          .merged-tei-wrapper.hide-pb .-teibp-pb {
            display: none;
          }
        `}</style>
      )}
    </Layout>
  )

}

export default EditionCeteicean
