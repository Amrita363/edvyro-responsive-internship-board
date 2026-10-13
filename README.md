# Launchpad — Responsive Internship Board

A framework-free internship listing interface built with semantic HTML, responsive CSS, and vanilla JavaScript.

## Features
- Responsive layouts for mobile, tablet, and desktop
- Search by role, company, domain, location, or skill
- Domain and work-mode filters that can be combined
- Live result count and active-filter summary
- Empty state with a one-click reset
- Error-state UI and retry interaction
- Accessible form labels, skip link, keyboard-friendly controls, focus indicators, and a keyboard-dismissible details dialog
- Save/unsave opportunity controls
- Reusable card rendering from structured JavaScript data
- Fictional sample opportunities, clearly labelled as demo data
- Reduced-motion preference support

## Run locally
No framework or package installation is required. Open `index.html` in a browser, or run a local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Test checklist
- [ ] Desktop layout (1280px and above)
- [ ] Tablet layout (768px)
- [ ] Mobile layout (360px)
- [ ] Search by title, company, and skill
- [ ] Combine domain and work-mode filters
- [ ] Clear filters from the empty state
- [ ] Save and unsave a listing
- [ ] Open and close details with the mouse and keyboard
- [ ] Navigate controls using Tab and Shift+Tab
- [ ] Confirm there is no horizontal overflow

## Data note
The brief supplies a fictional internship-records seed. This project uses fictional sample records in `app.js` so it runs offline without an external API. Replace the sample `records` array with the supplied seed JSON if the reviewer expects that exact dataset.

## Deployment
You can publish this static site with GitHub Pages:
1. Create a public repository and upload `index.html`, `styles.css`, `app.js`, and `README.md`.
2. Open **Settings → Pages** in the repository.
3. Choose **Deploy from a branch**, select `main` and `/ (root)`, and save.
4. Wait for the deployment URL to appear, then open it in a private/incognito window to verify access.
5. Submit the repository URL or the live Pages URL as allowed by your dashboard.

## Scope
This is a demonstration board, not a live job platform. Listing content is fictional and no application submissions are processed.
