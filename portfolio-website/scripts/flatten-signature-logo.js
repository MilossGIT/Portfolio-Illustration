/**
 * Composites signature.png onto #FFFFFF to remove semi-transparent gray fringes
 * (they read as ~#F5F5F5 on a white header). Run: npm run flatten-logo
 */
const fs = require('fs');
const path = require('path');

async function main() {
  const sharp = require('sharp');
  const src = path.join(__dirname, '../src/hector/signature.png');
  const out = path.join(__dirname, '../src/hector/signature-on-white.png');

  if (!fs.existsSync(src)) {
    console.error('Missing:', src);
    process.exit(1);
  }

  await sharp(src)
    .ensureAlpha()
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .png({ compressionLevel: 9 })
    .toFile(out);

  console.log('Wrote', out);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
