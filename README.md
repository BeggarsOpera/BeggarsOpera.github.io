# The Beggar's Opera: A Digital Edition

A scholarly digital edition of *The Beggar's Opera* using CETEIcean and TEI Boilerplate for presenting TEI-encoded texts.

**Live site:** https://beggarsopera.github.io/

## Features

- Two TEI rendering approaches: CETEIcean (JavaScript) and TEI Boilerplate (XSLT)
- Integrated text and music presentation
- Responsive design with Material-UI
- Automated deployment via GitHub Actions

## Technical Stack

- **Gatsby** - Static site generator
- **CETEIcean** - TEI XML to web components
- **TEI Boilerplate** - XSLT-based TEI rendering
- **gatsby-theme-ceteicean** - Gatsby starter theme
- **Material-UI** - React component library

## Development

```bash
npm install --legacy-peer-deps
npm run develop
```

## Build

```bash
npm run build
```

## Attribution

Built using open-source tools from:
- [CETEIcean](https://github.com/TEIC/CETEIcean) by TEI Consortium
- [gatsby-theme-ceteicean](https://github.com/cu-mkp/gatsby-theme-ceteicean) by Making and Knowing Project
- [TEI Boilerplate](https://github.com/GrantLS/TEI-Boilerplate) by Grant Leyton Simpson

## License

See [LICENSE](LICENSE) for details.
