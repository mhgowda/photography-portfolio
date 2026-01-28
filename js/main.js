// Gallery data with your complete uploaded photo collection
const galleryItems = [
    // Portraits - 8 photos
    { id: 1, category: 'portrait', title: 'Portrait Session 1', image: 'images/portraits/DSC_0004.JPG', priority: 'high' },
    { id: 2, category: 'portrait', title: 'Portrait Session 2', image: 'images/portraits/DSC_0842.JPG', priority: 'high' },
    { id: 3, category: 'portrait', title: 'Portrait Session 3', image: 'images/portraits/DSC_0852.JPG', priority: 'medium' },
    { id: 4, category: 'portrait', title: 'Portrait Session 4', image: 'images/portraits/DSC_0887.JPG', priority: 'medium' },
    { id: 5, category: 'portrait', title: 'Portrait Session 5', image: 'images/portraits/DSC_0913.JPG', priority: 'medium' },
    { id: 6, category: 'portrait', title: 'Portrait Session 6', image: 'images/portraits/WhatsApp Image 2026-01-28 at 11.10.36 AM.jpeg', priority: 'low' },
    { id: 7, category: 'portrait', title: 'Portrait Session 7', image: 'images/portraits/WhatsApp Image 2026-01-28 at 11.10.40 AM.jpeg', priority: 'low' },
    { id: 8, category: 'portrait', title: 'Portrait Session 8', image: 'images/portraits/WhatsApp Image 2026-01-28 at 11.10.42 AM.jpeg', priority: 'low' },

    // Street Photography - 6 photos
    { id: 9, category: 'street', title: 'Street Moment 1', image: 'images/street/WhatsApp Image 2026-01-28 at 11.10.34 AM.jpeg', priority: 'medium' },
    { id: 10, category: 'street', title: 'Street Moment 2', image: 'images/street/WhatsApp Image 2026-01-28 at 11.10.39 AM.jpeg', priority: 'medium' },
    { id: 11, category: 'street', title: 'Street Moment 3', image: 'images/street/WhatsApp Image 2026-01-28 at 11.10.43 AM.jpeg', priority: 'low' },
    { id: 12, category: 'street', title: 'Street Moment 4', image: 'images/street/WhatsApp Image 2026-01-28 at 11.10.45 AM (2).jpeg', priority: 'low' },
    { id: 13, category: 'street', title: 'Street Moment 5', image: 'images/street/WhatsApp Image 2026-01-28 at 11.10.46 AM.jpeg', priority: 'low' },
    { id: 14, category: 'street', title: 'Street Moment 6', image: 'images/street/WhatsApp Image 2026-01-28 at 11.10.49 AM.jpeg', priority: 'low' },

    // Nature (Landscapes, scenery) - 8 photos
    { id: 15, category: 'nature', title: 'Nature Scene 1', image: 'images/nature/WhatsApp Image 2026-01-28 at 11.10.07 AM.jpeg', priority: 'medium' },
    { id: 16, category: 'nature', title: 'Nature Scene 2', image: 'images/nature/WhatsApp Image 2026-01-28 at 11.10.08 AM.jpeg', priority: 'medium' },
    { id: 17, category: 'nature', title: 'Nature Scene 3', image: 'images/nature/WhatsApp Image 2026-01-28 at 11.10.09 AM.jpeg', priority: 'low' },
    { id: 18, category: 'nature', title: 'Nature Scene 4', image: 'images/nature/WhatsApp Image 2026-01-28 at 11.10.12 AM.jpeg', priority: 'low' },
    { id: 19, category: 'nature', title: 'Nature Scene 5', image: 'images/nature/WhatsApp Image 2026-01-28 at 11.10.13 AM.jpeg', priority: 'low' },
    { id: 20, category: 'nature', title: 'Nature Scene 6', image: 'images/nature/WhatsApp Image 2026-01-28 at 11.10.35 AM.jpeg', priority: 'low' },
    { id: 21, category: 'nature', title: 'Nature Scene 7', image: 'images/nature/WhatsApp Image 2026-01-28 at 11.10.44 AM.jpeg', priority: 'low' },
    { id: 22, category: 'nature', title: 'Nature Scene 8', image: 'images/nature/WhatsApp Image 2026-01-28 at 11.10.48 AM.jpeg', priority: 'low' },

    // Wildlife (Animals, birds, etc.) - 5 photos
    { id: 23, category: 'wildlife', title: 'Wildlife Shot 1', image: 'images/wildlife/DSC_0951.JPG', priority: 'high' },
    { id: 24, category: 'wildlife', title: 'Wildlife Shot 2', image: 'images/wildlife/WhatsApp Image 2026-01-28 at 11.10.09 AM (1).jpeg', priority: 'medium' },
    { id: 25, category: 'wildlife', title: 'Wildlife Shot 3', image: 'images/wildlife/WhatsApp Image 2026-01-28 at 11.10.45 AM.jpeg', priority: 'medium' },
    { id: 26, category: 'wildlife', title: 'Wildlife Shot 4', image: 'images/wildlife/WhatsApp Image 2026-01-28 at 11.10.48 AM (2).jpeg', priority: 'low' },
    { id: 27, category: 'wildlife', title: 'Wildlife Shot 5', image: 'images/wildlife/WhatsApp Image 2026-01-28 at 11.50.35 AM.jpeg', priority: 'low' },

    // Events - 3 photos
    { id: 28, category: 'events', title: 'Event Coverage 1', image: 'images/events/WhatsApp Image 2026-01-28 at 11.10.06 AM.jpeg', priority: 'medium' },
    { id: 29, category: 'events', title: 'Event Coverage 2', image: 'images/events/WhatsApp Image 2026-01-28 at 11.10.41 AM.jpeg', priority: 'low' },
    { id: 30, category: 'events', title: 'Event Coverage 3', image: 'images/events/WhatsApp Image 2026-01-28 at 11.38.49 AM.jpeg', priority: 'low' },

    // Travel - 6 photos
    { id: 31, category: 'travel', title: 'Travel Photography 1', image: 'images/travel/WhatsApp Image 2026-01-28 at 11.10.20 AM.jpeg', priority: 'medium' },
    { id: 32, category: 'travel', title: 'Travel Photography 2', image: 'images/travel/WhatsApp Image 2026-01-28 at 11.10.33 AM.jpeg', priority: 'low' },
    { id: 33, category: 'travel', title: 'Travel Photography 3', image: 'images/travel/WhatsApp Image 2026-01-28 at 11.10.36 AM (1).jpeg', priority: 'low' },
    { id: 34, category: 'travel', title: 'Travel Photography 4', image: 'images/travel/WhatsApp Image 2026-01-28 at 11.10.45 AM (1).jpeg', priority: 'low' },
    { id: 35, category: 'travel', title: 'Travel Photography 5', image: 'images/travel/WhatsApp Image 2026-01-28 at 11.10.47 AM (1).jpeg', priority: 'low' },
    { id: 36, category: 'travel', title: 'Travel Photography 6', image: 'images/travel/WhatsApp Image 2026-01-28 at 11.10.47 AM.jpeg', priority: 'low' },
];

