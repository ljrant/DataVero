# Datavero – modulaarinen sivusto

Sivun sisältö on jaettu `sections/`-kansion osiin.

## Osion siirtäminen

Muuta vain `index.html`-tiedoston `data-include`-rivien järjestystä.

Esimerkiksi:

```html
<div data-include="sections/hero.html"></div>
<div data-include="sections/luvut.html"></div>
<div data-include="sections/mista-on-kyse.html"></div>
```

## Osion muokkaaminen

Muokkaa suoraan vastaavaa tiedostoa `sections/`-kansiossa.

Esimerkiksi aikataulu:

`sections/aikataulu.html`

## Huomio

Osien lataaminen käyttää JavaScriptin `fetch()`-toimintoa.
Se toimii GitHub Pagesissa, mutta jos avaat `index.html`:n suoraan koneelta
`file://`-osoitteena, selain voi estää osien lataamisen.
