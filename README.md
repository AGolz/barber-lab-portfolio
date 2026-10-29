# BARBER LAB

A static, trilingual barbershop portfolio. Armenian is the default language; Russian and English are available from the language switcher.

## Project structure

- `barber/index.html` — Armenian home page
- `barber/ru.html` — Russian page
- `barber/en.html` — English page
- `barber/style.css` — shared styles
- `barber/script.js` — mobile navigation and demo booking form
- `barber/assets/` — local stock photos

The contact details and barber profiles are fictional. The photos are stock images and do not represent actual BARBER LAB staff or client work. The booking form is a front-end demo and does not send submissions.

## Preview locally

Open `barber/index.html` in a browser. No build step or package installation is required.

## Deploy to Netlify

The root `netlify.toml` already sets `barber/` as the publish directory. There is no build command.

1. Push this repository to GitHub.
2. In Netlify, choose **Add new site** and import the GitHub repository.
3. Keep the build command empty. Netlify will read the publish directory from `netlify.toml`.
4. Deploy the site.

The Armenian home page will be served at the site root. The other language pages are available at `/ru.html` and `/en.html`.