let currentFilter = 'all';
let currentLightboxIndex = 0;
let filteredItems = galleryItems;

// Initialize image optimization
let imageOptimizer;
let lazyImageLoader;

// Performance optimization: Enhanced Intersection Observer for lazy loading
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            loadImageWithFallback(img);
            observer.unobserve(img);
        }
    });
}, {
    rootMargin: '50px 0px',
    threshold: 0.01
});

// Enhanced image loading with fallback and optimization
function loadImageWithFallback(img) {
    const src = img.dataset.src;
    const fallback = img.dataset.fallback || src;
    
    img.classList.add('loading');
    
    // Try optimized version first
    const testImg = new Image();
    testImg.onload = () => {
        img.src = src;
        img.classList.remove('loading', 'lazy');
        img.classList.add('loaded');
    };
    testImg.onerror = () => {
        // Fallback to original
        img.src = fallback;
        img.classList.remove('loading', 'lazy');
        img.classList.add('loaded');
    };
    testImg.src = src;
}

// Initialize gallery
function initGallery() {
    renderGallery(galleryItems);
    setupFilterButtons();
    setupFormHandler();
}

function renderGallery(items) {
    const gallery = document.getElementById('gallery-grid');
    gallery.innerHTML = '';
    
    items.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.dataset.category = item.category;
        
        // Create optimized image with multiple sources
        const img = document.createElement('img');
        img.className = 'lazy';
        img.alt = item.title;
        img.loading = 'lazy';
        
        // Generate optimized image paths
        const optimizedSrc = generateOptimizedImagePath(item.image, 'thumbnail');
        img.dataset.src = optimizedSrc;
        img.dataset.fallback = item.image;
        
        // Add aspect ratio to prevent layout shift
        img.style.aspectRatio = '1';
        
        const overlay = document.createElement('div');
        overlay.className = 'gallery-overlay';
        overlay.innerHTML = `
            <div class="gallery-info">
                <h3>${item.title}</h3>
                <p>${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
            </div>
        `;
        
        div.appendChild(img);
        div.appendChild(overlay);
        div.addEventListener('click', () => openLightbox(items, index));
        gallery.appendChild(div);
        
        // Add to lazy loading observer
        imageObserver.observe(img);
    });
    
    filteredItems = items;
}

