import React from "react"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import { Box } from "@mui/material"

const styles = {
  footer: {
    backgroundColor: "#efefef",
    padding: "1.5rem 0",
    borderTop: "1px solid #dadada",
    fontSize: "0.875rem",
    lineHeight: 1.8,
  },
  logo: {
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  }
}

interface Props {
  repository: string
}

const Footer = ({repository} : Props) => (
  <Box component="footer" sx={styles.footer}>
    <Container maxWidth="lg">
      <Grid container={true}>
        <Grid item={true} xs={12}>
          <p style={{margin: "0 0 0.5rem 0"}}>
            <a
              rel="license"
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            >
              <img
                alt="Creative Commons License"
                src="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png"
              />
            </a>
          </p>
          <p style={{margin: "0 0 0.5rem 0"}}>
            This work is licensed under a{" "}
            <a
              rel="license"
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            >
              Creative Commons Attribution-NonCommercial-ShareAlike 4.0
              International License
            </a>.
          </p>
          <p style={{margin: "0 0 0.5rem 0"}}>
            The open source code for this micro-edition is available at{" "}
            <a href={repository}>{repository}</a>.
          </p>
          <p style={{margin: "0 0 0.5rem 0"}}>
            This is a <strong>Micro-Edition</strong> published by Scholarly Editing.
          </p>
          <p style={{margin: 0}}>
            © {new Date().getFullYear()} Scholarly Editing.
            {" "}ISSN 2167-1257 | DOI{" "}
            <a href="https://doi.org/10.55520/6ZH06EW2">10.55520/6ZH06EW2</a>
          </p>
        </Grid>
      </Grid>
    </Container>
  </Box>
)

export default Footer