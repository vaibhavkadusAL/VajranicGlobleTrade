import fs from 'fs';
import path from 'path';

// Import products data (Need to use readFileSync and parse it loosely since it's an ES module with imports, or just build a basic one)
// I will just build a static JSON file for now based on what I know.

const catalog = {
  "@context": "https://schema.org/",
  "@type": "ProductCatalog",
  "name": "Vajranic Global Trade Product Catalog",
  "description": "Premium Indian agricultural products, fresh fruits, vegetables, and grains exported globally.",
  "url": "https://vajranicglobal.com/products",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Product",
        "name": "Mango",
        "description": "Premium Indian Mangoes. Export Quality, Grade A",
        "url": "https://vajranicglobal.com/product/mango"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Product",
        "name": "Green Grapes",
        "description": "Sweet and juicy Green Grapes. Grade A, Seedless",
        "url": "https://vajranicglobal.com/product/grapes"
      }
    }
  ]
};

fs.writeFileSync(path.join(process.cwd(), 'public/ai-catalog.json'), JSON.stringify(catalog, null, 2), 'utf8');
console.log('ai-catalog.json created.');
