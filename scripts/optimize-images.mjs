import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const assetsDir = path.join(process.cwd(), 'src/assets');
const productsFile = path.join(process.cwd(), 'src/data/products.js');

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        await optimizeImage(fullPath);
      }
    }
  }
}

async function optimizeImage(filePath) {
  try {
    const ext = path.extname(filePath);
    const newPath = filePath.replace(new RegExp(`${ext}$`, 'i'), '.webp');
    const isNavbarOrSymbol = filePath.toLowerCase().includes('navbar') || filePath.toLowerCase().includes('symbol');
    
    const metadata = await sharp(filePath).metadata();
    
    // Resize targets
    const maxWidth = isNavbarOrSymbol ? 250 : 800;

    let s = sharp(filePath);
    if (metadata.width > maxWidth) {
      s = s.resize(maxWidth);
    }

    // Convert to webp
    await s.webp({ quality: 80 }).toFile(newPath + '.tmp');
    
    // Replace old file with new webp
    if (fs.existsSync(newPath)) {
      fs.unlinkSync(newPath);
    }
    fs.renameSync(newPath + '.tmp', newPath);
    
    // If we changed extension, delete old file
    if (ext.toLowerCase() !== '.webp' && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`Converted and resized: ${path.basename(filePath)} -> ${path.basename(newPath)}`);
    } else {
      console.log(`Resized: ${path.basename(filePath)}`);
    }

  } catch (err) {
    console.error(`Error processing ${filePath}:`, err);
  }
}

async function run() {
  console.log('Optimizing images...');
  await processDirectory(assetsDir);
  console.log('Updating imports in products.js...');
  
  let content = fs.readFileSync(productsFile, 'utf8');
  content = content.replace(/\.jpg/gi, '.webp')
                   .replace(/\.jpeg/gi, '.webp')
                   .replace(/\.png/gi, '.webp');
                   
  fs.writeFileSync(productsFile, content, 'utf8');
  console.log('Done!');
}

run();
