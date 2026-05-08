// Product data - images are arrays to support multiple images
const products = [
    { id: 1, name: "5-in-1 Hair Dryer Brush", category: "beauty", price: 2999, variants: ["Standard"], description: "All-in-one styling tool with dryer, curler, and straightener for salon-like results at home. This versatile hair dryer brush combines multiple functions including drying, volumizing, smoothing, and curling, allowing you to style your hair in a single step. It uses advanced ionic technology to reduce frizz, enhance shine, and improve overall hair texture. The ceramic coating ensures even heat distribution, minimizing damage while maintaining healthy hair. With multiple heat settings and an ergonomic lightweight design, it is suitable for all hair types and perfect for daily styling, saving time and effort while delivering professional-level results at home.", images: ["https://img.drz.lazcdn.com/static/pk/p/eea72037136c90ff9a79129204b9e03a.jpg_720x720q80.jpg"], badge: "Best Seller" },
    { id: 2, name: "Crystal Luxe Glass Bottle", category: "home", price: 1299, variants: ["Multi Colors"], description: "Premium BPA-free stylish bottle with leak-proof lid for gym & travel. Crafted with high-quality durable glass, this bottle ensures safe and chemical-free hydration for daily use. Its sleek and modern design adds a premium look, making it perfect for office, gym, or outdoor activities. The secure leak-proof lid prevents spills, while the sturdy build enhances long-term usability. Easy to clean and reusable, it promotes an eco-friendly lifestyle by reducing plastic waste. Lightweight and convenient to carry, it is ideal for maintaining hydration throughout the day while combining functionality with elegance and style.", images: ["https://www.ardropshipping.com/storage/products/NiveBottle_1776717582_69e68f0e66c7e.jpg"] },
    { id: 3, name: "Women Printed Night Suit Set", category: "clothing", price: 1499, variants: ["Orange", "Pink", "Purple", "Black"], description: "Soft trouser comfortable nightwear for daily use & summer comfort. Made from breathable and lightweight fabric, this night suit ensures maximum comfort and relaxation during sleep. The soft texture feels gentle on the skin, making it suitable for long wear without irritation. Designed with attractive prints and a modern fit, it offers both style and comfort for home use. Ideal for warm weather, the fabric allows proper airflow, keeping you cool throughout the night. Perfect for lounging, sleeping, or casual indoor wear, this set combines comfort, durability, and trendy design for everyday use.", images: ["https://www.ardropshipping.com/storage/products/yellow--black-women-printed-night-suit-fabric-jersey-28028-510.jpg", "https://images.olx.com.pk/thumbnails/599655947-600x450.jpeg"] },
    { id: 4, name: "Brown leather Tote Bag", category: "bags", price: 3199, variants: ["Brown"], description: "Spacious premium tote bag for office, shopping & travel use. Made from high-quality rexine and Leather material, this bag offers durability along with a stylish appearance. It features a large interior compartment that can easily hold daily essentials such as books, gadgets, and personal items. The sturdy handles provide comfortable carrying, while the elegant  color adds a sophisticated touch to your look. Designed for versatility, it is suitable for work, shopping, and travel purposes. Its structured design ensures shape retention, making it both practical and fashionable for everyday use.", images: ["https://i.pinimg.com/736x/2d/cf/59/2dcf592452b5e3e995a0cdc44d35d1ca.jpg"] },
    { id: 5, name: "Mustard Leather Handbag Set", category: "bags", price: 2899, variants: ["Mustard"], description: "Stylish PU leather handbag set designed for students with trendy look. This elegant handbag set includes multiple pieces to suit different needs, offering both style and convenience. Made from high-quality PU leather, it provides a premium feel while remaining lightweight and durable. The mustard color gives a bold and fashionable appearance, perfect for modern outfits. With spacious compartments and organized storage, it allows you to carry essentials easily. Suitable for college, casual outings, and daily use, this set combines functionality, versatility, and a stylish design.", images: ["https://content.public.markaz.app/markazimagevideo/public/products/1598-39-706932-product-1.webp"] },
    { id: 6, name: "4-Piece PU Leather Handbag Set", category: "bags", price: 2999, variants: ["White", "Black", "Maroon", "Pink", "Blue", "Yellow", "Brown", "Grey"], description: "Premium multi-piece handbag set with elegant paisley design. This set includes multiple bags designed for different occasions, providing versatility and convenience in one package. Crafted from durable PU leather, it ensures long-lasting use while maintaining a stylish look. The elegant paisley pattern adds a unique and premium touch to the overall design. Each piece offers ample storage space for essentials, making it ideal for daily use, travel, or special occasions. Lightweight and easy to carry, this handbag set is perfect for those who value both fashion and practicality.", images: ["https://content.public.markaz.app/markazimagevideo/public/products/977-37-333483-product-1.jpg", "https://content.public.markaz.app/markazimagevideo/public/products/977-37-333483-product-2.jpg", "https://content.public.markaz.app/markazimagevideo/public/products/977-37-333483-product-3.jpg", "https://content.public.markaz.app/markazimagevideo/public/products/977-37-333483-product-4.jpg", "https://content.public.markaz.app/markazimagevideo/public/products/977-37-333483-product-5.jpg", "https://content.public.markaz.app/markazimagevideo/public/products/977-37-333483-product-7.jpg"], badge: "Most Selling" },
    { id: 7, name: "24K Pure Black Perfume", category: "perfume", price: 2799, variants: ["Standard"], description: "Long-lasting luxury fragrance for premium feel. This perfume is designed with a rich and intense scent profile that leaves a lasting impression throughout the day. Its carefully blended notes create a bold and sophisticated aroma suitable for both formal and casual occasions. The fragrance is long-lasting, reducing the need for frequent reapplication. Ideal for individuals who prefer a strong and elegant scent, it enhances confidence and personal style. Packaged in a stylish bottle, it reflects luxury and quality, making it a perfect addition to your fragrance collection.", images: ["https://content.public.markaz.app/markazimagevideo/public/products/860-281-590483-product-1.jpeg", "https://content.public.markaz.app/markazimagevideo/public/products/860-281-590483-product-2.jpeg"] },
    { id: 8, name: "9 PM Afnan Inspired Perfume", category: "perfume", price: 2699, variants: ["Standard"], description: "Bold and attractive scent perfect for evening wear. This fragrance features a strong and captivating aroma that is ideal for nighttime events and special occasions. Its unique blend of notes creates a warm and inviting scent that enhances your overall presence. Designed for long-lasting performance, it keeps you feeling fresh and confident for hours. The elegant bottle design adds a premium touch, making it suitable for gifting as well. Perfect for those who want to stand out, this perfume combines style, confidence, and sophistication in one fragrance.", images: ["https://content.public.markaz.app/markazimagevideo/public/products/1183-206-710837-product-1.webp"] },
    { id: 9, name: "Flora Floral Perfume", category: "perfume", price: 3299, variants: ["Standard"], description: "Fresh floral fragrance for daily elegance. This perfume is crafted with delicate floral notes that provide a soft and refreshing scent ideal for everyday use. Its light composition makes it suitable for both daytime and casual occasions, offering a pleasant and soothing experience. The fragrance is designed to last for several hours while maintaining a subtle yet noticeable presence. Packaged in a beautifully designed bottle, it adds a touch of sophistication to your collection. Perfect for individuals who prefer a gentle and elegant fragrance.", images: ["https://content.public.markaz.app/markazimagevideo/public/products/1004-281-499135-product-1-withcode.jpeg"] },
    { id: 10, name: "Wasim Akram 502 Inspired", category: "perfume", price: 1999, variants: ["Standard"], description: "Classic refreshing fragrance with premium vibe. This perfume delivers a balanced blend of fresh and woody notes, creating a timeless scent suitable for all occasions. Its long-lasting formula ensures continuous freshness throughout the day. Designed for versatility, it can be worn both casually and formally, making it a reliable everyday fragrance. The elegant packaging enhances its premium appeal, while the scent reflects confidence and sophistication. Ideal for individuals seeking a classic yet modern fragrance experience.", images: ["https://content.public.markaz.app/markazimagevideo/public/products/1183-281-718021-product-1.webp", "https://content.public.markaz.app/markazimagevideo/public/products/1183-281-718021-product-2.webp"] },
    { id: 11, name: "Jasmine Unisex Perfume", category: "perfume", price: 2099, variants: ["Standard"], description: "Light and soft fragrance for both men & women. This perfume is carefully crafted with delicate jasmine floral notes blended with subtle fresh undertones to create a soothing and elegant scent. It is designed for everyday wear, making it suitable for office, casual outings, and social gatherings. The fragrance is gentle yet noticeable, providing a calm and refreshing experience throughout the day. Its balanced composition ensures it is not overpowering, making it perfect for unisex use. The long-lasting formula keeps you fresh for hours while maintaining a soft, classy impression that suits all personalities.", images: ["https://content.public.markaz.app/markazimagevideo/public/products/691-281-412949-product-1.jpg"] },
    { id: 12, name: "Morena Noir Perfume", category: "perfume", price: 2199, variants: ["Standard"], description: "Deep bold fragrance for confident personality. Morena Noir is designed for individuals who prefer strong, intense, and long-lasting scents that leave a powerful impression. It combines woody, musky, and slightly spicy notes to create a rich aroma suitable for evening wear and special occasions. The fragrance is crafted to enhance confidence and elegance, making it ideal for formal events and night outings. Its premium formulation ensures durability on skin for extended hours without fading quickly. Packaged in a stylish bottle, it reflects luxury, strength, and sophistication in every spray.", images: ["https://content.public.markaz.app/markazimagevideo/public/products/512-281-456597-product-2.jpeg", "https://content.public.markaz.app/markazimagevideo/public/products/512-281-456597-product-1.jpg"] },
    { id: 13, name: "Premium Silk Saree Collection", category: "clothing", price: 4199, variants: ["Black", "Maroon", "Green"], description: "Elegant silk saree for weddings & formal wear. This saree is made from high-quality silk fabric that offers a smooth, rich texture and graceful drape. It is designed for special occasions such as weddings, parties, and festive events, giving a traditional yet luxurious look. The fabric is lightweight yet durable, ensuring comfort during long wear. Its elegant color combinations and detailed patterns enhance its premium appeal. The saree reflects cultural beauty while maintaining modern style aesthetics, making it a perfect choice for women who want to stand out with elegance and sophistication.", images: ["https://amnaismail.com/Images/69982023-01-13WhatsApp%20Image%202023-01-13%20at%2012.40.43%20AM.jpeg", "https://dressifyshops.com/cdn/shop/files/IMG-20250427-WA0012.jpg?v=1753129244"] },
    { id: 14, name: "Beige Linen 2-Piece Set", category: "clothing", price: 2799, variants: ["Standard"], description: "Breathable and stylish summer outfit. Made from premium linen fabric, this 2-piece set is designed to provide maximum comfort in hot weather. The lightweight and airy material allows proper ventilation, keeping you cool throughout the day. Its minimalist beige tone adds a classy and modern appearance suitable for casual outings, office wear, or travel. The fabric is soft on skin and easy to maintain, making it ideal for daily use. With its simple yet elegant design, it combines comfort, style, and practicality in one outfit.", images: ["https://content.public.markaz.app/markazimagevideo/public/products/248-11-712098-product-2.webp"] },
    { id: 15, name: "Eid Cotton Suit", category: "clothing", price: 2899, variants: ["Standard"], description: "Premium cotton festive wear with elegant design. This suit is specially designed for Eid celebrations and festive occasions, offering a perfect blend of tradition and modern fashion. Made from high-quality cotton, it ensures breathability and comfort even during long events. The fabric is soft, durable, and suitable for warm weather. Its elegant embroidery and stylish patterns enhance its festive appeal. This outfit is ideal for women who want a graceful and comfortable look during special occasions while maintaining cultural elegance and charm.", images: ["https://content.public.markaz.app/markazimagevideo/public/products/1119-11-707517-product-1.webp"] },
    { id: 16, name: "Antique Stone Rings", category: "jewelry", price: 1999, variants: ["Standard"], description: "Vintage-style rings with elegant stone finish. These rings are designed with a classic antique look, featuring beautifully embedded stones that enhance their overall appeal. The craftsmanship reflects traditional artistry combined with modern style. Perfect for parties, casual wear, or gifting, these rings add a touch of sophistication to any outfit. Their durable build ensures long-lasting shine and quality. Lightweight and comfortable to wear, they are suitable for daily use as well. Ideal for those who appreciate vintage jewelry with a stylish and elegant touch.", images: ["https://content.public.markaz.app/markazimagevideo/public/products/700-44-497650-product-1.jpg"] },
    { id: 17, name: "Couple Rings Set", category: "jewelry", price: 2099, variants: ["Standard"], description: "Stylish matching rings set for couples. This set symbolizes love, connection, and commitment between partners. Crafted with fine detailing, the rings feature a smooth finish and elegant design suitable for daily wear. They are lightweight, durable, and comfortable, making them perfect for long-term use. Ideal for gifting on anniversaries, engagements, or special moments, this set represents emotional value along with style. The modern yet minimal design ensures it matches any outfit while carrying a meaningful sentiment of togetherness.", images: ["https://content.public.markaz.app/markazimagevideo/public/products/603-44-712564-product-1.webp"] },
    { id: 18, name: "Aura Premium Wrist Watch", category: "watch", price: 2199, variants: ["White", "Black", "Arabic Dial"], description: "Minimal stylish watch for daily wear. Aura Premium Wrist Watch combines elegance and simplicity, making it suitable for both casual and formal occasions. It features a clean dial design with precise timekeeping functionality. The durable strap ensures comfort during extended wear, while the scratch-resistant glass adds longevity. Its lightweight structure makes it easy to carry throughout the day. Designed for modern individuals, this watch enhances personal style while maintaining practicality. It is perfect for those who prefer a refined and minimalistic accessory.", images: ["https://content.public.markaz.app/markazimagevideo/public/products/511-132-722745-product-1.webp", "https://content.public.markaz.app/markazimagevideo/public/products/1855-132-679053-product-3.webp"] },
    { id: 19, name: "Golden T9 Trimmer", category: "grooming", price: 2499, variants: ["Gold"], description: "Professional grooming trimmer with sharp blades. This trimmer is designed for precise and smooth cutting, making it ideal for beard shaping, hair trimming, and personal grooming. It features high-quality stainless steel blades that ensure clean and accurate results without irritation. The powerful motor provides consistent performance, while its ergonomic design offers easy handling. Rechargeable functionality makes it convenient for travel and daily use. Suitable for both professional and personal grooming, it delivers salon-like results at home with efficiency and reliability.", images: ["https://content.public.markaz.app/markazimagevideo/public/products/943-49-466768-product-1.jpg",] },
    { id: 20, name: "Portable Rechargeable Fan", category: "electronics", price: 3299, variants: ["Standard"], description: "Type-C mini fan with strong airflow for summer. This portable fan is designed for convenience and powerful cooling in compact size. It features rechargeable battery support with Type-C charging for fast and easy power-up. Despite its small size, it delivers strong airflow suitable for personal cooling at home, office, or outdoor use. Its lightweight and portable design makes it easy to carry anywhere. Ideal for hot weather, it ensures instant cooling while being energy-efficient and user-friendly, making it a perfect summer essential.", images: ["https://www.ardropshipping.com/storage/products/01KKJE2NNZ1R19FET23BNNS4DF_1773785864_69b9d3081b576.jpg"] },
    { id: 21, name: "Electric Mosquito Trap", category: "home", price: 2299, variants: ["Standard"], description: "UV mosquito killer for safe indoor protection. This device uses UV light technology to attract and trap mosquitoes effectively without harmful chemicals. It provides a safe and eco-friendly solution for maintaining a mosquito-free environment at home. The silent operation ensures no disturbance during sleep or work. Easy to use and maintain, it is suitable for bedrooms, living rooms, and offices. Its compact design allows flexible placement anywhere in the house. Ideal for health-conscious users looking for a reliable indoor pest control solution.", images: ["https://www.ardropshipping.com/storage/products/1_1774612195_69c66ee3df515.jpg", "https://www.ardropshipping.com/storage/products/5_1774612196_69c66ee4373cf.jpg"] }
];

