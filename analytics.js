// Vercel Web Analytics for vanilla JavaScript
// Initialize the analytics queue function
window.va = window.va || function () {
  (window.vaq = window.vaq || []).push(arguments);
};

// Load the Vercel Analytics script from CDN
(function() {
  const script = document.createElement('script');
  script.src = 'https://cdn.vercel-insights.com/v1/script.js';
  script.defer = true;
  document.head.appendChild(script);
})();
