# Saral Raah Website — Fresh Build v1

This is a static, mobile-first bilingual website starter for Saral Raah.

## Included
- English / Hindi language switch
- Responsive homepage
- 10 service categories
- Customer requirement form → opens WhatsApp with a pre-filled message
- Provider / partner interest form → opens WhatsApp with a pre-filled message
- Business growth section
- Contact details and responsive navigation

## Important before publishing
1. Add the official, approved Saral Raah logo image to `assets/` and name it exactly `saral-raah-logo.png`.
   - Do not use a redesigned or substitute logo.
   - If you do not add it yet, the site displays a temporary text-based brand mark.
2. Confirm the WhatsApp number in `script.js` (`917047977177`).
3. Confirm email `connect@saralraah.com` and Instagram `@saralraah` in `index.html`.
4. Test every form on a phone before sharing the website publicly.

## How to upload manually through GitHub
1. Open `https://github.com/saralraah/saral-raah-website`.
2. Create a new branch named `rebuild/saral-raah-platform-v1` from `main`.
   - If GitHub blocks branch creation, check the GitHub App installation permissions or create the branch manually in GitHub.
3. Switch to the new branch.
4. Upload `index.html`, `styles.css`, `script.js`, and the `assets` folder contents to the repository root.
5. Commit to the new branch only. Do not commit to `main`.
6. Preview and test the new branch before creating a pull request or changing production settings.

## Cloudflare safety
- Do not change the production Worker, DNS records, or the live domain while testing.
- First configure a separate preview deployment/Worker that serves this branch.
- Only switch production after the owner has reviewed and approved the preview.

## Current limitations (intentional)
- No user accounts, online payments, provider verification claims, or admin dashboard.
- The forms open WhatsApp; they do not yet save enquiries to a database.
- Service categories are discovery entry points, not a live provider directory.
- Add a privacy policy and terms before collecting/storing personal information in a backend.