// Google Apps Script API Configuration
const GAS_API_URL = "https://script.google.com/macros/s/AKfycbz_F_qxKpc2M-kyq_HU2xBPE70O2e2hl4ZFxf3l8JaKjtDYb1C93q_uoXaznqRL-mMQ/exec";

const API_URL = GAS_API_URL;



// Show error message on UI
function showAPIErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
        background: #fee;
        color: #c33;
        padding: 1rem;
        margin: 1rem;
        border-radius: 8px;
        border-left: 4px solid #c33;
    `;
    errorDiv.innerHTML = `<strong>API Error:</strong> ${message}`;

    const mainElement = document.querySelector('main');
    if (mainElement) {
        mainElement.insertBefore(errorDiv, mainElement.firstChild);
    }
}

// Cart management
let cart = [];
const storageKey = 'cart';

function isLocalStorageAvailable() {
    try {
        const testKey = '__test__';
        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);
        return true;
    } catch (e) {
        return false;
    }
}

function loadCartFromStorage() {
    if (!isLocalStorageAvailable()) return [];
    const stored = localStorage.getItem(storageKey);
    return stored ? JSON.parse(stored) : [];
}

function saveCartToStorage(cartData) {
    if (!isLocalStorageAvailable()) return;
    localStorage.setItem(storageKey, JSON.stringify(cartData));
}

cart = loadCartFromStorage();

// Utility functions
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

function saveCart() {
    saveCartToStorage(cart);
    updateCartCount();
}

function updateFeaturedProduct(product) {
    const titleEl = document.getElementById('featured-title');
    const descEl = document.getElementById('featured-desc');
    const priceEl = document.getElementById('featured-price');
    const priceOldEl = document.getElementById('featured-price-old');
    const badgeEl = document.getElementById('featured-badge');

    if (!product) return;
    if (titleEl) titleEl.innerHTML = `The <em>${product.name}</em>`;
    if (descEl) descEl.textContent = `${product.description.slice(0, 120)}...`;
    if (priceEl) priceEl.textContent = `PKR ${product.price}`;
    if (priceOldEl) priceOldEl.textContent = `$${Math.round(product.price * 1.25)}`;
    if (badgeEl) badgeEl.textContent = product.badge || 'Featured';
    const imgEl = document.getElementById('featured-image');
    if (imgEl && product.images && product.images[0]) {
        imgEl.src = product.images[0];
        imgEl.alt = product.name;
        const placeholder = document.querySelector('.feat-placeholder');
        if (placeholder) placeholder.style.display = 'none';
    }
}
// `currentProductVariant` is provided by variants-feature-fixed.js when included

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    // Variant validation for product page
    if (window.location.pathname.includes('product.html') && product.variants && product.variants.length > 1 && currentProductVariant === '') {
        const error = document.getElementById('variant-error');
        if (error) {
            error.classList.add('show');
            const btn = document.getElementById('add-cart-btn');
            if (btn) btn.style.animation = 'shake 0.5s';
        }
        return;
    }
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        const cartItem = { ...product, quantity: 1 };
        if (currentProductVariant) {
            cartItem.variant = currentProductVariant;
        }
        cart.push(cartItem);
    }
    saveCart();
    currentProductVariant = ''; // Reset
}


function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    loadCart();
}

function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = parseInt(newQuantity);
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            loadCart();
        }
    }
}

// DOM manipulation functions
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
        <div class="product-info">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <h3>${product.name}</h3>
            <p class="product-price">PKR ${product.price}</p>
            <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('btn')) {
            window.location.href = `product.html?id=${product.id}`;
        }
    });
    return card;
}

function loadProducts(containerId, productList = products) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    if (productList.length === 0) {
        container.innerHTML = '<p class="no-results">No products found matching your search.</p>';
        return;
    }
    productList.forEach(product => {
        container.appendChild(createProductCard(product));
    });
}

function setupProductFilters() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const sortSelect = document.getElementById('sort-select');

    const applyFilters = () => {
        const query = searchInput.value.trim().toLowerCase();
        const sortValue = sortSelect.value;

        let filteredProducts = products.filter(product => {
            return product.name.toLowerCase().includes(query)
                || product.category.toLowerCase().includes(query)
                || product.description.toLowerCase().includes(query);
        });

        if (sortValue === 'price-low') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortValue === 'price-high') {
            filteredProducts.sort((a, b) => b.price - a.price);
        } else if (sortValue === 'category') {
            filteredProducts.sort((a, b) => a.category.localeCompare(b.category));
        } else {
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        }

        loadProducts('products-grid', filteredProducts);
    };

    if (searchBtn) {
        searchBtn.addEventListener('click', applyFilters);
    }

    if (searchInput) {
        searchInput.addEventListener('keyup', event => {
            if (event.key === 'Enter') {
                applyFilters();
            }
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', applyFilters);
    }
}

function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    if (!product) {
        document.getElementById('product-detail').innerHTML = '<p>Product not found.</p>';
        return;
    }

    // FAKE REVIEWS (existing)
    const fakeReviews = [
        { name: "Sarah", rating: 5, comment: "Great product!" },
        { name: "Mike", rating: 4, comment: "Good value" },
        { name: "Emma", rating: 5, comment: "Perfect!" }
    ];
    const averageRating = fakeReviews.reduce((sum, r) => sum + r.rating, 0) / fakeReviews.length;

    document.getElementById('product-detail').innerHTML = `
    <div class="product-images">
      ${product.images.map(img => `<img src="${img}" alt="${product.name}" loading="lazy">`).join('')}
    </div>
    <div class="product-info-detail">
      ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
      <h2>${product.name}</h2>
      <div class="product-rating">
        <div class="stars">${generateStars(averageRating)}</div>
        <span>${averageRating.toFixed(1)} (${fakeReviews.length} reviews)</span>
      </div>
      <p class="product-price">PKR ${product.price}</p>
      <p class="product-description">${product.description}</p>
      ${renderVariantSelector(product)}
      <button class="btn" onclick="addToCartValidated(${product.id})" id="add-cart-btn">Add to Cart</button>
      <button class="btn-outline" onclick="buyNowValidated(${product.id})">Buy Now</button>

      <div class="reviews-section">
        <h3>Customer Reviews</h3>
        <div class="reviews-list">
          ${fakeReviews.map(review => `
            <div class="review-item">
              <div class="review-header">
                <strong>${review.name}</strong>
                <div class="review-stars">${generateStars(review.rating)}</div>
              </div>
              <p class="review-comment">${review.comment}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

    setupVariantListener();
}

function setupColorButtons(productId) {
    const buttons = document.querySelectorAll('.color-btn');
    const product = products.find(p => p.id === productId);
    buttons.forEach(btn => {
        btn.addEventListener('click', function () {
            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentProductVariant = this.dataset.variant;
            const error = document.getElementById('variant-error');
            if (error) error.classList.remove('show');
        });
    });
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '⭐';
    }
    if (hasHalfStar) {
        stars += '⭐'; // For simplicity, using full star
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += '☆';
    }
    return stars;
}

function loadCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
        cartTotal.innerHTML = '';
        checkoutBtn.style.display = 'none';
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        const variantLabel = item.selectedVariant || item.variant || '';
        itemDiv.innerHTML = `
            <img src="${item.images[0]}" alt="${item.name}" loading="lazy">
            <div class="cart-item-info">
                <h3>${item.name}${variantLabel ? ` — <span class="cart-variant">${variantLabel}</span>` : ''}</h3>
                <p>PKR ${item.price}</p>
                <div class="cart-quantity">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <input type="number" value="${item.quantity}" onchange="updateQuantity(${item.id}, this.value)">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItems.appendChild(itemDiv);
    });

    cartTotal.innerHTML = `<p>Total: PKR ${total}</p>`;
    checkoutBtn.style.display = 'inline-block';
}

