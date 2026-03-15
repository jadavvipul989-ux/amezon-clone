# Amazon Homepage Clone 🛒

A fully responsive Amazon homepage clone built with HTML5, CSS3, and Vanilla JavaScript. Features a modern design with working interactivity including search functionality and a dynamic shopping cart.

## 📁 Project Structure

```
amazon-clone/
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # Interactive functionality
├── images/             # Local image assets
│   ├── logo.svg        # Amazon logo
│   ├── search-icon.svg # Search magnifying glass
│   ├── cart-icon.svg   # Shopping cart icon
│   ├── location-icon.svg # Location pin
│   ├── hero-background.svg # Hero section background
│   ├── banner.svg      # Promotional banner
│   └── product-placeholder.svg # Product image placeholder
└── README.md           # This file
```

## ✨ Features

### HTML5 Structure
- **Semantic Navigation Bar**
  - Logo with SVG image
  - Location selector
  - Advanced search bar with category dropdown
  - Account & Orders section
  - Shopping cart with live counter
  
- **Hero Section**
  - Eye-catching banner with gradient background
  - Call-to-action button
  - Smooth overlay gradient

- **Product Grid**
  - 8 product categories:
    - Electronics (4-image grid)
    - Fashion Trends (4-image grid)
    - Home Decor (4-image grid)
    - Beauty & Personal Care (4-image grid)
    - Gaming (single large image)
    - Books & Audible (single large image)
    - Health & Fitness (single large image)
    - Toys & Games (single large image)
  - "Add to Cart" button on every card
  - Category exploration links

- **Footer Section**
  - Back to top button
  - Multiple footer columns
  - Links to various sections

### CSS3 Styling
- **Layout Systems**
  - CSS Grid for product cards
  - Flexbox for navigation and card internals
  
- **Color Palette** (Authentic Amazon)
  - Navigation: `#131921` (dark)
  - Secondary Nav: `#232F3E` (light dark)
  - Accent: `#FF9900` (orange)
  - Buttons: `#FEBD69` (golden orange)
  
- **Visual Effects**
  - Smooth hover transitions on cards (lift effect)
  - Staggered fade-in animations on load
  - Button hover effects with color changes
  - Cart counter pulse animation
  - Sticky navigation bar
  
- **Typography**
  - Outfit font family for body text
  - Sora font family for headings
  
- **Responsive Design**
  - Desktop: Full layout with all features
  - Tablet (1024px): Adjusted grid
  - Mobile (768px): Stacked layout, simplified nav
  - Small mobile (480px): Single column

### JavaScript Functionality

#### 🛒 Shopping Cart
- **Dynamic Counter**: Updates in real-time when items are added
- **Visual Feedback**: 
  - Cart icon pulses when item is added
  - Button changes to "✓ Added!" with green color
  - Automatic reset after 1.5 seconds
- **Console Logging**: Tracks cart count

#### 🔍 Search Functionality
- **Search Button**: Triggers search on click
- **Enter Key Support**: Press Enter to search
- **Real-time Logging**: Logs search terms as you type (after 3 characters)
- **Category Filter**: Dropdown to filter by department
- **Visual Feedback**: Input border highlights on search

#### 📍 Navigation Features
- **Smooth Scrolling**: Back to top button
- **Link Tracking**: Console logs all navigation clicks
- **Hero CTA**: Scrolls smoothly to product grid

#### 📊 Analytics
- **Page Load Time**: Logged in console
- **User Interactions**: Tracks hovers, clicks, and time on page
- **Category Tracking**: Logs which categories users explore

## 🚀 Getting Started

### Installation

1. **Download all files**
   - Save `index.html`, `style.css`, and `script.js` in the same folder
   - Create an `images/` subfolder in the same directory
   - Save all SVG files from the `images/` folder

2. **Project folder structure should look like:**
   ```
   your-folder/
   ├── index.html
   ├── style.css
   ├── script.js
   └── images/
       ├── logo.svg
       ├── search-icon.svg
       ├── cart-icon.svg
       ├── location-icon.svg
       ├── hero-background.svg
       ├── banner.svg
       └── product-placeholder.svg
   ```

3. **Open in browser**
   - Double-click `index.html`
   - Or right-click → Open with → Your browser

### Optional: Replace Product Images

