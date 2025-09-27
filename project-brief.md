Key Instructions for Cursor
CRITICAL ARCHITECTURE CHANGES:

ELIMINATE SEPARATE HTML PAGES

Remove blog-dog-food.html, blog-cat-toys.html, blog-pet-grooming.html
Create single index.html with all content in sections
Use JavaScript modals/overlays instead of page navigation


STREAMLINE NAVIGATION

Remove complex multi-page menu system
Use simple scroll-based navigation: Home → Guides → Products → Contact
Implement smooth scrolling between sections


PRODUCT INTEGRATION FOCUS

Each article should lead to product recommendations
Add "View Products" buttons alongside "Read Guide" buttons
Create dynamic product filtering based on article category


REMOVE UNNECESSARY ELEMENTS

No sidebar navigation
No complex breadcrumbs
No separate blog archive pages
Minimize footer content
Remove redundant sections



Key Instructions for Cursor
CRITICAL ARCHITECTURE CHANGES:

ELIMINATE SEPARATE HTML PAGES

Remove blog-dog-food.html, blog-cat-toys.html, blog-pet-grooming.html
Create single index.html with all content in sections
Use JavaScript modals/overlays instead of page navigation


STREAMLINE NAVIGATION

Remove complex multi-page menu system
Use simple scroll-based navigation: Home → Guides → Products → Contact
Implement smooth scrolling between sections


PRODUCT INTEGRATION FOCUS

Each article should lead to product recommendations
Add "View Products" buttons alongside "Read Guide" buttons
Create dynamic product filtering based on article category


REMOVE UNNECESSARY ELEMENTS

No sidebar navigation
No complex breadcrumbs
No separate blog archive pages
Minimize footer content
Remove redundant sections


CONVERSION-FOCUSED DESIGN

Prominent product recommendation sections
Clear call-to-action buttons throughout
Lead capture forms (newsletter, contact)
Trust indicators and social proof



