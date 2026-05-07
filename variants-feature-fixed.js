// ✅ FIXED VARIANTS IMPLEMENTATION - No Errors

// GLOBAL STATE
let currentProductVariant = null;

// VARIANTS RENDERER
function renderVariantSelector(product) {
  if (!product.variants || product.variants.length <= 1) return '';

  // Render variants as clickable buttons (color swatches / pill buttons)
  return `
    <div class="variant-section">
      <label>Select Color:</label>
      <div class="color-buttons" id="variant-buttons">
        ${product.variants.map(v => `<button type="button" class="color-btn" data-variant="${v}">${v}</button>`).join('')}
      </div>
      <div id="variant-error" class="variant-error">Please select a color</div>
    </div>
  `;
}

// SETUP LISTENER
function setupVariantListener() {
  // Attach listeners to variant buttons (if present)
  const container = document.getElementById('variant-buttons');
  if (!container) return;

  const buttons = Array.from(container.querySelectorAll('.color-btn'));
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentProductVariant = btn.dataset.variant;
      const error = document.getElementById('variant-error');
      if (error) error.classList.remove('show');
    });

    // keyboard support
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });
}

// IMAGE GALLERY SETUP
function setupImageGallery() {
  const main = document.getElementById('main-product-image');
  if (!main) return;

  const thumbs = Array.from(document.querySelectorAll('.thumb-btn'));
  if (!thumbs.length) return;

  thumbs.forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.dataset.src;
      if (!src) return;
      main.src = src;
      thumbs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });

    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });
}

// VALIDATED ADD TO CART
function addToCartValidated(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  // VALIDATION
  if (product.variants && product.variants.length > 1 && !currentProductVariant) {
    const error = document.getElementById('variant-error');
    if (error) error.classList.add('show');
    return;
  }

  // CREATE ITEM WITH VARIANT
  const cartItem = {
    ...product,
    quantity: 1,
    selectedVariant: currentProductVariant || 'Standard'
  };

  // ADD OR UPDATE CART
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push(cartItem);
  }

  saveCart();
  currentProductVariant = null; // RESET
}

// VALIDATED BUY NOW
function buyNowValidated(productId) {
  addToCartValidated(productId);
  window.location.href = 'checkout.html';
}

// INTEGRATED loadProductDetail
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
    <div class="product-detail-grid">
      <div class="product-gallery">
        <div class="main-image">
          <img src="${product.images && product.images[0] ? product.images[0] : ''}" alt="${product.name}" id="main-product-image" loading="lazy">
        </div>
        ${product.images && product.images.length > 1 ? `
        <div class="thumbs">
          ${product.images.map((img, i) => `<button type="button" class="thumb-btn ${i === 0 ? 'active' : ''}" data-src="${img}" aria-label="View image ${i + 1}"><img src="${img}" alt="${product.name}" loading="lazy"></button>`).join('')}
        </div>
        ` : ''}
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
        
        <div class="product-buttons">
          <button class="btn" onclick="addToCartValidated(${product.id})">Add to Cart</button>
          <button class="btn btn-buy-now" onclick="buyNowValidated(${product.id})">Buy Now</button>
        </div>
        
        <div class="reviews-section">
          <h3>Customer Reviews</h3>
          ${fakeReviews.map(r => `
            <div class="review-item">
              <div class="review-header">
                <strong>${r.name}</strong>
                <div class="review-stars">${generateStars(r.rating)}</div>
              </div>
              <p>${r.comment}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  // Reset variant selection state for fresh product page
  currentProductVariant = null;
  setupVariantListener();
  setupImageGallery();
}

// VARIANTS IN ORDER SUMMARY
function loadOrderSummary() {
  const orderItems = document.getElementById('order-items');
  if (!orderItems) return;

  orderItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    const variant = item.selectedVariant && item.selectedVariant !== 'Standard' ? ` - ${item.selectedVariant}` : '';
    orderItems.innerHTML += `
      <p>${item.name}${variant} x ${item.quantity} - PKR ${item.price * item.quantity}</p>
    `;
  });

  document.getElementById('order-total').innerHTML = `<p><strong>Total: PKR ${total}</strong></p>`;
}

// Variants module: checkout handled in main script.js

