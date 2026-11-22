# Blackhole Search

A responsive, static website with an animated black-hole background and public social-platform search shortcuts.

## What it does
- Enter a name or public username.
- Generates targeted public web-search links for 10 social platforms.
- Opens each search in a new tab.

## Important limitations
This starter intentionally does **not** scrape social networks, bypass logins, access private accounts, identify a person from a name alone, or generate a personal dossier. Search results are unverified leads; names are not unique. The site does not currently generate an automatic biography or verify that accounts belong to the same person.

Most social platforms restrict automated collection and many do not provide a general people-search API. For a production version with actual results, use each platform's official API where available, obtain required permissions, keep API credentials on a server (never in browser JavaScript), and show only public, non-sensitive profile information with clear source links.

## Run locally
Open `index.html` in a browser. No build step or dependencies are required.

## Put it on the internet
### Netlify (quickest)
1. Unzip this folder.
2. Sign in to Netlify.
3. Choose **Add new site → Deploy manually**.
4. Drag the unzipped `blackhole-search` folder onto the deploy area.

### GitHub Pages
1. Create a GitHub repository and upload the contents of this folder.
2. Open **Settings → Pages**.
3. Select deploy from your main branch and the root folder.
4. Save; GitHub will provide the public website address.

## Customization
- Edit `platforms` in `app.js` to add or remove public search targets.
- Edit colors, layout, and animation in `styles.css`.
