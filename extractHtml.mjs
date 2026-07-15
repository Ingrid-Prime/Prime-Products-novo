import fs from 'fs';
import { JSDOM } from 'jsdom';

async function extract(url) {
  try {
    const res = await fetch(url);
    const html = await res.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    // tk-fujikin product list usually has a.ProductList-link with .ProductList-name and .ProductList-desc
    const items = Array.from(document.querySelectorAll('.ProductList-item, .pro-list, .item, li'));
    
    console.log("Looking for descriptions...");
    items.forEach(item => {
        const title = item.querySelector('.ProductList-name, .title, dt, h4, h3')?.textContent?.trim();
        const desc = item.querySelector('.ProductList-desc, .desc, dd, p, .text')?.textContent?.trim().replace(/\s+/g, ' ');
        if (title && desc) {
            console.log(`TITLE: ${title} | DESC: ${desc.substring(0, 100)}...`);
        }
    });
  } catch (err) {
    console.error(err);
  }
}

extract('https://products.tk-fujikin.com/products/list/U3pGQ2RXVnVaSFJTVjFKR1dsYzFVMU5VU2xWWk0wcHRZek5DTTJSNk1Eaw');
