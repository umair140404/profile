// Builds an absolute URL for a file in the public/ folder.
//
// Assets are referenced by relative name in the YAML data (e.g.
// "profile-pic.jpg"). With HashRouter the page URL can be "/profile#/"
// (no trailing slash), which makes a bare relative path resolve to
// "/profile-pic.jpg" and 404. Prefixing with PUBLIC_URL ("/profile") makes
// the path absolute and stable regardless of the current route.
const assetUrl = (path = "") => {
  if (!path) return path;
  if (/^https?:\/\//.test(path)) return path; // already absolute
  const base = process.env.PUBLIC_URL || "";
  return `${base}/${path.replace(/^\/+/, "")}`;
};

export default assetUrl;
