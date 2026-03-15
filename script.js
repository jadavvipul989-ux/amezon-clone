// Cart functionality
let cartCount = 0;
const cartCountElement = document.getElementById('cartCount');

// Get all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

// Add event listener to each button
addToCartButtons.forEach((button) => {
    button.addEventListener('click', function() {
        // Increment cart count
        cartCount++;
        cartCountElement.textContent = cartCount;
        
        // Add visual feedback
        cartCountElement.classList.add('cart-pulse');
        button.textContent = '✓ Added!';
        button.style.backgroundColor = '#28a745';
        
        // Reset button after animation
        setTimeout(() => {
            button.textContent = 'Add to Cart';
            button.style.backgroundColor = '';
        }, 1500);
        
        // Remove pulse animation class
        setTimeout(() => {
            cartCountElement.classList.remove('cart-pulse');
        }, 500);
        
        console.log(`Item added to cart. Current cart count: ${cartCount}`);
    });
});

// Search functionality
const searchInput = document.getElementById('searchInput');
const searchButton = document.querySelector('.search-button');

// Search on button click
searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm) {
        console.log(`Search initiated for: "${searchTerm}"`);
        
        // Visual feedback
        searchInput.style.border = '2px solid #febd69';
        
        setTimeout(() => {
            searchInput.style.border = '';
        }, 1000);
        
        // In a real application, this would trigger a search API call
        alert(`Searching for: ${searchTerm}`);
    } else {
        console.log('Search term is empty');
        alert('Please enter a search term');
    }
});

// Search on Enter key press
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchButton.click();
    }
});

// Real-time search logging (logs as user types)
searchInput.addEventListener('input', function() {
    const searchTerm = this.value;
    if (searchTerm.length > 2) {
        console.log(`User is typing: "${searchTerm}"`);
    }
});

// Back to top functionality
const backToTopBtn = document.getElementById('backToTop');

backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    console.log('Scrolling to top');
});

// Show/hide back to top button based on scroll position
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopBtn.style.opacity = '1';
    } else {
        backToTopBtn.style.opacity = '0.7';
    }
});

// Add cart pulse animation via CSS class
const style = document.createElement('style');
style.textContent = `
    .cart-pulse {
        animation: pulse 0.5s ease-in-out;
    }
    
    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.3);
        }
        100% {
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

// Product card interactions
const productCards = document.querySelectorAll('.product-card');

productCards.forEach((card, index) => {
    card.addEventListener('mouseenter', function() {
        console.log(`Hovering over product card: ${card.querySelector('.card-title').textContent}`);
    });
});

// Category selector in search
const searchCategory = document.querySelector('.search-category');

searchCategory.addEventListener('change', function() {
    const selectedCategory = this.value;
    console.log(`Search category changed to: ${selectedCategory}`);
});

// Hero button functionality
const heroButton = document.querySelector('.hero-button');

heroButton.addEventListener('click', function() {
    console.log('Hero CTA clicked - Shop Now');
    
    // Smooth scroll to product grid
    const productGrid = document.querySelector('.product-grid');
    productGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Add click tracking to product links
const cardLinks = document.querySelectorAll('.card-link');

cardLinks.forEach((link) => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const category = this.closest('.product-card').querySelector('.card-title').textContent;
        console.log(`Exploring category: ${category}`);
        alert(`You clicked: ${category}`);
    });
});

// Nav links tracking
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        console.log(`Navigation clicked: ${this.textContent}`);
    });
});

// Account menu simulation
const accountItem = document.querySelector('.nav-item');

accountItem.addEventListener('click', function() {
    console.log('Account & Lists clicked');
    alert('Sign in to access your account');
});

// Orders tracking
const ordersItem = document.querySelectorAll('.nav-item')[1];

if (ordersItem) {
    ordersItem.addEventListener('click', function() {
        console.log('Returns & Orders clicked');
        alert('View your orders');
    });
}

// Welcome message
console.log('🛒 Amazon Homepage Clone loaded successfully!');
console.log('📦 Features active:');
console.log('   ✓ Search functionality');
console.log('   ✓ Cart counter');
console.log('   ✓ Add to cart buttons');
console.log('   ✓ Smooth scrolling');
console.log('   ✓ Interactive hover effects');

// Simple analytics simulation
let pageLoadTime = new Date();
console.log(`Page loaded at: ${pageLoadTime.toLocaleTimeString()}`);

// Track time on page
window.addEventListener('beforeunload', function() {
    const timeSpent = Math.round((new Date() - pageLoadTime) / 1000);
    console.log(`User spent ${timeSpent} seconds on the page`);
});