HTML Structure to Implement:
html<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pawvaro - Everything for Happy, Healthy Pets</title>
  <link rel="stylesheet" href="css/styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
  <!-- Fixed Header -->
  <header class="header">
    <nav class="navbar">
      <div class="navbar-brand">
        <i class="fas fa-paw"></i>
        <span>Pawvaro</span>
      </div>
      <ul class="navbar-nav">
        <li><a href="#hero">Home</a></li>
        <li><a href="#articles">Guides</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button class="mobile-toggle">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  </header>

  <!-- Main Content -->
  <main>
    <!-- Hero Section -->
    <section id="hero" class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1>Everything for Happy Pets</h1>
          <p>Helpful articles to keep your dogs and cats happy and healthy — with product recommendations you can trust.</p>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">10K+</span>
              <span class="stat-label">Happy Pet Parents</span>
            </div>
            <div class="stat">
              <span class="stat-number">50+</span>
              <span class="stat-label">Expert Guides</span>
            </div>
            <div class="stat">
              <span class="stat-number">5★</span>
              <span class="stat-label">Trusted Reviews</span>
            </div>
          </div>
          <button class="btn btn-primary btn-large" onclick="scrollToSection('articles')">
            Explore Our Guides
          </button>
        </div>
        <div class="hero-image">
          <img src="images/hero-pets.webp" alt="Happy pets together" loading="lazy">
        </div>
      </div>
    </section>

    <!-- Trust Indicators -->
    <section class="trust-section">
      <div class="container">
        <div class="trust-indicators">
          <div class="trust-item">
            <i class="fas fa-user-md"></i>
            <h3>Vet-Approved</h3>
            <p>All recommendations reviewed by licensed veterinarians</p>
          </div>
          <div class="trust-item">
            <i class="fas fa-award"></i>
            <h3>Award-Winning</h3>
            <p>Recognized for excellence in pet care education</p>
          </div>
          <div class="trust-item">
            <i class="fas fa-shield-alt"></i>
            <h3>Safe & Tested</h3>
            <p>Only recommend products we'd use for our own pets</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Articles Section -->
    <section id="articles" class="articles-section">
      <div class="container">
        <h2>Expert Pet Care Guides</h2>
        <div class="articles-grid">
          
          <!-- Article 1: Dog Food -->
          <article class="article-card" data-article="dog-food">
            <div class="article-image">
              <img src="images/dog-food.webp" alt="Dog eating healthy food" loading="lazy">
              <span class="article-tag">Nutrition</span>
            </div>
            <div class="article-content">
              <h3 class="article-title">How to Choose the Best Food for Your Dog</h3>
              <p class="article-preview">Learn how to pick the right food for your dog's age, breed, and health needs.</p>
              <div class="article-actions">
                <button class="btn btn-secondary" onclick="openArticleModal('dog-food')">Read Guide</button>
                <button class="btn btn-primary" onclick="showProducts('dog-food')">View Products</button>
              </div>
            </div>
          </article>

          <!-- Article 2: Cat Toys -->
          <article class="article-card" data-article="cat-toys">
            <div class="article-image">
              <img src="images/cat-toys.webp" alt="Cat playing with toys" loading="lazy">
              <span class="article-tag">Wellness</span>
            </div>
            <div class="article-content">
              <h3 class="article-title">Top 5 Toys to Keep Your Cat Active</h3>
              <p class="article-preview">Discover fun and engaging toys to keep your cat healthy and entertained.</p>
              <div class="article-actions">
                <button class="btn btn-secondary" onclick="openArticleModal('cat-toys')">Read Guide</button>
                <button class="btn btn-primary" onclick="showProducts('cat-toys')">View Products</button>
              </div>
            </div>
          </article>

          <!-- Article 3: Pet Grooming -->
          <article class="article-card" data-article="pet-grooming">
            <div class="article-image">
              <img src="images/pet-grooming.webp" alt="Pet grooming session" loading="lazy">
              <span class="article-tag">Care</span>
            </div>
            <div class="article-content">
              <h3 class="article-title">Essential Grooming Tips for Dogs & Cats</h3>
              <p class="article-preview">Keep your pet's coat clean, shiny, and tangle-free with these easy tips.</p>
              <div class="article-actions">
                <button class="btn btn-secondary" onclick="openArticleModal('pet-grooming')">Read Guide</button>
                <button class="btn btn-primary" onclick="showProducts('pet-grooming')">View Products</button>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section id="products" class="products-section">
      <div class="container">
        <h2>Recommended Products</h2>
        <div class="category-filters">
          <button class="category-filter active" data-category="all" onclick="showAllProducts()">All Products</button>
          <button class="category-filter" data-category="dog-food" onclick="showProducts('dog-food')">Dog Food</button>
          <button class="category-filter" data-category="cat-toys" onclick="showProducts('cat-toys')">Cat Toys</button>
          <button class="category-filter" data-category="pet-grooming" onclick="showProducts('pet-grooming')">Grooming</button>
        </div>
        
        <div class="products-grid">
          <!-- Dog Food Products -->
          <div class="product-card" data-category="dog-food" data-product-id="premium-dog-food">
            <div class="product-image">
              <img src="images/product-dog-food-1.webp" alt="Premium Dog Food" loading="lazy">
              <div class="product-badge">Best Seller</div>
            </div>
            <div class="product-content">
              <h3>Premium Nutrition Dog Food</h3>
              <div class="product-rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <span>(2,341 reviews)</span>
              </div>
              <p class="product-price">$29.99</p>
              <button class="btn btn-primary" data-affiliate-url="https://amazon.com/..." onclick="trackProductClick('premium-dog-food', 'homepage')">
                View on Amazon
              </button>
            </div>
          </div>

          <!-- Cat Toys Products -->
          <div class="product-card" data-category="cat-toys" data-product-id="interactive-wand">
            <div class="product-image">
              <img src="images/product-cat-toy-1.webp" alt="Interactive Cat Wand" loading="lazy">
            </div>
            <div class="product-content">
              <h3>Interactive Feather Wand</h3>
              <div class="product-rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <span>(1,876 reviews)</span>
              </div>
              <p class="product-price">$12.99</p>
              <button class="btn btn-primary" data-affiliate-url="https://amazon.com/..." onclick="trackProductClick('interactive-wand', 'homepage')">
                View on Amazon
              </button>
            </div>
          </div>

          <!-- Grooming Products -->
          <div class="product-card" data-category="pet-grooming" data-product-id="grooming-kit">
            <div class="product-image">
              <img src="images/product-grooming-1.webp" alt="Pet Grooming Kit" loading="lazy">
            </div>
            <div class="product-content">
              <h3>Professional Grooming Kit</h3>
              <div class="product-rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <span>(954 reviews)</span>
              </div>
              <p class="product-price">$39.99</p>
              <button class="btn btn-primary" data-affiliate-url="https://amazon.com/..." onclick="trackProductClick('grooming-kit', 'homepage')">
                View on Amazon
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="newsletter-section">
      <div class="container">
        <div class="newsletter-content">
          <h2>Weekly Pet Care Tips</h2>
          <p>Get expert advice and product recommendations delivered to your inbox every week.</p>
          <form class="newsletter-form" id="newsletterForm">
            <div class="form-row">
              <input type="email" placeholder="Enter your email" required>
              <button type="submit" class="btn btn-primary">Subscribe Free</button>
            </div>
            <p class="newsletter-disclaimer">No spam, unsubscribe anytime. Get a free pet care checklist!</p>
          </form>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
      <div class="container">
        <div class="contact-content">
          <div class="contact-info">
            <h2>Get Personalized Pet Advice</h2>
            <p>Have specific questions about your pet? Our experts are here to help!</p>
            <div class="contact-features">
              <div class="feature">
                <i class="fas fa-clock"></i>
                <span>24-hour response time</span>
              </div>
              <div class="feature">
                <i class="fas fa-user-md"></i>
                <span>Vet-reviewed answers</span>
              </div>
              <div class="feature">
                <i class="fas fa-heart"></i>
                <span>Personalized recommendations</span>
              </div>
            </div>
          </div>
          
          <form class="contact-form" id="contactForm">
            <div class="form-group">
              <input type="text" id="name" placeholder="Your Name" required>
              <span class="error-message"></span>
            </div>
            
            <div class="form-group">
              <input type="email" id="email" placeholder="Your Email" required>
              <span class="error-message"></span>
            </div>
            
            <div class="form-row">
              <div class="form-group half-width">
                <select id="petType" required>
                  <option value="">Pet Type</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="both">Both</option>
                </select>
                <span class="error-message"></span>
              </div>
              
              <div class="form-group half-width">
                <input type="text" id="petName" placeholder="Pet's Name (Optional)">
              </div>
            </div>
            
            <div class="form-group">
              <label>What are you interested in? (Select all that apply)</label>
              <div class="checkbox-group">
                <label class="checkbox-label">
                  <input type="checkbox" name="interests" value="nutrition">
                  <span>Nutrition & Diet</span>
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" name="interests" value="health">
                  <span>Health & Wellness</span>
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" name="interests" value="training">
                  <span>Training & Behavior</span>
                </label>
                <label class="checkbox-label">
                  <input type="checkbox" name="interests" value="grooming">
                  <span>Grooming & Care</span>
                </label>
              </div>
            </div>
            
            <div class="form-group">
              <textarea id="message" placeholder="Tell us about your pet and any specific questions you have..." required></textarea>
              <span class="error-message"></span>
            </div>
            
            <button type="submit" class="btn btn-primary btn-large">
              <span class="btn-text">Get Expert Advice</span>
              <span class="btn-loading">Sending...</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="brand">
            <i class="fas fa-paw"></i>
            <span>Pawvaro</span>
          </div>
          <p>Trusted pet care advice since 2020</p>
        </div>
        
        <div class="footer-links">
          <div class="footer-column">
            <h4>Resources</h4>
            <a href="#articles">Pet Care Guides</a>
            <a href="#products">Product Reviews</a>
            <a href="#contact">Expert Advice</a>
          </div>
          
          <div class="footer-column">
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
          
          <div class="footer-column">
            <h4>Connect</h4>
            <div class="social-links">
              <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
              <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            </div>
            <a href="mailto:hello@pawvaro.com">hello@pawvaro.com</a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2024 Pawvaro Pet Care. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <!-- Article Modal -->
  <div id="article-modal" class="modal-overlay">
    <div class="modal-container">
      <button class="modal-close" onclick="closeArticleModal()">&times;</button>
      <div id="modal-content">
        <!-- Dynamic content loaded here -->
      </div>
    </div>
  </div>

  <!-- Newsletter Popup -->
  <div id="newsletter-popup" class="popup-overlay">
    <div class="popup-container">
      <button class="popup-close" onclick="closeNewsletterPopup()">&times;</button>
      <div class="popup-content">
        <h3>🐾 Free Pet Care Guide!</h3>
        <p>Get our comprehensive pet care checklist and weekly tips.</p>
        <form>
          <input type="email" placeholder="Enter your email" required>
          <div class="popup-preferences">
            <label>
              <input type="checkbox" id="has-dogs"> I have dogs
            </label>
            <label>
              <input type="checkbox" id="has-cats"> I have cats
            </label>
          </div>
          <button type="submit" class="btn btn-primary">Get Free Guide</button>
        </form>
      </div>
    </div>
  </div>

  <!-- JavaScript Files -->
  <script src="js/main.js"></script>
  <script src="js/navigation.js"></script>
  <script src="js/form-handler.js"></script>
  <script src="js/animations.js"></script>
