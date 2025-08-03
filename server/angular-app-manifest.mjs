
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://manojkumar2125.github.io/manoj-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/manoj-portfolio/about",
    "route": "/manoj-portfolio"
  },
  {
    "renderMode": 2,
    "route": "/manoj-portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/manoj-portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/manoj-portfolio/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/manoj-portfolio/about",
    "route": "/manoj-portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 546, hash: 'e0bddf039ece46f2341857781f45a62f5ceb85ab93d2b60b483b3514e733b78c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1059, hash: 'ec961f5d3be78c7e8e0b3c8ad7d835d33f0f03bfeaffe6f69945f18e0d18a9e8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 1168, hash: '511de5db600e3d75248eadae9234e7cc9d56ce7276d87270134bc4a553803d02', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 1191, hash: '28a0869d75c0a044555b816658c290011c84b2f09e10261099f8f1b22eea6136', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 1118, hash: 'a7f1fc900eae0898c37905ea68a8ac1efbd8d51103083057ef6673adfd179d12', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
