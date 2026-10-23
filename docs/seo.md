# SEO and Search Console setup

The public site uses **https://www.infortac.uy/** as its canonical host. The `.com.uy` domain redirects to it, and the sitemap only lists canonical `.uy` URLs. The site currently has prerendered landing pages for tacograph analysis, DML/BVDR products, GPS analysis, and fleet reporting.

## Verify both domains in Google Search Console

In [Google Search Console](https://search.google.com/search-console/), add two **Domain** properties:

1. `infortac.uy`
2. `infortac.com.uy`

For each property, copy the exact DNS TXT value that Search Console gives you and add it at the registrar/DNS provider managing that domain. Leave the host/name field at the root value requested by that provider (often `@`). After DNS publishes the record, return to Search Console and choose **Verify**. A Domain property includes its `www` hostname and HTTP/HTTPS variants. The two different root domains require separate verification records. See Google's [ownership verification instructions](https://support.google.com/webmasters/answer/9008080) and [property setup details](https://support.google.com/webmasters/answer/34592).

The verification token is unique to the property and must come from the owner's Search Console account; it is intentionally not committed to this repository. The site owner needs access to both DNS zones to finish this step.

## Submit the sitemap and inspect indexing

After deployment and domain verification:

1. Select the `infortac.uy` Domain property and submit `https://www.infortac.uy/sitemap.xml` under **Sitemaps**. The same sitemap is referenced in `robots.txt`.
2. Use **URL inspection** on the home page and each service/product page. Confirm Google can fetch it, sees the canonical `.uy` URL, and can render the content.
3. Use **Pages / Indexing** and **Performance / Search results** to monitor indexing, search queries, clicks, and impressions over time. Request indexing for the new pages if useful; Google decides when and whether to index them.
4. In the `.com.uy` Domain property, inspect representative URLs to confirm they redirect to their `.uy` equivalents. Keep links and external business listings pointed at the canonical `.uy` URLs.

Google's [sitemap report guide](https://support.google.com/webmasters/answer/7451001) explains submission and status reporting. Sitemap submission helps discovery but does not guarantee indexing or rankings.

## Monthly reporting

For traffic and on-site click reports, use the GA4 monthly email schedule described in [analytics.md](./analytics.md). Search Console performance data is useful for search impressions, queries and clicks; export or schedule that report separately from GA4. The scheduled GA4 recipient requested for the property is `mouibarrera8@gmail.com`; that recipient still needs access to the GA4 property before an administrator can schedule delivery.