</body>
</html>
Final Instructions for Cursor:
"Create a single-page website using this HTML structure. Eliminate all separate HTML pages and implement everything as sections within index.html. Use the existing article titles and content from the current site, but present them within this new streamlined architecture. Focus on smooth scrolling navigation, modal overlays for article content, and prominent product recommendations. Implement all JavaScript functionality as specified, using the warm brown/orange/green color palette. The goal is a conversion-focused pet care website that guides visitors from articles to product purchases."# Pawvaro Pet Care Website - Complete Development Brief
Project Overview
Create a modern, professional pet care website showcasing expertise in dog and cat health, nutrition, and wellness. Target audience: pet owners seeking reliable advice and product recommendations.
IMPORTANT:

Use the existing content from the current website as the base text content
STREAMLINE THE ARCHITECTURE: Create a single-page application (SPA) design that eliminates the need for separate HTML pages
REMOVE CLUTTER: Eliminate unnecessary navigation, extra pages, and complex structures
FOCUS ON CONVERSION: Design for engagement and product recommendations

Simplified Site Architecture
Single Page Structure (Recommended)
html<!DOCTYPE html>
<html>
<body>
  <header> <!-- Fixed navigation --> </header>
  
  <main>
    <section id="hero"> <!-- Hero section --> </section>
    <section id="articles"> <!-- Article cards --> </section>
    <section id="products"> <!-- Product recommendations --> </section>
    <section id="about"> <!-- Brief about/trust section --> </section>
    <section id="contact"> <!-- Contact form --> </section>
  </main>
  
  <footer> <!-- Simple footer --> </footer>
