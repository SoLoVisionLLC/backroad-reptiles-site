import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (fs.existsSync(indexHtmlPath)) {
  const routes = [
    'shop.html',
    'visit.html',
    'care.html',
    'animals-and-care.html',
    'contact.html',
    'policies.html',
    '404.html'
  ];

  const htmlContent = fs.readFileSync(indexHtmlPath, 'utf8');

  for (const route of routes) {
    const target = path.join(distDir, route);
    fs.writeFileSync(target, htmlContent, 'utf8');
  }

  console.log(`✓ Postbuild: Generated ${routes.length} static route entry points in dist/`);
}