// Generate optimized image paths
function generateOptimizedImagePath(originalPath, size = 'medium') {
    const pathParts = originalPath.split('/');
    const fileName = pathParts.pop();
    const directory = pathParts.join('/');
    const [name, extension] = fileName.split('.');
    
    const sizes = {
        thumbnail: '_thumb',
        medium: '_med',
        large: '_large'
    };
    
    const suffix = sizes[size] || '';
    
    // Try WebP first, fallback to original
    return `${directory}/optimized/${name}${suffix}.webp`;
}

function setupFilterButtons() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.dataset.filter;
            filterGallery();
        });
    });
}

function filterGallery() {
    if (currentFilter === 'all') {
        renderGallery(galleryItems);
    } else {
        const filtered = galleryItems.filter(item => item.category === currentFilter);
        renderGallery(filtered);
    }
}

function openLightbox(items, index) {
    currentLightboxIndex = index;
    const item = items[index];
    document.getElementById('lightbox').classList.add('active');
    const lightboxImg = document.getElementById('lightbox-image');
    lightboxImg.src = item.image;
    document.getElementById('lightbox-info').textContent = `${item.title} • ${item.category.toUpperCase()}`;
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function nextImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % filteredItems.length;
    openLightbox(filteredItems, currentLightboxIndex);
}

function prevImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + filteredItems.length) % filteredItems.length;
    openLightbox(filteredItems, currentLightboxIndex);
}

// Dark mode toggle with performance optimization
function setupDarkModeToggle() {
    const toggle = document.querySelector('.dark-mode-toggle');
    const body = document.body;
    const savedMode = localStorage.getItem('theme') || 'dark-mode';
    body.className = savedMode;
    updateToggleIcon();

    toggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
        const newMode = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
        localStorage.setItem('theme', newMode);
        updateToggleIcon();
    });
}

function updateToggleIcon() {
    const toggle = document.querySelector('.dark-mode-toggle');
    toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

// Menu toggle
function setupMenuToggle() {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.nav-menu');
    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    const links = menu.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });
}

// Enhanced form handler - WhatsApp first, email as fallback
function setupFormHandler() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const phone = formData.get('phone').trim();
        const subject = formData.get('subject').trim();
        const service = formData.get('service');
        const message = formData.get('message').trim();
        
        // Validation
        if (!name || !email || !phone || !subject || !message) {
            showFormMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        if (!isValidPhone(phone)) {
            showFormMessage('Please enter a valid phone number (e.g., +91 98765 43210).', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = form.querySelector('.form-submit');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Opening WhatsApp...';
        submitBtn.disabled = true;
        
        // Send via WhatsApp first
        sendViaWhatsApp(name, email, phone, subject, service, message, form, submitBtn, originalText);
    });
}

// Phone number validation
function isValidPhone(phone) {
    // Remove all non-digit characters for validation
    const cleanPhone = phone.replace(/\D/g, '');
    
    // Check if it's a valid length (10-15 digits)
    if (cleanPhone.length < 10 || cleanPhone.length > 15) {
        return false;
    }
    
    // Basic pattern check for common formats
    const phonePattern = /^[\+]?[1-9][\d]{0,15}$/;
    return phonePattern.test(cleanPhone);
}