</body>
</html>
Navigation Strategy
REMOVE: Complex multi-page navigation
REPLACE WITH: Simple scroll-based navigation
html<nav class="navbar">
  <div class="navbar-brand">
    <i class="fas fa-paw"></i>
    <span>Pawvaro</span>
  </div>
  <ul class="navbar-nav">
    <li><a href="#hero">Home</a></li>
    <li><a href="#articles">Guides</a></li>
    <li><a href="#products">Products</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
Product Integration Strategy
Article-to-Product Flow
Instead of separate blog pages, implement modal overlays or expandable cards:
html<!-- Article Card with Product Integration -->
<article class="article-card" data-article="dog-food">
  <div class="article-image">
    <img src="dog-food.webp" alt="Dog eating healthy food">
    <span class="article-tag">Nutrition</span>
  </div>
  <div class="article-content">
    <h3>How to Choose the Best Food for Your Dog</h3>
    <p>Learn how to pick the right food for your dog's age, breed, and health needs.</p>
    <div class="article-actions">
      <button class="btn btn-secondary" onclick="openArticleModal('dog-food')">Read Guide</button>
      <button class="btn btn-primary" onclick="showProducts('dog-food')">View Products</button>
    </div>
  </div>
</article>
Product Recommendation System
html<section id="products" class="products-section">
  <div class="container">
    <h2>Recommended Products</h2>
    <div class="product-grid">
      <!-- Dynamic product cards based on article interaction -->
      <div class="product-card" data-category="dog-food">
        <img src="product-1.webp" alt="Premium Dog Food">
        <h3>Premium Nutrition Dog Food</h3>
        <div class="product-rating">⭐⭐⭐⭐⭐</div>
        <p class="product-price">$29.99</p>
        <button class="btn btn-primary">View on Amazon</button>
      </div>
    </div>
  </div>