function loadOrderSummary() {
    const orderItems = document.getElementById('order-items');
    const orderTotal = document.getElementById('order-total');

    if (cart.length === 0) {
        orderItems.innerHTML = '<p>No items in cart.</p>';
        orderTotal.innerHTML = '';
        return;
    }

    orderItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const variantLabel = item.selectedVariant || item.variant || '';
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <p>${item.name}${variantLabel ? ` - ${variantLabel}` : ''} x ${item.quantity} - PKR ${item.price * item.quantity}</p>
        `;
        orderItems.appendChild(itemDiv);
    });

    orderTotal.innerHTML = `<p><strong>Total: PKR ${total}</strong></p>`;
}

// Helper: show inline error below a field
function showFieldError(fieldId, message) {
    const errorEl = document.getElementById(fieldId + '-error');
    const inputEl = document.getElementById(fieldId);
    if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.add('visible');
    }
    if (inputEl) {
        inputEl.classList.add('input-error');
    }
}

// Helper: clear all inline errors
function clearFieldErrors() {
    document.querySelectorAll('.field-error').forEach(el => {
        el.textContent = '';
        el.classList.remove('visible');
    });
    document.querySelectorAll('.input-error').forEach(el => {
        el.classList.remove('input-error');
    });
}

async function handleCheckout(event) {
    event.preventDefault();
    clearFieldErrors();

    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();

    let hasError = false;

    if (!name) {
        showFieldError('name', 'Please enter your full name.');
        hasError = true;
    }

    if (!address) {
        showFieldError('address', 'Please enter your delivery address.');
        hasError = true;
    }

    if (!phone) {
        showFieldError('phone', 'Please enter your phone number.');
        hasError = true;
    } else {
        // Basic phone validation (Pakistan: 11 digits, e.g. 03001234567)
        const phoneRegex = /^\d{11}$/;
        if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
            showFieldError('phone', 'Enter a valid 11-digit number (e.g. 03001234567).');
            hasError = true;
        }
    }

    if (hasError) return;

    // Prepare cart items string
    const items = cart.map(item => {
        const variantLabel = item.selectedVariant || item.variant || '';
        const name = variantLabel ? `${item.name} - ${variantLabel}` : item.name;
        return `${name} x${item.quantity}`;
    }).join(', ');

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Send order to Google Sheets
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                address,
                phone,
                items,
                totalPrice
            })
        });

        console.log('Order sent to Google Sheets successfully');
    } catch (error) {
        console.error('Error sending order:', error);
    }

    // Clear cart and show success
    cart = [];
    saveCart();
    const modal = document.getElementById('order-success-modal');
    if (modal) {
        modal.style.display = 'flex';
        requestAnimationFrame(() => modal.classList.add('active'));
    }
}

// Page-specific initialization
document.addEventListener('DOMContentLoaded', async () => {
    updateCartCount();

    // Set active navigation link
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === 'index.html' && href === 'index.html') || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.product-card, .cart-item, .checkout-form, .order-summary').forEach(el => {
        observer.observe(el);
    });

    const nav = document.getElementById('nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', window.scrollY > 80);
        });
    }

    const path = window.location.pathname;

    if (path.includes('index.html') || path === '/' || path.endsWith('website/')) {
        // Home page - load featured products (first 6) and hero details from JSON
        loadProducts('featured-grid', products.slice(0, 6));
        updateFeaturedProduct(products[0]);
    } else if (path.includes('products.html')) {
        // Products page
        loadProducts('products-grid');
        setupProductFilters();
    } else if (path.includes('product.html')) {
        // Product detail page
        loadProductDetail();
    } else if (path.includes('cart.html')) {
        // Cart page
        loadCart();
    } else if (path.includes('checkout.html')) {
        // Checkout page
        loadOrderSummary();
        const checkoutForm = document.getElementById('checkout-form');
        if (checkoutForm) checkoutForm.addEventListener('submit', handleCheckout);

        // Clear error on individual fields as user types
        ['name', 'address', 'phone'].forEach(fieldId => {
            const el = document.getElementById(fieldId);
            if (el) {
                el.addEventListener('input', () => {
                    const errorEl = document.getElementById(fieldId + '-error');
                    if (errorEl) {
                        errorEl.textContent = '';
                        errorEl.classList.remove('visible');
                    }
                    el.classList.remove('input-error');
                });
            }
        });
    }
});