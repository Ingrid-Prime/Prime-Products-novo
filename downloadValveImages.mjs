import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import https from 'https';

async function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 302) {
          https.get(res.headers.location, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res2) => {
              const file = fs.createWriteStream(dest);
              res2.pipe(file);
              file.on('finish', () => file.close(resolve));
          });
          return;
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', err => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function run() {
  const outDir = path.join(process.cwd(), 'public', 'images', 'valvulas-industriais');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const urls = [
    'https://products.tk-fujikin.com/products/list/VVRJeE1rNVhPV3RSTTJSdVpXdEdVRXd3VVRCak1rcDFWVEpzTmxWVU1Eaw',
    'https://products.tk-fujikin.com/products/list/VjI1Q2VWWlliRTlMTUVZeVkxVTRNMXBVVWxKU1JtUndWbFZHTm1SNk1Eaw'
  ];

  let downloadedCount = 0;
  for (const url of urls) {
    console.log("Fetching " + url);
    const html = await (await fetch(url)).text();
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    const content = document.querySelector('.site-content, main, body');
    const imgs = Array.from(content.querySelectorAll('img'));
    
    for (const img of imgs) {
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt') || 'valvula';
        if (src && src.includes('thumbnail')) {
            const cleanAlt = alt.trim().replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
            const filename = cleanAlt + '.jpg';
            const dest = path.join(outDir, filename);
            const fullUrl = src.startsWith('http') ? src : 'https://products.tk-fujikin.com' + src;
            
            try {
                await downloadImage(fullUrl, dest);
                console.log("Downloaded", filename);
                downloadedCount++;
            } catch (e) {
                console.error("Failed", filename, e.message);
            }
        }
    }
  }
  console.log("Total downloaded:", downloadedCount);
}

run();
