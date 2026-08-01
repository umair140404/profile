# Profile Website

Live at: https://umair140404.github.io/profile/

Personal research website for Umair Yousaf. Built with React (Create React App +
CRACO), Tailwind CSS, and DaisyUI, with client-side routing via `react-router-dom`.

## Editing content

All site content lives in easy-to-edit **YAML** files under [`src/data/`](src/data):

| File | Controls |
| --- | --- |
| `profile.yaml` | Name, tagline, email, location, résumé, photo, affiliations, and the About Me bio (Markdown). |
| `nav.yaml` | The navbar tabs and their routes. |
| `interests.yaml` | Research Interests cards (Home page). |
| `currentProjects.yaml` | The Research page cards (name, org, status, tags, description, links). |
| `education.yaml` | Education entries (Experience page). |
| `experience.yaml` | Work Experience timeline (Experience page). |
| `teaching.yaml` | Teaching timeline (Experience page). |
| `pastProjects.yaml` | Past Projects (Projects page). |
| `awards.yaml` | Honors & Awards (Projects page). |
| `life.yaml` | Candid photo cards + captions (Life page). |
| `socials.yaml` | Social links in the hero and footer. |

To add a photo to the **Life** page: drop the image in [`public/gallery/`](public/gallery)
and add an entry to `life.yaml` with its `image` path (relative to `public/`) and a
`caption`. Missing/broken images fall back to a placeholder automatically.

> **YAML tip:** if a value contains a colon-space (`: `), wrap it in quotes, e.g.
> `"Technologies: SDH, OTN, DWDM"`, otherwise YAML reads it as a key/value pair.

The bio in `profile.yaml` and the descriptions support **Markdown**, so you can
add inline links with `[text](https://url)`.

## Pages

The site is split into tabs (routes), one file each in [`src/pages/`](src/pages):
`Home`, `Research`, `Experience`, and `Projects`.

## Develop & deploy

```bash
npm install      # first time only
npm start        # local dev server
npm run build    # production build
npm run deploy   # build + publish to GitHub Pages
```