</section>
Enhanced Home Page Attractions
Hero Section with Value Proposition
html<section id="hero" class="hero-section">
  <div class="hero-content">
    <h1>Everything for Happy, Healthy Pets</h1>
    <p>Expert advice, trusted product recommendations, and proven tips to keep your dogs and cats thriving.</p>
    <div class="hero-stats">
      <div class="stat">
        <span class="stat-number">10K+</span>
        <span class="stat-label">Happy Pet Parents</span>
      </div>
      <div class="stat">
        <span class="stat-number">50+</span>
        <span class="stat-label">Expert Guides</span>
      </div>
      <div class="stat">
        <span class="stat-number">5★</span>
        <span class="stat-label">Trusted Reviews</span>
      </div>
    </div>
    <button class="btn btn-primary btn-large" onclick="scrollToSection('articles')">
      Explore Our Guides
    </button>
  </div>
  <div class="hero-image">
    <img src="hero-pets.webp" alt="Happy dog and cat together">
  </div>
</section>
Trust Indicators Section
html<section class="trust-section">
  <div class="container">
    <div class="trust-indicators">
      <div class="trust-item">
        <i class="fas fa-user-md"></i>
        <h3>Vet-Approved</h3>
        <p>All recommendations reviewed by licensed veterinarians</p>
      </div>
      <div class="trust-item">
        <i class="fas fa-award"></i>
        <h3>Award-Winning</h3>
        <p>Recognized for excellence in pet care education</p>
      </div>
      <div class="trust-item">
        <i class="fas fa-shield-alt"></i>
        <h3>Safe & Tested</h3>
        <p>Only recommend products we'd use for our own pets</p>
      </div>
    </div>
  </div>
</section>
Design System
Color Palette (Updated - Option 1)
css:root {
  --primary-color: #8B5A3C;        /* Warm brown - earth/comfort */
  --secondary-color: #E67E22;      /* Golden orange - energy/happiness */
  --accent-color: #27AE60;         /* Fresh green - health/nature */
  --neutral-dark: #2C3E50;         /* Deep blue-gray - trust */
  --neutral-light: #FDF6E3;        /* Cream - warmth/comfort */
  --success-color: #16A085;        /* Teal - wellness */
  --text-primary: #2C3E50;
  --text-secondary: #7F8C8D;
  --border-color: #E8DCC6;
  --background-light: #FEFCF3;
}
Typography

Primary Font: 'Inter', Arial, sans-serif (headings & UI)
Secondary Font: 'Source Sans Pro', sans-serif (body text)
Font Scale: 14px base, 1.25 ratio (14, 18, 22, 28, 35, 44px)

Spacing System
css:root {
  --space-xs: 0.5rem;   /* 8px */
  --space-sm: 1rem;     /* 16px */
  --space-md: 1.5rem;   /* 24px */
  --space-lg: 2rem;     /* 32px */
  --space-xl: 3rem;     /* 48px */
  --space-2xl: 4rem;    /* 64px */
}
Site Structure & Content
Header

Logo: "Pawvaro" with paw print icon (use Font Awesome or similar)
Navigation: Home | Blog | About | Contact
CTA Button: "Free Pet Care Guide" (--accent-color background)

Hero Section

Headline: "Everything for Happy, Healthy Pets"
Subheadline: "Expert advice, trusted recommendations, and proven tips to keep your dogs and cats thriving."
Background: Hero image of happy dog and cat together (use Unsplash/Pexels)
CTA Button: "Explore Our Guides"

Main Content Sections
1. Featured Articles (3-column grid)
Article 1:
Title: "How to Choose the Best Food for Your Dog"
Preview: "Discover the essential factors to consider when selecting nutrition that supports your dog's health, energy, and longevity."
Image: Dog eating from bowl
Tag: "Nutrition"

Article 2:
Title: "Top 5 Toys to Keep Your Cat Active"
Preview: "From puzzle feeders to interactive wands, find the perfect toys to keep your feline friend mentally stimulated and physically active."
Image: Cat playing with toy
Tag: "Wellness"

Article 3:
Title: "Essential Grooming Tips for Dogs & Cats"
Preview: "Master the basics of pet grooming with our step-by-step guide to keeping your pet's coat healthy and beautiful."
Image: Pet being groomed
Tag: "Care"
2. About Section