The project currently uses Unsplash placeholder images for products. You can:

1. **Keep Unsplash Images** (requires internet connection)
   - Images are already configured in `index.html`
   - Will load automatically when online

2. **Use Local Images**
   - Save your own product images in the `images/` folder
   - Update the `src` attributes in `index.html`
   - Example: `<img src="images/headphones.jpg" alt="Headphones">`

## 🎨 Customization

### Colors
Edit CSS variables in `style.css`:
```css
:root {
    --amazon-dark: #131921;      /* Main nav color */
    --amazon-light: #232F3E;     /* Secondary nav */
    --amazon-orange: #febd69;    /* Buttons & accents */
    --amazon-accent: #FF9900;    /* Hover states */
}
```

### Fonts
Current fonts (loaded from Google Fonts):
- **Outfit**: Body text
- **Sora**: Headings

To change, update the Google Fonts link in `index.html` and CSS font-family rules.

### Layout
- **Product Grid**: Adjust `grid-template-columns` in `.product-grid`
- **Card Spacing**: Modify `gap` property
- **Breakpoints**: Edit media queries at bottom of CSS

## 💡 Key Features to Explore

### Sticky Navigation
The navbar stays at the top while scrolling:
```css
position: sticky;
top: 0;
z-index: 100;
```

### Staggered Animations
Products fade in with delays:
```css
.product-card:nth-child(1) { animation-delay: 0.1s; }
.product-card:nth-child(2) { animation-delay: 0.15s; }
/* etc... */
```

### Cart Pulse Effect
Dynamically added via JavaScript:
```javascript
cartCountElement.classList.add('cart-pulse');
```

## 🔧 Browser Compatibility

✅ Chrome/Edge (Chromium)
✅ Firefox
✅ Safari
✅ Opera

**Minimum versions:**
- Chrome 90+
- Firefox 88+
- Safari 14+

## 📱 Responsive Breakpoints

- **Large Desktop**: 1600px+ (max content width)
- **Desktop**: 1024px - 1599px
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: < 480px

## 🎯 Learning Highlights

This project demonstrates:
- ✅ Semantic HTML5 structure
- ✅ CSS Grid & Flexbox mastery
- ✅ CSS custom properties (variables)
- ✅ Responsive design patterns
- ✅ JavaScript DOM manipulation
- ✅ Event listeners (click, input, scroll)
- ✅ CSS animations & transitions
- ✅ SVG graphics integration
- ✅ Mobile-first considerations

## 📝 Code Quality

- **Organized**: Clear sections and comments
- **Scalable**: Easy to add more products/categories
- **Accessible**: Semantic HTML with proper alt attributes
- **Performance**: Optimized animations with CSS
- **Maintainable**: Separate files for HTML, CSS, JS

## 🐛 Known Limitations

- Product images use online placeholders (requires internet)
- Search doesn't filter actual products (console logging only)
- Cart doesn't store items (counter only)
- No backend integration
- No user authentication

## 🔮 Future Enhancements

- [ ] Product filtering by search term
- [ ] Cart item management (add, remove, view items)
- [ ] Product detail pages
- [ ] Local storage for cart persistence
- [ ] User authentication simulation
- [ ] Product categories expansion
- [ ] Reviews and ratings
- [ ] Wishlist functionality

## 📚 Resources Used

- **Fonts**: Google Fonts (Outfit, Sora)
- **Icons**: Custom SVG graphics
- **Product Images**: Unsplash API (optional local replacements)
- **Color Palette**: Amazon official branding

## 👨‍💻 Development Notes

### Testing Checklist
- [x] All buttons are clickable
- [x] Search input accepts text
- [x] Cart counter increments
- [x] Hover effects work on all cards
- [x] Navigation is sticky
- [x] Responsive on mobile devices
- [x] Console logs show user interactions
- [x] Back to top button works
- [x] All images load properly
- [x] Animations run smoothly

## 📄 License

This is an educational project created for learning purposes. Amazon and its logo are trademarks of Amazon.com, Inc. This clone is not affiliated with or endorsed by Amazon.

## 🤝 Contributing

This is a practice project, but feel free to:
- Fork and experiment
- Suggest improvements
- Report issues
- Share your enhanced versions

---

**Created with ❤️ for learning frontend development**

*Happy Coding! 🚀*
