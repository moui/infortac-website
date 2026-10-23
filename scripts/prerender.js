import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'
import { HOME, PAGES, SITE_URL } from '../src/data/pages.js'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const sitemapPaths = [HOME.path, ...PAGES.map((page) => page.path)]
const vite = await createServer({ configFile: path.join(root, 'vite.config.js'), mode: 'production', server: { middlewareMode: true, hmr: false }, appType: 'custom', logLevel: 'error' })

try {
  const { renderPage } = await vite.ssrLoadModule('/src/entry-server.jsx')
  const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8')
  const seoMarker = /<!--seo:start-->[\s\S]*?<!--seo:end-->/

  if (!seoMarker.test(template)) throw new Error('SEO metadata markers are missing from index.html')

  for (const urlPath of sitemapPaths) {
    const { html, seo } = renderPage(urlPath)
    const output = template.replace(seoMarker, seo).replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    const outputPath = urlPath === '/' ? path.join(dist, 'index.html') : path.join(dist, urlPath, 'index.html')
    await fs.mkdir(path.dirname(outputPath), { recursive: true })
    await fs.writeFile(outputPath, output)
  }

  const { html: notFoundHtml, seo: notFoundSeo } = renderPage('/404.html')
  const notFound = template
    .replace(seoMarker, notFoundSeo.replace('<meta name="robots" content="index, follow, max-image-preview:large" />', '<meta name="robots" content="noindex, follow" />'))
    .replace('<div id="root"></div>', `<div id="root">${notFoundHtml}</div>`)
  await fs.writeFile(path.join(dist, '404.html'), notFound)

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...sitemapPaths.map((url) => `  <url><loc>${SITE_URL}${url}</loc></url>`),
    '</urlset>',
  ].join('\n')
  await fs.writeFile(path.join(dist, 'sitemap.xml'), `${sitemap}\n`)
  console.log(`Pre-rendered ${sitemapPaths.length} search pages, a noindex 404 page, and the XML sitemap.`)
} finally {
  await vite.close()
}
