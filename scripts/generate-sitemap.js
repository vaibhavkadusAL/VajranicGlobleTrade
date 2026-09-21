import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://www.vajranicglobaltrade.com';

// Format date as YYYY-MM-DD
const today = new Date().toISOString().split('T')[0];

const staticPages = [
  '',
  '/about',
  '/products',
  '/contact'
];

async function generateSitemap() {
  console.log('Generating sitemap...');
  
  // Read products.js as text to avoid ES module import issues with image assets
  const productsFilePath = path.join(__dirname, '../src/data/products.js');
  const productsContent = fs.readFileSync(productsFilePath, 'utf-8');
  
  // Extract all ids using regex
  // Looks for: id: 'something' or id: "something"
  const regex = /id:\s*['"]([^'"]+)['"]/g;
  const productIds = [];
  let match;
  
  while ((match = regex.exec(productsContent)) !== null) {
    productIds.push(match[1]);
  }
  
  console.log(`Found ${productIds.length} products for sitemap.`);

  // Generate XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Add static pages
  staticPages.forEach(page => {
    xml += `  <url>\n`;
    xml += `    <loc>${DOMAIN}${page}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${page === '' ? 'weekly' : 'monthly'}</changefreq>\n`;
    xml += `    <priority>${page === '' ? '1.0' : '0.8'}</priority>\n`;
    xml += `  </url>\n`;
  });

  // Add product pages
  productIds.forEach(id => {
    xml += `  <url>\n`;
    xml += `    <loc>${DOMAIN}/product/${id}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;

  // Write to public directory
  const outputPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, xml);
  
  console.log(`Sitemap successfully generated at ${outputPath}`);
}

generateSitemap();
