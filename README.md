# Success Lane

Success Lane connects developers with mentors worldwide. The site introduces the project, explains its mission, and gives visitors a way to get in touch.

## Pages

- **Home** (`/`) — navigation, introduction, About, Mission, and Contact
- **Sign in** (`/auth/login`) — account sign-in form
- **Terms, Privacy, and Cookies** — opened from the footer

The slogan on the home page is “Connecting developers with mentors worldwide.”

## Contact details

The contact section shows the Success Lane details from `src/config/constants.js`:

- Email: `hello@successlane.com`
- Phone and address, when those values are set

Copy `.env.example` to `.env` to override them without editing the source:

```
VITE_EMAIL=hello@successlane.com
VITE_PHONE=
VITE_ADDRESS=
```

Social profile links use the same file (`VITE_FACEBOOK_URL`, `VITE_INSTA_URL`, `VITE_TWITTER_URL`, and `VITE_GITHUB_URL`). An icon is shown only when its link is set.

## Requirements

- Node.js 18 or newer
- npm

## Getting started

```sh
npm install
npm start
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

## Production build

```sh
npm run build
npm run preview
```

`npm run build` writes the site to `dist/`.

## Scripts

| Script | What it does |
| --- | --- |
| `npm start` | Compiles translations and CSS, then starts Vite |
| `npm run build` | Creates the production build in `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run i18n-extract` | Collects new translation keys |
| `npm run i18n-compile` | Compiles the translation catalogs |

## Stack

- [Vite](https://vitejs.dev/)
- React
- Tailwind CSS for layout utilities
- Sass modules for older component styles
- [Lingui](https://lingui.js.org/) for English, Spanish, and French copy

Visible copy lives in `src/config/i18n/en/messages.json`. After editing that file, run `npm run i18n-compile`.

## Project structure

```
index.html              Vite entry
src/index.js            React entry
src/containers/App      Router
src/pages/home          Home page
src/pages/auth          Sign in
src/pages/static        Terms, privacy, and cookies
src/config/constants.js Contact details and social links
public/                 Static files copied as-is
```