Headline: "Trusted Pet Care Expertise"
Content: "With over 10 years of veterinary partnerships and pet care research, Pawvaro provides evidence-based advice you can trust. Our team collaborates with licensed veterinarians to ensure every recommendation meets the highest standards."
Stats: "1000+ Happy Pet Parents | 50+ Expert Articles | 5-Star Trusted Reviews"

3. Newsletter Signup

Headline: "Weekly Pet Care Tips"
Content: "Get expert advice delivered to your inbox every week."
Form: Email input + "Subscribe" button

Footer

Company Info: Pawvaro Pet Care © 2024
Links: Privacy Policy | Terms of Service | Contact
Social: Instagram, Facebook, Twitter icons
Contact: hello@pawvaro.com

Technical Requirements
Layout & Responsive Design
css/* Mobile First Approach */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

/* Breakpoints */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
Components to Build
Header Component
html<header class="header">
  <nav class="navbar">
    <div class="navbar-brand">
      <i class="fas fa-paw"></i>
      <span>Pawvaro</span>
    </div>
    <ul class="navbar-nav">
      <li><a href="#home">Home</a></li>
      <li><a href="#blog">Blog</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <button class="btn btn-primary">Free Guide</button>
  </nav>
</header>
Article Card Component
html<article class="article-card">
  <div class="article-image">
    <img src="..." alt="..." loading="lazy">
    <span class="article-tag">Nutrition</span>
  </div>
  <div class="article-content">
    <h3 class="article-title">Article Title</h3>
    <p class="article-preview">Preview text...</p>
    <a href="#" class="article-link">Read More</a>
  </div>
</article>
Styling Guidelines
Button Styles
css.btn {
  padding: var(--space-sm) var(--space-md);
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: var(--accent-color);
  color: white;
}

.btn-primary:hover {
  background: #d85a44;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(231, 111, 81, 0.3);
}

.btn.loading {
  pointer-events: none;
  opacity: 0.8;
}

.btn-loading {
  display: none;
}

.btn.loading .btn-text {
  display: none;
}

.btn.loading .btn-loading {
  display: inline;
}
Card Hover Effects & Animations
css.article-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
}

.article-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.article-card.animate-in {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

/* Stagger animation delay for multiple cards */
.article-card:nth-child(1) { transition-delay: 0.1s; }
.article-card:nth-child(2) { transition-delay: 0.2s; }
.article-card:nth-child(3) { transition-delay: 0.3s; }
Header Scroll Effects
css.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: transform 0.3s ease, background-color 0.3s ease;
  background: transparent;
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0,0,0,0.1);
}

.header.hidden {
  transform: translateY(-100%);
}
Form Styling with JavaScript States
css.form-group {
  position: relative;
  margin-bottom: var(--space-md);
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: var(--space-sm);
  border: 2px solid var(--border-color);
  border-radius: 8px;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

.form-group input.error,
.form-group select.error,
.form-group textarea.error {
  border-color: #dc3545;
  animation: shake 0.3s ease-in-out;
}

.error-message {
  display: none;
  color: #dc3545;
  font-size: 14px;
  margin-top: 4px;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}
Notification Styles
css.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  max-width: 300px;
  padding: var(--space-md);
  border-radius: 8px;
  color: white;
  font-weight: 500;
  z-index: 2000;
  transform: translateX(400px);
  transition: transform 0.3s ease;
}

.notification.show {
  transform: translateX(0);
}

.notification.hide {
  transform: translateX(400px);
  opacity: 0;
}

.notification-success {
  background: var(--success-color);
}

.notification-error {
  background: #dc3545;
}

.notification-info {
  background: var(--primary-color);
}

.notification-close {
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  float: right;
  margin-left: 10px;
}
Mobile Navigation
css.mobile-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 4px;
}

.mobile-toggle span {
  width: 25px;
  height: 3px;
  background: var(--text-primary);
  margin: 3px 0;
  transition: 0.3s;
}

.mobile-toggle.active span:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.mobile-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.active span:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

@media (max-width: 768px) {
  .mobile-toggle {
    display: flex;
  }
  
  .navbar-nav {
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    background: white;
    flex-direction: column;
    transform: translateY(-100%);
    transition: transform 0.3s ease;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }
  
  .navbar-nav.active {
    transform: translateY(0);
  }
  
  body.nav-open {
    overflow: hidden;
  }
}
Image Specifications
Required Images (use Unsplash/Pexels):

