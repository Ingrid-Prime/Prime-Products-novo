import fs from 'fs';

let content = fs.readFileSync('c:/Site-prime-products/src/data/transmitterCatalog.ts', 'utf8');

const replacements = [
  // Industrial
  ['image5.jpeg" alt="SMP858"', 'image6.jpeg" alt="SMP858"'],
  ['image7.jpeg" alt="SMP858"', 'image9.jpeg" alt="SMP858"'],
  ['image9.jpeg" alt="SMP858-TST"', 'image10.jpeg" alt="SMP858-TST"'],
  // image11 is correct
  ['image13.jpeg" alt="DMP305X-TST"', 'image12.jpeg" alt="DMP305X-TST"'],
  ['image15.jpeg" alt="DMP305X-TST"', 'image13.jpeg" alt="DMP305X-TST"'],
  ['image18.jpeg" alt="DMP305X-TLF"', 'image14.jpeg" alt="DMP305X-TLF"'],
  
  // Hygienic
  ['image20.jpeg" alt="SMP858-NSF"', 'image15.jpeg" alt="SMP858-NSF"'],
  ['image21.jpeg" alt="SMP858-TSF"', 'image18.jpeg" alt="SMP858-TSF"'],
  ['image22.jpeg" alt="SMP858-TSF"', 'image20.jpeg" alt="SMP858-TSF"'],
  ['image23.jpeg" alt="SMP858-TSH"', 'image21.jpeg" alt="SMP858-TSH"'],
  ['image25.jpeg" alt="SMP858-TSD"', 'image22.jpeg" alt="SMP858-TSD"'],

  // Switch - 27, 29, 31 are correct

  // Compact
  // 32 is correct
  ['image34.jpeg" alt="SMP131"', 'image33.jpeg" alt="SMP131"'],
  ['image36.jpeg" alt="SMP131"', 'image34.jpeg" alt="SMP131"'],

  // Submersible
  ['image38.jpeg" alt="LMP633"', 'image35.jpeg" alt="LMP633"'],
  ['image39.jpeg" alt="LMP633"', 'image36.jpeg" alt="LMP633"'],
  ['image41.jpeg" alt="LMP633"', 'image37.jpeg" alt="LMP633"'],
  ['image43.jpeg" alt="LMP633"', 'image38.jpeg" alt="LMP633"'],

  // Temp
  ['image44.jpeg" alt="LG200"', 'image39.jpeg" alt="LG200"'],
  ['image45.jpeg" alt="LG200"', 'image41.jpeg" alt="LG200"'],
  ['image46.jpeg" alt="LG200"', 'image43.jpeg" alt="LG200"'],

  // Accessory
  ['image47.jpeg" alt="SP38M"', 'image44.jpeg" alt="SP38M"'],
  ['image48.jpeg" alt="SP38D"', 'image45.jpeg" alt="SP38D"'],
  ['image49.jpeg" alt="SPH19D"', 'image46.jpeg" alt="SPH19D"'],
  ['image50.jpeg" alt="SPH19S"', 'image47.jpeg" alt="SPH19S"'],
  ['image51.jpeg" alt="SPH19FR"', 'image48.jpeg" alt="SPH19FR"'],
  ['image52.png" alt="LCD11"', 'image49.jpeg" alt="LCD11"']
];

for (const [from, to] of replacements) {
  content = content.replace(from, to);
}

fs.writeFileSync('c:/Site-prime-products/src/data/transmitterCatalog.ts', content);
console.log('Catalog updated successfully.');
