import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { HOME, PAGES, SITE_URL } from '../src/data/pages.js'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const pagePaths = [HOME.path, ...PAGES.map(({ path: pagePath }) => pagePath)]
const titles = new Set()

for (const pagePath of pagePaths) {
  const filename = pagePath === '/' ? 'index.html' : `${pagePath.slice(1)}index.html`
  const html = await fs.readFile(path.join(dist, filename), 'utf8')
  const title = html.match(/<title>(.*?)<\/title>/)?.[1]
  const canonical = html.match(/<link rel="canonical" href="(.*?)"\s*\/?\s*>/)?.[1]

  assert.ok(title, `${filename} must have a title`)
  assert.ok(!titles.has(title), `SEO title must be unique: ${title}`)
  titles.add(title)
  assert.equal(canonical, `${SITE_URL}${pagePath}`, `${filename} must use its canonical URL`)
  assert.match(html, /<h1[\s>]/, `${filename} must contain a rendered H1`)
  assert.match(html, /<meta name="description" content="[^"]+"/, `${filename} must have a meta description`)
  assert.match(html, /<meta name="robots" content="index, follow, max-image-preview:large"/, `${filename} must be indexable`)

  const structuredData = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  assert.ok(structuredData.length, `${filename} must include structured data`)
  for (const [, json] of structuredData) assert.doesNotThrow(() => JSON.parse(json), `${filename} must contain valid JSON-LD`)
}

const sitemap = await fs.readFile(path.join(dist, 'sitemap.xml'), 'utf8')
for (const pagePath of pagePaths) assert.ok(sitemap.includes(`<loc>${SITE_URL}${pagePath}</loc>`), `sitemap must include ${pagePath}`)
const notFound = await fs.readFile(path.join(dist, '404.html'), 'utf8')
assert.match(notFound, /<meta name="robots" content="noindex, follow"/, '404 page must not be indexed')
assert.match(notFound, /No encontramos esta página/, '404 page must render helpful content')

console.log(`Validated ${pagePaths.length} canonical pages, sitemap entries, JSON-LD, and the noindex 404 page.`)
