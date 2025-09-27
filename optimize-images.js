#!/usr/bin/env node

/**
 * Image Optimization Script
 * Converts PNG/JPG images to WebP format and creates optimized versions
 */

const fs = require('fs');
const path = require('path');

// Image optimization configuration
const config = {
    inputDir: './images',
    outputDir: './images/optimized',
    formats: ['webp', 'avif'], // Modern formats
    quality: {
        webp: 85,
        avif: 80
    },
    sizes: {
        small: 300,
        medium: 600,
        large: 1200
    }
};

// Create output directory
if (!fs.existsSync(config.outputDir)) {
    fs.mkdirSync(config.outputDir, { recursive: true });
}

// List of images to optimize (based on analysis)
const imagesToOptimize = [
    'Pawfect.png', // Logo - high priority
    'background-image-hero.png', // Hero background
    'categorysectionpuppy.png', // Category image
    'category-cat-playing-with-toy.png', // Category image
    'dogfood-BLOG-INDEX.PNG', // Blog image
    'Cat-for-blog.png', // Blog image
    'grooming-acessories.png', // Blog image
    'dog-food.png', // Deal image
    'dog-toy.png', // Deal image
    'dog-bed.png', // Deal image
    'cat-toy.png', // Deal image
    'cat-tree.png', // Deal image
    'cat-food.png', // Deal image
    'dog-bed-BLOG-INDEX.PNG', // Blog image
    'cat-bed-BLOG-INDEX.PNG', // Blog image
    'pet-health-BLOG-INDEX.PNG', // Blog image
    'Cat-dog-grooming-BLOG.png', // Blog image
    'cat-for-BLOG-INDEX.PNG', // Blog image
    'brown-cat-dog-together-looking-600nw-2198514787.png', // CSS background
    'Deals-Background-img.png' // CSS background
];

console.log('🖼️  Image Optimization Script');
console.log('============================');
console.log(`📁 Input directory: ${config.inputDir}`);
console.log(`📁 Output directory: ${config.outputDir}`);
console.log(`🎯 Images to optimize: ${imagesToOptimize.length}`);
console.log('');

// Generate optimization commands (for manual execution with tools like ImageMagick or Sharp)
const generateOptimizationCommands = () => {
    const commands = [];

    imagesToOptimize.forEach(imageName => {
        const inputPath = path.join(config.inputDir, imageName);
        const baseName = path.parse(imageName).name;

        // Check if file exists
        if (!fs.existsSync(inputPath)) {
            console.log(`⚠️  File not found: ${imageName}`);
            return;
        }

        // Generate WebP versions
        config.formats.forEach(format => {
            const outputPath = path.join(config.outputDir, `${baseName}.${format}`);
            const quality = config.quality[format];

            if (format === 'webp') {
                commands.push({
                    tool: 'cwebp',
                    command: `cwebp -q ${quality} "${inputPath}" -o "${outputPath}"`,
                    description: `Convert ${imageName} to WebP (${quality}% quality)`
                });
            } else if (format === 'avif') {
                commands.push({
                    tool: 'avifenc',
                    command: `avifenc --min 0 --max 63 --speed 4 --yuv 420 --q ${quality} "${inputPath}" "${outputPath}"`,
                    description: `Convert ${imageName} to AVIF (${quality}% quality)`
                });
            }
        });

        // Generate responsive sizes
        Object.entries(config.sizes).forEach(([sizeName, width]) => {
            config.formats.forEach(format => {
                const outputPath = path.join(config.outputDir, `${baseName}-${sizeName}.${format}`);
                const quality = config.quality[format];

                if (format === 'webp') {
                    commands.push({
                        tool: 'cwebp',
                        command: `cwebp -q ${quality} -resize ${width} 0 "${inputPath}" -o "${outputPath}"`,
                        description: `Convert ${imageName} to WebP ${sizeName} (${width}px, ${quality}% quality)`
                    });
                }
            });
        });
    });

    return commands;
};

// Generate the commands
const commands = generateOptimizationCommands();

console.log('📋 Optimization Commands Generated:');
console.log('===================================');
console.log('');

commands.forEach((cmd, index) => {
    console.log(`${index + 1}. ${cmd.description}`);
    console.log(`   ${cmd.command}`);
    console.log('');
});

// Create a shell script for easy execution
const shellScript = `#!/bin/bash
# Image Optimization Script
# Generated automatically

echo "🖼️  Starting image optimization..."

# Check if required tools are installed
if ! command -v cwebp &> /dev/null; then
    echo "❌ cwebp not found. Please install WebP tools:"
    echo "   macOS: brew install webp"
    echo "   Ubuntu: sudo apt-get install webp"
    exit 1
fi

if ! command -v avifenc &> /dev/null; then
    echo "⚠️  avifenc not found. AVIF conversion will be skipped."
    echo "   Install: npm install -g @squoosh/cli"
fi

# Create output directory
mkdir -p "${config.outputDir}"

# Execute optimization commands
${commands.map(cmd => cmd.command).join('\n')}

echo "✅ Image optimization complete!"
echo "📁 Optimized images saved to: ${config.outputDir}"
`;

fs.writeFileSync('./optimize-images.sh', shellScript);
fs.chmodSync('./optimize-images.sh', '755');

console.log('📝 Shell script created: optimize-images.sh');
console.log('🚀 Run: ./optimize-images.sh');
console.log('');
console.log('💡 Alternative: Use online tools like:');
console.log('   - Squoosh.app (Google)');
console.log('   - TinyPNG.com');
console.log('   - ImageOptim (macOS)');
console.log('   - GIMP with WebP plugin');
