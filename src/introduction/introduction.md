---
path: "/"
---

# The Beggar's Opera: A Digital Edition

The Beggar's Opera: A Site for Scholars, Performers, Teachers and Students breaks new ground by providing the first scholarly digital edition of the play and the first that makes substantial use of the multimedia functionalities of a digital environment, bringing the play alive both in its time and ours.

**A new editorial approach:** This site offers the only accessible edition of The Beggar's Opera that integrates what scholars agree is the authoritative edition of the text (the first) and the music (the third), with some textual changes in the second and third that seem to have authorial warrant. Recent editions by Lewis (1973), Fuller (1983), and Gladfelder (2013), do not include the music, reasoning that it can be found elsewhere, as in Barlow's standard edition of the music only (1990). But this splits apart the essential twinning of text and music, word and song at the heart of the play. This edition also seeks to acknowledge recent challenges to authorial intent as the determining criterion by retaining inconsistencies in printing where there is no good reason to assume authorial intent, thereby acknowledging the contingencies of the publication process. More on the editorial principles behind this edition can be found here.

## Background

Since The Beggar's Opera was first staged in 1728, it has been, along with Gulliver's Travels and Robinson Crusoe, among the most influential and enduring texts from the English eighteenth century and indeed in the whole of English Literature. It has been performed countless times by professional and amateur troupes; it has been printed and reprinted in innumerable editions; and it has inspired adaptations from a remarkable range of artists, among them Bertolt Brecht, Elizabeth Hauptmann, and Kurt Weill's Threepenny Opera (1928), Duke Ellington and John La Touche's Beggar's Holiday (1946), Vaclav Havel's Žebrácká Opera (1975), Wole Soyinka's Opera Wonyosi (1977), and Stephen Jeffreys' The Convict's Opera (2008). It remains a vibrant presence on the stage, performed at the Edinburgh Festival in 2018 and the next year the adaptation Dead Dog in a Suitcase was re-staged at the Lyric Hammersmith, site of the famous revival in 1921 that inspired The Threepenny Opera. The play also continues to spark interest in other countries; The Beggar's Opera was staged at Versailles in 2019, and last year in Paris Helene Ducos performed her adaptation, "Minuit Montmartre: Rag-Opera."

<div style="text-align: center; margin: 2rem 0;">
  <img src="/John_Gay.jpg" alt="Portrait of John Gay" style="max-width: 400px; width: 100%; height: auto;" />
  <p style="font-style: italic; font-size: 0.9em; margin-top: 0.5rem;">John Gay, author of The Beggar's Opera</p>
</div>

If we wish to understand the origins of the modern musical or political satire and the continuing relevance of Gay's play to our time, we must study it. Yet despite its ubiquity, importance, and congeniality to a digital environment where its blend of text, music, and image might properly be brought to life, no site has yet realized the play's potential to inform and stimulate students and scholars or brought together authoritative editions of the text and music. This will also be one of the few digital projects bringing together music, text, and image, and will thus be useful to others seeking to do the same.

## Editorial Approach

The only recent editions to include the music are faulty in other ways. Lindley and Jones (2010) do not include the overture, despite using the third edition as the music copy-text, and they follow the second edition's integration of the music into the body of the text, even though there is good reason to believe that the third edition, which reverts to the first's practice of putting the scored music at the end, had authorial sanction. The other version from the past to print music and text, from Project Gutenberg (2008)—which is also the only other online version—reprints Lovat Fraser's 1921 edition, which, though historically significant, is itself based on the non-standard 1765 edition. Other editions that combine text and music are either long out of print (Roberts and Smith, 1969) and/or are problematic in other ways.

## Technical Infrastructure

This digital edition was built using open-source tools for TEI presentation:

- **[CETEIcean](https://github.com/TEIC/CETEIcean)** - A JavaScript library for displaying TEI XML in the browser, developed by the TEI Consortium
- **[gatsby-theme-ceteicean](https://github.com/cu-mkp/gatsby-theme-ceteicean)** - A Gatsby starter theme for creating CETEIcean-based digital editions, developed by the Making and Knowing Project at Columbia University
- **[TEI Boilerplate](https://github.com/GrantLS/TEI-Boilerplate)** - An XSLT-based framework for publishing TEI documents directly in web browsers, created by Grant Leyton Simpson

We are grateful to the creators and maintainers of these projects for making scholarly digital editions more accessible.