// Send message via WhatsApp
function sendViaWhatsApp(name, email, phone, subject, service, message, form, submitBtn, originalText) {
    // Format WhatsApp message
    const whatsappMessage = encodeURIComponent(
        `*New Photography Inquiry*\n\n` +
        `*Name:* ${name}\n` +
        `*Email:* ${email}\n` +
        `*Phone:* ${phone}\n` +
        `*Subject:* ${subject}\n` +
        `*Service:* ${service || 'Not specified'}\n\n` +
        `*Message:*\n${message}\n\n` +
        `---\n_Sent from Camcraft Photography website_`
    );
    
    const whatsappUrl = `https://wa.me/919008942845?text=${whatsappMessage}`;
    
    // Try to open WhatsApp
    try {
        window.open(whatsappUrl, '_blank');
        
        // Show success message
        showFormMessage('✓ WhatsApp opened! Please send the message from WhatsApp.', 'success');
        
        // Reset form after success
        setTimeout(() => {
            form.reset();
            document.getElementById('form-message').innerHTML = '';
            document.getElementById('form-message').className = 'form-message';
        }, 5000);
        
    } catch (error) {
        // If WhatsApp fails, show email option
        showEmailFallback(name, email, phone, subject, service, message, form);
    }
    
    // Reset button state
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Show email fallback if WhatsApp doesn't work
function showEmailFallback(name, email, phone, subject, service, message, form) {
    // Create Gmail URL
    const gmailSubject = encodeURIComponent(`${subject} - Photography Inquiry`);
    const gmailBody = encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Service: ${service || 'Not specified'}\n\n` +
        `Message:\n${message}\n\n` +
        `---\nSent from Camcraft Photography website`
    );
    
    const gmailUrl = `mailto:mhgowda845@gmail.com?subject=${gmailSubject}&body=${gmailBody}`;
    
    // Show email option
    const messageEl = document.getElementById('form-message');
    messageEl.innerHTML = `
        <div style="text-align: center;">
            <p style="margin-bottom: 1rem;">WhatsApp not available? Send via email instead:</p>
            <a href="${gmailUrl}" class="contact-option-btn" style="background: #ea4335; color: white; padding: 0.75rem 1.5rem; text-decoration: none; border-radius: 4px; display: inline-flex; align-items: center; gap: 0.5rem;">
                📧 Send via Gmail
            </a>
            <p style="margin-top: 1rem; font-size: 0.9rem; opacity: 0.8;">Your message details will be pre-filled in Gmail.</p>
        </div>
    `;
    messageEl.className = 'form-message success';
    
    // Clear form after delay
    setTimeout(() => {
        form.reset();
        messageEl.innerHTML = '';
        messageEl.className = 'form-message';
    }, 10000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormMessage(text, type) {
    const messageEl = document.getElementById('form-message');
    messageEl.textContent = text;
    messageEl.className = `form-message ${type}`;
    
    setTimeout(() => {
        messageEl.className = 'form-message';
        messageEl.textContent = '';
    }, 5000);
}

// Performance: Debounced scroll handler
let scrollTimeout;
function handleScroll() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        // Add scroll-based optimizations here if needed
    }, 100);
}

// Event listeners
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
});

document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
});

window.addEventListener('scroll', handleScroll, { passive: true });

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize image optimization
    if (window.ImageOptimizer) {
        imageOptimizer = new ImageOptimizer();
        lazyImageLoader = new LazyImageLoader(imageOptimizer);
        
        // Preload critical images (first few gallery items)
        const criticalImages = galleryItems
            .filter(item => item.priority === 'high')
            .map(item => item.image);
        imageOptimizer.preloadCriticalImages(criticalImages);
    }
    
    // Initialize logo
    initializeLogo();
    
    initGallery();
    setupDarkModeToggle();
    setupMenuToggle();
});

// Logo initialization
function initializeLogo() {
    const logoElement = document.querySelector('.logo');
    const logoImage = logoElement.querySelector('.logo-image');
    const logoText = logoElement.querySelector('.logo-text');
    
    // Test if logo image exists
    logoImage.onload = function() {
        logoElement.classList.add('has-image');
        logoText.style.display = 'none';
        logoImage.style.display = 'block';
    };
    
    logoImage.onerror = function() {
        // Keep text logo if image fails to load
        logoImage.style.display = 'none';
        logoText.style.display = 'block';
        logoElement.classList.remove('has-image');
    };
    
    // Force reload to trigger the test
    const logoSrc = logoImage.src;
    logoImage.src = '';
    logoImage.src = logoSrc;
}

// Make functions globally available for inline handlers
window.closeLightbox = closeLightbox;
window.nextImage = nextImage;
window.prevImage = prevImage;