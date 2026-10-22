# Infortac

Spanish-language company website built with React and Vite.

## Development

Use Node.js 24 and npm:

```sh
npm ci
npm run dev
```

## Checks

```sh
npm run lint
npm test
npm run build
npm audit
```

Pull requests run these checks through GitHub Actions.

## Publishing

Run `npm ci` followed by `npm run build` and publish the **contents of `dist/`** at the domain root. The repository root contains source files and cannot be served directly as the production website. `npm run preview` serves the build locally for review.

The build includes standalone redirects from `/about.html`, `/services.html`, `/productos.html`, and `/contact.html` to the corresponding sections of the home page. They work on static hosting without rewrite rules. Where supported, configure HTTP 301 redirects for these paths to `/#nosotros`, `/#servicios`, `/#productos`, and `/#contacto`, respectively.

The hosting provider and production deployment are managed separately; this repository's workflow validates changes but does not deploy them.

## Contact

The form prepares a message in the visitor's email application or WhatsApp. The visitor reviews and sends it there; the website does not send messages itself and needs no email service credentials. The interface explicitly describes this handoff and retains entered fields when opening WhatsApp in a new tab.

## Product images

Images live in `public/images/`. DML 001, 005, 006 and BVDR use the supplied WebP photos. DML 002 retains its original JPEG because no matching replacement was supplied. Product images use `object-contain` to preserve packaging, labels and discs without cropping.

The client-requested experience claim is 35+ years. Unconfirmed founding-date and opening-hours metadata is omitted.

## Analytics

GA4 tracks visits, section views and contact/CTA clicks after visitor opt-in. `.env.production` contains the public Measurement ID `G-K5BNKZ1R1N`; build environments can override `VITE_GA_MEASUREMENT_ID`. See [analytics setup and monthly reports](docs/analytics.md) for the event catalog, AWS build configuration and GA4 dashboard instructions.