Hero Image: Happy dog and cat together (1920x1080)
Article 1: Dog eating healthy food (600x400)
Article 2: Cat playing with interactive toy (600x400)
Article 3: Pet grooming scene (600x400)
About Section: Veterinarian with pets (800x600)

Image Optimization

Format: WebP with JPG fallback
Lazy loading: loading="lazy"
Alt text for accessibility
Responsive images with srcset

JavaScript Functionality Requirements
1. Single Page Navigation System
javascript// Smooth scroll navigation (replaces multiple HTML pages)
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  }
}

// Update active navigation on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});
2. Article Modal System (Replaces Separate Pages)
javascript// Article modal functionality
function openArticleModal(articleId) {
  const modal = document.getElementById('article-modal');
  const modalContent = document.getElementById('modal-content');
  
  // Article content mapping
  const articles = {
    'dog-food': {
      title: 'How to Choose the Best Food for Your Dog',
      content: `
        <div class="article-content">
          <h2>Complete Guide to Dog Nutrition</h2>
          <p>Choosing the right food for your dog is crucial for their health and longevity...</p>
          <h3>Key Factors to Consider:</h3>
          <ul>
            <li>Age and life stage</li>
            <li>Breed size and activity level</li>
            <li>Health conditions</li>
            <li>Ingredient quality</li>
          </ul>
          <div class="recommended-products">
            <h3>Our Top Recommendations:</h3>
            <div class="product-mini-cards">
              <!-- Mini product cards here -->
            </div>
          </div>
        </div>
      `,
      products: ['premium-dog-food', 'puppy-formula', 'senior-blend']
    },
    'cat-toys': {
      title: 'Top 5 Toys to Keep Your Cat Active',
      content: `
        <div class="article-content">
          <h2>Essential Cat Toys for Health & Happiness</h2>
          <p>Mental stimulation and physical activity are vital for your cat's wellbeing...</p>
          <!-- Content continues -->
        </div>
      `,
      products: ['interactive-wand', 'puzzle-feeder', 'laser-toy']
    },
    'pet-grooming': {
      title: 'Essential Grooming Tips for Dogs & Cats',
      content: `
        <div class="article-content">
          <h2>Professional Grooming at Home</h2>
          <p>Regular grooming keeps your pet healthy and strengthens your bond...</p>
          <!-- Content continues -->
        </div>
      `,
      products: ['grooming-kit', 'nail-clippers', 'shampoo-set']
    }
  };
  
  if (articles[articleId]) {
    modalContent.innerHTML = articles[articleId].content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeArticleModal() {
  const modal = document.getElementById('article-modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Close modal on outside click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    closeArticleModal();
  }
});
3. Dynamic Product Display
javascript// Product recommendation system
function showProducts(category) {
  const productSection = document.getElementById('products');
  const productGrid = productSection.querySelector('.product-grid');
  
  // Filter products by category
  const allProducts = document.querySelectorAll('.product-card');
  allProducts.forEach(product => {
    if (product.dataset.category === category) {
      product.style.display = 'block';
      product.classList.add('featured');
    } else {
      product.style.display = 'none';
      product.classList.remove('featured');
    }
  });
  
  // Scroll to products section
  scrollToSection('products');
  
  // Show category filter
  updateCategoryFilter(category);
}

function updateCategoryFilter(activeCategory) {
  const categoryFilters = document.querySelectorAll('.category-filter');
  categoryFilters.forEach(filter => {
    filter.classList.remove('active');
    if (filter.dataset.category === activeCategory) {
      filter.classList.add('active');
    }
  });
}

// Show all products
function showAllProducts() {
  const allProducts = document.querySelectorAll('.product-card');
  allProducts.forEach(product => {
    product.style.display = 'block';
    product.classList.remove('featured');
  });
}
4. Enhanced Contact Form with Lead Capture
javascript// Contact form with pet owner specific fields
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    petType: document.getElementById('petType').value,
    petName: document.getElementById('petName').value,
    interests: getSelectedInterests(),
    message: document.getElementById('message').value
  };
  
  // Validate and submit
  if (validateContactForm(formData)) {
    try {
      submitBtn.classList.add('loading');
      
      // Simulate submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success feedback
      showNotification('Thanks! We\'ll send you personalized pet care tips.', 'success');
      contactForm.reset();
      
      // Optional: Show newsletter signup
      showNewsletterPopup();
      
    } catch (error) {
      showNotification('Failed to send message. Please try again.', 'error');
    } finally {
      submitBtn.classList.remove('loading');
    }
  }
});

