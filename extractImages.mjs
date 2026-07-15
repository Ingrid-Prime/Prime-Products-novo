import { exportImages } from 'pdf-export-images';
import fs from 'fs';
import path from 'path';

async function extract() {
  const pdfs = [
    { name: '6250', path: 'C:\\Users\\FILIPE DANIEL\\Downloads\\Premier_6250_Series.pdf' },
    { name: '6016', path: 'C:\\Users\\FILIPE DANIEL\\Downloads\\Premier_6016_Series.pdf' },
    { name: '6020', path: 'C:\\Users\\FILIPE DANIEL\\Downloads\\Premier_6020_Series.pdf' }
  ];

  for (const pdf of pdfs) {
    const outDir = path.join(process.cwd(), 'temp_extract', pdf.name);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    console.log(`Extracting images from ${pdf.name}...`);
    try {
      const images = await exportImages(pdf.path, outDir);
      console.log(`Extracted ${images.length} images to ${outDir}`);
    } catch (err) {
      console.error(`Extraction failed for ${pdf.name}:`, err);
    }
  }
}

extract();
