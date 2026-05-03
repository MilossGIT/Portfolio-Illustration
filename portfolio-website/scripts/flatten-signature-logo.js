/**
 * Composite signature.png onto #FFFFFF, then snap light “halo” pixels to pure white.
 * Anti-aliasing often leaves ~#F5F5F5 fringes that read as a shadow on the nav.
 * Run: npm run flatten-logo
 */
const fs = require('fs');
const path = require('path');

async function main() {
  const sharp = require('sharp');
  const src = path.join(__dirname, '../src/hector/signature.png');
  const destPath = path.join(__dirname, '../src/hector/signature-on-white.png');

  if (!fs.existsSync(src)) {
    console.error('Missing:', src);
    process.exit(1);
  }

  const { data, info } = await sharp(src)
    .ensureAlpha()
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  if (![3, 4].includes(channels)) {
    console.error('Expected 3 or 4 channels, got', channels);
    process.exit(1);
  }

  const out = Buffer.from(data);
  const stride = channels;
  /** Luma threshold: pixels at/above this become #fff (removes gray fringe, keeps ink) */
  const LUM_CUTOFF = 242;

  for (let i = 0; i < out.length; i += stride) {
    const r = out[i];
    const g = out[i + 1];
    const b = out[i + 2];
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    if (lum >= LUM_CUTOFF) {
      out[i] = 255;
      out[i + 1] = 255;
      out[i + 2] = 255;
      if (stride === 4) {
        out[i + 3] = 255;
      }
    }
  }

  await sharp(out, {
    raw: { width, height, channels },
  })
    .png({ compressionLevel: 9 })
    .toFile(destPath);

  console.log('Wrote', destPath);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