function getSelectedInterests() {
  const interests = [];
  document.querySelectorAll('input[name="interests"]:checked').forEach(checkbox => {
    interests.push(checkbox.value);
  });
  return interests;
}
5. Newsletter Popup System
javascript// Newsletter popup for lead capture
function showNewsletterPopup() {
  const popup = document.getElementById('newsletter-popup');
  popup.classList.add('active');
}

// Show popup after user interaction or time delay
setTimeout(() => {
  if (!localStorage.getItem('newsletter-shown')) {
    showNewsletterPopup();
    localStorage.setItem('newsletter-shown', 'true');
  }
}, 30000); // Show after 30 seconds

// Newsletter signup
const newsletterForm = document.querySelector('#newsletter-popup form');
newsletterForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const email = e.target.querySelector('input[type="email"]').value;
  const petPreferences = {
    hasDogs: document.getElementById('has-dogs').checked,
    hasCats: document.getElementById('has-cats').checked,
    interests: getNewsletterInterests()
  };
  
  try {
    // Submit newsletter signup
    await submitNewsletterSignup(email, petPreferences);
    showNotification('Welcome! Check your email for a free pet care guide.', 'success');
    closeNewsletterPopup();
  } catch (error) {
    showNotification('Signup failed. Please try again.', 'error');
  }
});

function closeNewsletterPopup() {
  document.getElementById('newsletter-popup').classList.remove('active');
}
6. Product Affiliate Link Tracking
javascript// Track product clicks for analytics
function trackProductClick(productId, source) {
  // Analytics tracking
  if (typeof gtag !== 'undefined') {
    gtag('event', 'product_click', {
      'product_id': productId,
      'source': source,
      'value': 1
    });
  }
  
  // Store in localStorage for personalization
  const clickedProducts = JSON.parse(localStorage.getItem('clicked-products') || '[]');
  clickedProducts.push({
    productId,
    source,
    timestamp: new Date().toISOString()
  });
  localStorage.setItem('clicked-products', JSON.stringify(clickedProducts));
}

// Add click tracking to product buttons
document.querySelectorAll('.product-card .btn').forEach(button => {
  button.addEventListener('click', (e) => {
    const productCard = e.target.closest('.product-card');
    const productId = productCard.dataset.productId;
    const source = productCard.dataset.source || 'homepage';
    
    trackProductClick(productId, source);
    
    // Small delay before redirect to ensure tracking
    setTimeout(() => {
      window.open(button.dataset.affiliateUrl, '_blank');
    }, 100);
  });
});
Performance Requirements

Lighthouse score 90+ for all metrics
First Contentful Paint < 2s
Largest Contentful Paint < 2.5s
Cumulative Layout Shift < 0.1

Accessibility Requirements

WCAG 2.1 AA compliance
Keyboard navigation support
Screen reader compatibility
Focus indicators
Color contrast ratios 4.5:1 minimum

File Structure
/
├── index.html
├── css/
│   ├── styles.css
│   ├── components.css
│   └── animations.css
├── js/
│   ├── main.js
│   ├── form-handler.js
│   ├── navigation.js
│   └── animations.js
├── images/
│   ├── hero-image.webp
│   ├── article-1.webp
│   ├── article-2.webp
│   └── article-3.webp
└── README.md
Implementation Priority

Phase 1: HTML structure + CSS Grid layout + Basic JavaScript setup
Phase 2: Styling system + components + Mobile navigation
Phase 3: Form validation + notification system
Phase 4: Scroll animations + intersection observers
Phase 5: Performance optimization + accessibility + final interactions

Success Criteria

Professional appearance suitable for portfolio
Fully responsive across all devices
Fast loading times (< 3 seconds)
Accessible to all users
Clean, maintainable code structure


Note for Cursor: Use this brief as your complete specification. All design decisions, content, and technical requirements are included. Focus on clean, semantic HTML and modern CSS techniques.