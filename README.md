# Omar Adel Abouzeid — Portfolio

Static site (no build step). Entry point: `index.html`.

```
index.html
.nojekyll
assets/
  css/style.css
  js/main.js
  img/            nectar-store.webp  stude-mate.webp  looma.webp
                  todo-list-app.webp  geometric-data-visualization-system.webp
                  student-management-system.webp
  favicon.svg  favicon-32x32.png  apple-touch-icon.png
  logo-oa.svg  logo-oa-black.svg
```

All asset paths are relative and lowercase, so the site works under
`https://<user>.github.io/<repo>/` (GitHub Pages is case-sensitive).
Three.js, GSAP/ScrollTrigger (cdnjs) and Google Fonts load over HTTPS.

## Run locally
Browsers block WebGL textures from `file://`, so serve the folder:

    python3 -m http.server 8000     # then open http://localhost:8000

## Publish on GitHub Pages
1. Create a new repository on github.com (e.g. `portfolio`), public.
2. Upload the CONTENTS of this folder so `index.html` sits at the repo root
   (web: "Add file → Upload files", drag everything incl. the `assets` folder and `.nojekyll`; or use git:
   `git init && git add . && git commit -m "Portfolio" && git branch -M main &&
   git remote add origin https://github.com/<user>/portfolio.git && git push -u origin main`).
3. Repo → Settings → Pages → Build and deployment → Source: "Deploy from a branch",
   Branch: `main`, Folder: `/ (root)` → Save.
4. Wait 1–2 minutes. Your site is at `https://<user>.github.io/portfolio/`.
   (A repo named `<user>.github.io` publishes at `https://<user>.github.io/`.)
5. Hard-refresh (Ctrl/Cmd+Shift+R) to see the OA favicon; browsers cache icons aggressively.

## Editing project text
Projects live in the `P` array at the top of `assets/js/main.js`
(name, category, description, stack, GitHub URL, cover path in `IMG`).
