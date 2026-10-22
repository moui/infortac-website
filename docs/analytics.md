# Google Analytics 4

## Create the property

1. Sign in at https://analytics.google.com/ using the business's Google account.
2. Create an account/property named **Infortac**. Set the reporting time zone to **Uruguay / Montevideo** and currency to **UYU**.
3. Add a **Web** data stream for `https://www.infortac.com`.
4. Disable **Enhanced measurement** for this stream. The site explicitly records page views, section views and relevant clicks. Automatic form/outbound/history events would add unnecessary or duplicate events.
5. Copy the stream's **Measurement ID**, starting with `G-`. No API secret or service-account key is needed.

Google's setup guide: https://support.google.com/analytics/answer/14183469

## Configure the website build

The production property is configured as **`G-K5BNKZ1R1N`** in the committed `.env.production` file. `npm run build` includes it automatically. No separate AWS environment variable is required for this property.

To override it for a different property, copy `.env.example` to `.env.local` and set:

```dotenv
VITE_GA_MEASUREMENT_ID=G-YOURMEASUREMENTID
```

Alternatively, override the variable in the AWS build environment or the shell that builds the files uploaded to AWS. Vite embeds it at build time; changing an environment variable on a static host after uploading files has no effect. Rebuild and deploy `dist/` to activate a new ID. This ID is public, not a credential.

Analytics only loads in production builds on `infortac.com` or `www.infortac.com`, after the visitor accepts the statistics prompt. Local development and previews on other hosts do not send data. Without a valid ID, the prompt and integration are disabled.

Visitors can reject or withdraw consent using **Preferencias de estadísticas** below the footer. No Google tag loads before acceptance. Withdrawal disables further tracking and removes this property's first-party GA cookies. This does not delete events already received by Google.

## Events and dashboard

| Event | What it measures | Event parameters |
| --- | --- | --- |
| `page_view` | One home-page visit per page load after acceptance | Sanitized URL, referrer origin, fixed title |
| `section_view` | A section heading comes into view, once per page load | `section_id` |
| `navigation_click` | Header/footer section links | `section_id`, `placement` |
| `cta_click` | Services, quote and product inquiry buttons | `action`, `placement` |
| `contact_click` | Email, WhatsApp or map links; valid form handoffs | `channel`, `placement` |

Event values are restricted to a fixed list. Form names, phone numbers, email addresses, messages, destination query strings and page query/hash values are never added to these events. Campaign query parameters are also omitted; this setup uses referrer-based traffic attribution rather than UTM campaign attribution.

The app keeps advertising storage, advertising user data and personalization denied, and disables Google signals. Keep Enhanced measurement off in the GA4 console to preserve explicit event collection.

Use **Reports → Realtime** to verify events after deploying and accepting analytics. Standard reports can take time to populate. **Reports → Acquisition → Traffic acquisition** shows traffic sources; **Engagement → Events** shows click and section activity (report navigation varies by the selected business objectives).

In **Admin → Custom definitions**, create event-scoped dimensions for `section_id`, `placement`, `channel`, and `action` to break down these values in reports and explorations. You can mark `contact_click` as a key event, but it measures contact intent, not confirmation that a message was sent. The website cannot observe a completed WhatsApp/email message.

Counts reflect visitors who consent and whose browsers allow analytics. Section views are not separate page views.

## Monthly email report

As a GA4 property administrator:

1. Add the intended recipient as a property user with appropriate report access.
2. Open the desired report, then **Share this report → Schedule Email**.
3. Use the previous calendar month as the reporting range, choose **Monthly**, and schedule the first delivery for the **4th** of the month so late events can finish processing.
4. Choose recipients and **PDF** or **CSV**. Schedule the acquisition and events reports, or create a custom overview covering users, sessions, sources and contact clicks.
5. Select an active period (up to 12 months) and renew the schedule before it expires.

The user created the property and supplied its Measurement ID. Enhanced measurement settings, report recipients and the report schedule are configured separately in GA4; adding the website code does not create scheduled reports.

Google's report scheduling guide: https://support.google.com/analytics/answer/13722168

## Verification

Run `npm test` for consent, duplicate page views, event filtering, URL sanitization and contact-link encoding checks. For a browser check after deployment: reject analytics and confirm there is no Google tag request; accept and confirm one page view in Realtime; click CTAs/contact links; then withdraw consent and confirm tracking stops. Never send test contact messages merely to verify analytics.
