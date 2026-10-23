import { renderToString } from 'react-dom/server'
import App from './App'
import { HOME, PAGES, SITE_URL } from './data/pages'

const organization = {
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: 'Infortac',
  url: `${SITE_URL}/`,
  description: 'Análisis de discos de tacógrafo, datos satelitales y productos DML para empresas de transporte en Uruguay.',
  telephone: '+59894562495',
  email: 'infortac@adinet.com.uy',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Río de Janeiro M. 124 S. 4',
    addressLocality: 'Lagomar',
    addressRegion: 'Canelones',
    postalCode: '15100',
    addressCountry: 'UY',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -34.8381361,
    longitude: -55.9833471,
  },
  areaServed: { '@type': 'Country', name: 'Uruguay' },
  founder: { '@type': 'Person', name: 'Pablo Barrera' },
  image: `${SITE_URL}/images/slide1.jpg`,
}

function structuredData(page) {
  const canonical = `${SITE_URL}${page.path}`
  const graph = [
    organization,
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'Infortac',
      inLanguage: 'es-UY',
      publisher: { '@id': `${SITE_URL}/#business` },
    },
    {
      '@type': page.path === '/' ? 'WebPage' : 'Service',
      '@id': `${canonical}#page`,
      url: canonical,
      name: page.title,
      description: page.description,
      inLanguage: 'es-UY',
      provider: { '@id': `${SITE_URL}/#business` },
      ...(page.path === '/' ? {} : { areaServed: { '@type': 'Country', name: 'Uruguay' }, serviceType: page.label }),
      ...(page.path === '/' ? { mainEntity: { '@id': `${SITE_URL}/#business` } } : { mainEntityOfPage: canonical }),
    },
  ]

  if (page.path !== '/') {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${canonical}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: page.label, item: canonical },
      ],
    })
  }

  if (page.catalog) {
    const products = [
      ['DML 001', 'Disco Diagrama 7 días, 125 km/h'],
      ['DML 002', 'Disco Diagrama 24 horas, 125 km/h'],
      ['DML 005', 'Disco Diagrama 24 horas, 180 km/h'],
      ['DML 006', 'Disco Diagrama 7 días, 180 km/h'],
      ['DML BVDR', 'Bobina para tacógrafo digital BVDR'],
    ]
    graph.push({
      '@type': 'ItemList',
      '@id': `${canonical}#catalog`,
      name: 'Discos de tacógrafo DML y bobinas BVDR',
      itemListElement: products.map(([id, name], index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name,
        url: `${canonical}#producto-${id.toLowerCase().replace(/\s+/g, '-')}`,
      })),
    })
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}

function buildSeoBlock(page) {
  const canonical = `${SITE_URL}${page.path}`
  const image = `${SITE_URL}/images/slide1.jpg`
  const title = escapeAttribute(page.title)
  const description = escapeAttribute(page.description)
  const path = escapeAttribute(canonical)
  const json = JSON.stringify(structuredData(page)).replaceAll('<', '\\u003c')

  return [
    '<!--seo:start-->',
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    '<meta name="robots" content="index, follow, max-image-preview:large" />',
    `<link rel="canonical" href="${path}" />`,
    `<link rel="alternate" hreflang="es-UY" href="${path}" />`,
    `<link rel="alternate" hreflang="x-default" href="${path}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    '<meta property="og:type" content="website" />',
    `<meta property="og:url" content="${path}" />`,
    '<meta property="og:locale" content="es_UY" />',
    `<meta property="og:image" content="${image}" />`,
    '<meta property="og:image:width" content="2400" />',
    '<meta property="og:image:height" content="857" />',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<script type="application/ld+json">${json}</script>`,
    '<!--seo:end-->',
  ].join('\n    ')
}

export function renderPage(path) {
  const page = path === '/404.html' ? null : PAGES.find((candidate) => candidate.path === path) || HOME
  const titlePage = page || { path, title: 'Página no encontrada | Infortac', description: 'La página solicitada no se encontró en el sitio de Infortac.' }
  const document = renderToString(<App path={path} />)
  return { html: document, seo: buildSeoBlock(titlePage), page }
}
