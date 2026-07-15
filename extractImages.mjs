import { exportImages } from 'pdf-export-images';
import fs from 'fs';
import path from 'path';

async function extract() {
  const pdfPath = 'C:\\Users\\FILIPE DANIEL\\.gemini\\antigravity\\brain\\aab9ef78-f0d6-4e73-b0f2-f3bbdc4c1a1c\\media__1784134455798.pdf';
  const outDir = path.join(process.cwd(), 'public', 'images', 'pdf_extract');
  
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  console.log('Extracting images from PDF...');
  try {
    const images = await exportImages(pdfPath, outDir);
    console.log(`Extracted ${images.length} images to ${outDir}`);
  } catch (err) {
    console.error('Extraction failed:', err);
  }
}

extract();
