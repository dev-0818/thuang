import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function optimizeImages() {
  const inputDir = 'public/img';
  const outputDir = 'public/img/optimized';

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('🚀 Starting image optimization...');

  try {
    // Optimize JPEG images
    const jpegFiles = await imagemin([`${inputDir}/*.{jpg,jpeg,JPG}`], {
      destination: outputDir,
      plugins: [
        imageminJpegtran({
          progressive: true,
          quality: 80
        })
      ]
    });

    // Optimize PNG images
    const pngFiles = await imagemin([`${inputDir}/*.{png,PNG}`], {
      destination: outputDir,
      plugins: [
        imageminPngquant({
          quality: [0.6, 0.8]
        })
      ]
    });

    // Convert to WebP
    const webpFiles = await imagemin([`${inputDir}/*.{jpg,jpeg,png,JPG,PNG}`], {
      destination: `${outputDir}/webp`,
      plugins: [
        imageminWebp({
          quality: 80,
          method: 6
        })
      ]
    });

    console.log(`✅ Optimized ${jpegFiles.length} JPEG images`);
    console.log(`✅ Optimized ${pngFiles.length} PNG images`);
    console.log(`✅ Created ${webpFiles.length} WebP images`);

    // Calculate size reduction
    let originalSize = 0;
    let optimizedSize = 0;

    const files = fs.readdirSync(inputDir);
    files.forEach(file => {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.JPG', '.PNG'].includes(ext)) {
        const originalPath = path.join(inputDir, file);
        const optimizedPath = path.join(outputDir, file);

        if (fs.existsSync(originalPath)) {
          originalSize += fs.statSync(originalPath).size;
        }
        if (fs.existsSync(optimizedPath)) {
          optimizedSize += fs.statSync(optimizedPath).size;
        }
      }
    });

    const reduction = originalSize > 0 ? ((originalSize - optimizedSize) / originalSize * 100).toFixed(1) : '0';
    console.log(`📊 Size reduction: ${reduction}% (${(originalSize / 1024 / 1024).toFixed(1)}MB → ${(optimizedSize / 1024 / 1024).toFixed(1)}MB)`);

    console.log('\n📝 Next steps:');
    console.log('1. Review optimized images in public/img/optimized/');
    console.log('2. Replace original images with optimized versions');
    console.log('3. Update image references to use WebP with fallbacks');

  } catch (error) {
    console.error('❌ Error optimizing images:', error);
  }
}

optimizeImages();