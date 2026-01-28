// Image Optimization Module
class ImageOptimizer {
    constructor() {
        this.supportedFormats = this.checkFormatSupport();
        this.imageCache = new Map();
        this.loadingImages = new Set();
    }

    // Check browser support for modern image formats
    checkFormatSupport() {
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        
        return {
            webp: canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0,
            avif: canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0
        };
    }

    // Generate optimized image sources based on device and format support
    getOptimizedImageSrc(imagePath, size = 'medium') {
        const pathParts = imagePath.split('/');
        const fileName = pathParts.pop();
        const directory = pathParts.join('/');
        const [name, extension] = fileName.split('.');

        // Size configurations
        const sizes = {
            thumbnail: { width: 300, suffix: '_thumb' },
            medium: { width: 800, suffix: '_med' },
            large: { width: 1200, suffix: '_large' },
            full: { width: null, suffix: '' }
        };

        const sizeConfig = sizes[size] || sizes.medium;
        
        // Prefer modern formats if supported
        let format = 'jpg';
        if (this.supportedFormats.webp) {
            format = 'webp';
        } else if (this.supportedFormats.avif) {
            format = 'avif';
        }

        // Generate optimized path
        const optimizedPath = `${directory}/optimized/${name}${sizeConfig.suffix}.${format}`;
        
        // Fallback to original if optimized doesn't exist
        return {
            optimized: optimizedPath,
            fallback: imagePath,
            size: sizeConfig
        };
    }

    // Create responsive image element with multiple sources
    createResponsiveImage(imagePath, alt, className = '') {
        const img = document.createElement('img');
        const sources = [];

        // Generate different sizes
        ['thumbnail', 'medium', 'large'].forEach(size => {
            const { optimized, fallback } = this.getOptimizedImageSrc(imagePath, size);
            sources.push({ src: optimized, fallback, size });
        });

        // Set up responsive loading
        img.className = `lazy-image ${className}`;
        img.alt = alt;
        img.loading = 'lazy';
        
        // Use intersection observer for lazy loading
        img.dataset.src = sources[1].src; // Default to medium
        img.dataset.fallback = sources[1].fallback;
        
        // Add error handling for fallback
        img.onerror = () => {
            if (img.src !== img.dataset.fallback) {
                img.src = img.dataset.fallback;
            }
        };

        return img;
    }

    // Progressive image loading with blur effect
    loadImageProgressively(img, lowQualitySrc, highQualitySrc) {
        return new Promise((resolve, reject) => {
            // Load low quality first
            const lowQualityImg = new Image();
            lowQualityImg.onload = () => {
                img.src = lowQualitySrc;
                img.classList.add('loaded-low');
                
                // Then load high quality
                const highQualityImg = new Image();
                highQualityImg.onload = () => {
                    img.src = highQualitySrc;
                    img.classList.remove('loaded-low');
                    img.classList.add('loaded-high');
                    resolve();
                };
                highQualityImg.onerror = reject;
                highQualityImg.src = highQualitySrc;
            };
            lowQualityImg.onerror = reject;
            lowQualityImg.src = lowQualitySrc;
        });
    }

    // Preload critical images
    preloadCriticalImages(imagePaths) {
        imagePaths.forEach(path => {
            const { optimized, fallback } = this.getOptimizedImageSrc(path, 'medium');
            
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = optimized;
            
            // Add fallback preload
            link.onerror = () => {
                const fallbackLink = document.createElement('link');
                fallbackLink.rel = 'preload';
                fallbackLink.as = 'image';
                fallbackLink.href = fallback;
                document.head.appendChild(fallbackLink);
            };
            
            document.head.appendChild(link);
        });
    }

    // Generate image optimization recommendations
    generateOptimizationReport() {
        const images = document.querySelectorAll('img');
        const report = {
            totalImages: images.length,
            unoptimized: [],
            recommendations: []
        };

        images.forEach(img => {
            if (!img.loading || img.loading !== 'lazy') {
                report.unoptimized.push({
                    src: img.src,
                    issue: 'Missing lazy loading'
                });
            }
            
            if (!img.alt) {
                report.unoptimized.push({
                    src: img.src,
                    issue: 'Missing alt text'
                });
            }
        });

        // Add recommendations
        report.recommendations = [
            'Convert images to WebP format for 25-35% size reduction',
            'Generate thumbnail versions (300px width) for gallery previews',
            'Implement progressive JPEG for large images',
            'Use CSS aspect-ratio to prevent layout shift',
            'Consider using a CDN for image delivery'
        ];

        return report;
    }
}

// Enhanced Intersection Observer for lazy loading
class LazyImageLoader {
    constructor(imageOptimizer) {
        this.imageOptimizer = imageOptimizer;
        this.observer = new IntersectionObserver(
            this.handleIntersection.bind(this),
            {
                rootMargin: '50px 0px',
                threshold: 0.01
            }
        );
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                this.loadImage(img);
                this.observer.unobserve(img);
            }
        });
    }

    loadImage(img) {
        const src = img.dataset.src;
        const fallback = img.dataset.fallback;
        
        if (src) {
            // Add loading state
            img.classList.add('loading');
            
            // Create new image to test loading
            const testImg = new Image();
            testImg.onload = () => {
                img.src = src;
                img.classList.remove('loading');
                img.classList.add('loaded');
            };
            testImg.onerror = () => {
                // Fallback to original
                img.src = fallback;
                img.classList.remove('loading');
                img.classList.add('loaded');
            };
            testImg.src = src;
        }
    }

    observe(img) {
        this.observer.observe(img);
    }

    disconnect() {
        this.observer.disconnect();
    }
}

// Export for use in main.js
window.ImageOptimizer = ImageOptimizer;
window.LazyImageLoader = LazyImageLoader;