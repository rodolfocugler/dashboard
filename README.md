# Dashboard

Home dashboard (news feeds, EUR/BRL rate, weather forecast, garden sensor) built with React, MUI and Vite.
Deployed to GitHub Pages by `.github/workflows/ci.yaml` on every push to `main`.

Services on the home server default to the host `pi-desktop`; override with `?domain=<host>` in the URL.

## Scripts

- `npm start` - dev server at http://localhost:3000/dashboard/
- `npm run build` - production build into `build/`
- `npm run preview` - serve the production build locally
- `npm run lint` - ESLint + Prettier
