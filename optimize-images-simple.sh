#!/bin/bash

# Simple Image Optimization Script for Pawvaro Website
# This script provides easy commands for image optimization

echo "🖼️  Pawvaro Image Optimization Helper"
echo "====================================="
echo ""

# Check if required tools are available
check_tool() {
    if command -v $1 &> /dev/null; then
        echo "✅ $1 is installed"
        return 0
    else
        echo "❌ $1 is not installed"
        return 1
    fi
}

echo "🔍 Checking for optimization tools..."
echo ""

# Check for WebP tools
if check_tool "cwebp"; then
    WEBP_AVAILABLE=true
else
    WEBP_AVAILABLE=false
    echo "   Install with: brew install webp (macOS) or sudo apt-get install webp (Ubuntu)"
fi

# Check for ImageMagick
if check_tool "convert"; then
    IMAGEMAGICK_AVAILABLE=true
else
    IMAGEMAGICK_AVAILABLE=false
    echo "   Install with: brew install imagemagick (macOS) or sudo apt-get install imagemagick (Ubuntu)"
fi

# Check for Node.js (for alternative tools)
if check_tool "node"; then
    NODE_AVAILABLE=true
else
    NODE_AVAILABLE=false
    echo "   Install Node.js for additional optimization tools"
fi

echo ""
echo "📋 Optimization Options:"
echo "========================"
echo ""

if [ "$WEBP_AVAILABLE" = true ]; then
    echo "1. 🚀 Quick WebP Conversion (Recommended)"
    echo "   Converts all PNG images to WebP format"
    echo "   Command: ./optimize-images.sh"
    echo ""
fi

if [ "$IMAGEMAGICK_AVAILABLE" = true ]; then
    echo "2. 🖼️  ImageMagick Optimization"
    echo "   Compresses existing images without format change"
    echo "   Command: find images/ -name '*.png' -exec convert {} -quality 85 {} \;"
    echo ""
fi

echo "3. 🌐 Online Tools (No installation required)"
echo "   - Squoosh.app (Google's image optimizer)"
echo "   - TinyPNG.com (PNG/JPEG compression)"
echo "   - ImageOptim.com (Online optimizer)"
echo ""

echo "4. 📱 Mobile Apps"
echo "   - ImageOptim (macOS)"
echo "   - GIMP with WebP plugin"
echo "   - Photoshop with WebP export"
echo ""

echo "🎯 Recommended Approach:"
echo "========================"
echo "1. Use online tools for immediate results"
echo "2. Install WebP tools for automated conversion"
echo "3. Test performance with Lighthouse"
echo "4. Monitor Core Web Vitals"
echo ""

echo "📊 Expected Results:"
echo "==================="
echo "• 60-80% file size reduction"
echo "• 40-60% faster page load"
echo "• Better mobile performance"
echo "• Improved Core Web Vitals"
echo ""

echo "🔧 Quick Commands:"
echo "=================="
echo ""

if [ "$WEBP_AVAILABLE" = true ]; then
    echo "# Convert single image to WebP"
    echo "cwebp -q 85 images/Pawfect.png -o images/Pawfect.webp"
    echo ""
    echo "# Convert all PNG images to WebP"
    echo "find images/ -name '*.png' -exec sh -c 'cwebp -q 85 \"$1\" -o \"${1%.png}.webp\"' _ {} \;"
    echo ""
fi

if [ "$IMAGEMAGICK_AVAILABLE" = true ]; then
    echo "# Compress existing images"
    echo "find images/ -name '*.png' -exec convert {} -quality 85 {} \;"
    echo ""
    echo "# Resize large images"
    echo "find images/ -name '*.png' -exec convert {} -resize 1200x1200\> {} \;"
    echo ""
fi

echo "# Check file sizes before/after"
echo "ls -la images/*.png | awk '{print \$5, \$9}' | sort -n"
echo ""

echo "📈 Performance Testing:"
echo "======================"
echo "1. Open Chrome DevTools"
echo "2. Go to Lighthouse tab"
echo "3. Run performance audit"
echo "4. Check Core Web Vitals"
echo ""

echo "🎉 Ready to optimize!"
echo "Choose your preferred method and start improving performance!"
echo ""
