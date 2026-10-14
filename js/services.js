/**
 * RLK Online Services - Service Directory Engine
 * Handles dynamic catalog rendering, real-time filtering, search, and category switching.
 * Strictly avoids unsafe HTML injection using textContent and safe escaping.
 */

document.addEventListener('DOMContentLoaded', () => {
  // If we are on the services directory page (services.html)
  if (document.getElementById('services-catalog-container')) {
    initServicesDirectory();
  }

  // If we are on the homepage featuring category cards (index.html)
  if (document.getElementById('home-categories-grid')) {
    renderHomeCategories();
  }

  // If we are on the homepage featuring spotlight services (index.html)
  if (document.getElementById('home-featured-services')) {
    renderHomeFeaturedServices();
  }
});

let currentCategoryFilter = 'all';
let currentSearchQuery = '';

/**
 * Initialize Full Directory Page (services.html)
 */
function initServicesDirectory() {
  const tabsContainer = document.getElementById('category-filter-tabs');
  const searchInput = document.getElementById('service-search-input');
  const container = document.getElementById('services-catalog-container');

  // Check URL params for pre-selected category or search
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('category');
  const searchParam = urlParams.get('search');

  if (catParam) {
    currentCategoryFilter = catParam;
  }
  if (searchParam) {
    currentSearchQuery = searchParam;
    if (searchInput) searchInput.value = searchParam;
  }

  // Render category filter tabs
  if (tabsContainer) {
    renderCategoryFilterTabs(tabsContainer);
  }

  // Service request links already have valid href="https://wa.me/917870886355?text=..."
  // and open WhatsApp in a new tab. We ensure analytics or fallback if needed without blocking.
  if (container) {
    container.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-enquire-service-id]');
      if (btn && (!btn.getAttribute('href') || btn.getAttribute('href') === '#')) {
        e.preventDefault();
        const serviceId = btn.getAttribute('data-enquire-service-id');
        const service = findServiceById(serviceId);
        if (service && typeof window.handleServiceEnquiry === 'function') {
          window.handleServiceEnquiry(service.name);
        }
      }
    });
  }

  // Bind Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.trim().toLowerCase();
      renderServicesCatalog();
    });
  }

  // Initial render
  renderServicesCatalog();
}

/**
 * Render Category Filter Tabs
 */
function renderCategoryFilterTabs(container) {
  container.innerHTML = '';

  const allServices = getAllServices();

  // "All Services" Tab
  const allTab = document.createElement('button');
  allTab.type = 'button';
  allTab.className = `filter-tab ${currentCategoryFilter === 'all' ? 'active' : ''}`;
  allTab.setAttribute('role', 'tab');
  allTab.setAttribute('aria-selected', currentCategoryFilter === 'all' ? 'true' : 'false');
  allTab.textContent = `All Services (${allServices.length})`;
  allTab.addEventListener('click', () => {
    setActiveCategoryFilter('all');
  });
  container.appendChild(allTab);

  // Each Category Tab
  serviceCategories.forEach(cat => {
    if (cat.disabled) return;
    const activeCount = (cat.services || []).filter(s => !s.disabled).length;
    const tab = document.createElement('button');
    tab.type = 'button';
    tab.className = `filter-tab ${currentCategoryFilter === cat.id ? 'active' : ''}`;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-selected', currentCategoryFilter === cat.id ? 'true' : 'false');
    tab.textContent = `${cat.shortName || cat.name} (${activeCount})`;
    tab.addEventListener('click', () => {
      setActiveCategoryFilter(cat.id);
    });
    container.appendChild(tab);
  });
}

function setActiveCategoryFilter(categoryId) {
  currentCategoryFilter = categoryId;

  // Update tabs UI
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.classList.remove('active');
    tab.setAttribute('aria-selected', 'false');
  });

  // Find target tab
  const activeTab = Array.from(tabs).find(t => {
    if (categoryId === 'all') return t.textContent.startsWith('All Services');
    const cat = serviceCategories.find(c => c.id === categoryId);
    return cat && t.textContent.startsWith(cat.shortName || cat.name);
  });
  if (activeTab) {
    activeTab.classList.add('active');
    activeTab.setAttribute('aria-selected', 'true');
  }

  // Update URL without reloading
  const url = new URL(window.location);
  if (categoryId === 'all') {
    url.searchParams.delete('category');
  } else {
    url.searchParams.set('category', categoryId);
  }
  window.history.replaceState({}, '', url);

  renderServicesCatalog();
}

/**
 * Filter & Render Services in the Directory
 */
function renderServicesCatalog() {
  const container = document.getElementById('services-catalog-container');
  const countIndicator = document.getElementById('services-count-indicator');
  const emptyState = document.getElementById('services-empty-state');
  if (!container) return;

  const allServices = getAllServices();

  const filtered = allServices.filter(item => {
    // Category filter match
    const matchesCategory = currentCategoryFilter === 'all' || item.categoryId === currentCategoryFilter;

    // Search query match
    const q = currentSearchQuery;
    const matchesSearch = !q || 
      item.name.toLowerCase().includes(q) || 
      item.description.toLowerCase().includes(q) || 
      item.categoryName.toLowerCase().includes(q);

    return matchesCategory && matchesSearch;
  });

  // Update count indicator
  if (countIndicator) {
    countIndicator.textContent = `Showing ${filtered.length} of ${allServices.length} digital services`;
  }

  // Handle empty state gracefully
  if (filtered.length === 0) {
    container.innerHTML = '';
    if (emptyState) {
      emptyState.style.display = 'block';
      const termEl = emptyState.querySelector('#empty-search-term');
      const titleEl = emptyState.querySelector('#empty-state-title');
      const descEl = emptyState.querySelector('#empty-state-desc');

      if (currentSearchQuery) {
        if (titleEl) titleEl.textContent = 'No Services Match Your Search';
        if (descEl) descEl.innerHTML = `We couldn't find any services matching <span style="font-weight: 700; color: var(--text-main);">${escapeHtml(currentSearchQuery)}</span>. Try a different keyword or reset filters.`;
      } else {
        const cat = serviceCategories.find(c => c.id === currentCategoryFilter);
        const catName = cat ? cat.name : 'this category';
        if (titleEl) titleEl.textContent = 'No Services Listed in Category';
        if (descEl) descEl.textContent = `There are currently no services configured under ${catName}. New services can be added anytime in js/services-data.js.`;
      }
    }
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  // Render cards cleanly
  container.innerHTML = filtered.map(service => {
    const safeName = escapeHtml(service.name);
    const safeDesc = escapeHtml(service.description);
    const safeCat = escapeHtml(service.categoryName);
    const safeId = escapeHtml(service.id);
    const advisoryHtml = service.officialAdvisory ? `
      <div class="service-card-advisory">
        <strong>Important Advisory:</strong> ${escapeHtml(service.officialAdvisory)}
      </div>
    ` : '';

    const waData = generateWhatsAppUrl(service.name);
    const waUrl = waData.url;

    return `
      <article class="service-card" data-service-id="${safeId}">
        <div class="service-card-meta">
          <span style="color: ${service.categoryColor || '#04abed'};">${safeCat}</span>
          <span class="service-card-meta-dot" aria-hidden="true"></span>
          <span>Online Assistance</span>
        </div>
        <h3 class="service-card-title">${safeName}</h3>
        <p class="service-card-desc">${safeDesc}</p>
        ${advisoryHtml}
        <div class="service-card-footer">
          <span class="service-badge-no-price">Quotes upon request</span>
          <a 
            href="${waUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-whatsapp btn-sm service-request-btn"
            data-service-name="${safeName}"
            data-enquire-service-id="${safeId}"
            aria-label="Request ${safeName} via WhatsApp">
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            Request on WhatsApp
          </a>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * Render Categories Bento Grid on Homepage
 */
function renderHomeCategories() {
  const container = document.getElementById('home-categories-grid');
  if (!container) return;

  container.innerHTML = serviceCategories
    .filter(cat => !cat.disabled)
    .map(cat => {
      const activeCount = (cat.services || []).filter(s => !s.disabled).length;
      return `
        <div class="category-card">
          <div class="category-card-header">
            <div class="category-icon-box" style="background-color: ${cat.color || '#04abed'};">
              ${getCategoryIconSvg(cat.icon)}
            </div>
            <span class="category-count">${activeCount} Services</span>
          </div>
          <h3 class="category-title">${escapeHtml(cat.name)}</h3>
          <p class="category-desc">${escapeHtml(cat.description)}</p>
          <div class="category-card-footer">
            <a href="services.html?category=${cat.id}" class="category-link">
              Explore Category &rarr;
            </a>
          </div>
        </div>
      `;
    }).join('');
}

/**
 * Render Featured Services on Homepage
 */
function renderHomeFeaturedServices() {
  const container = document.getElementById('home-featured-services');
  if (!container) return;

  // Event Delegation for homepage cards
  container.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-enquire-service-id]');
    if (btn) {
      e.preventDefault();
      const serviceId = btn.getAttribute('data-enquire-service-id');
      const service = findServiceById(serviceId);
      if (service && typeof window.handleServiceEnquiry === 'function') {
        window.handleServiceEnquiry(service.name);
      }
    }
  });

  const featured = getAllServices().filter(s => s.featured).slice(0, 6);

  container.innerHTML = featured.map(service => {
    const safeName = escapeHtml(service.name);
    const safeId = escapeHtml(service.id);
    return `
      <article class="service-card">
        <div class="service-card-meta">
          <span style="color: ${service.categoryColor || '#04abed'};">${escapeHtml(service.categoryName)}</span>
          <span class="service-card-meta-dot" aria-hidden="true"></span>
          <span>Popular Request</span>
        </div>
        <h3 class="service-card-title">${safeName}</h3>
        <p class="service-card-desc">${escapeHtml(service.description)}</p>
        <div class="service-card-footer">
          <span class="service-badge-no-price">Direct Support</span>
          <button 
            type="button" 
            class="btn btn-whatsapp btn-sm"
            data-enquire-service-id="${safeId}">
            <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            Enquire Now
          </button>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * Category SVG Icons
 */
function getCategoryIconSvg(iconName) {
  const icons = {
    'file-text': `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
    'graduation-cap': `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`,
    'award': `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
    'shield-check': `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>`,
    'credit-card': `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>`,
    'zap': `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    'monitor': `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
    'printer': `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>`,
    'clipboard-list': `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><line x1="8" y1="11" x2="16" y2="11"></line><line x1="8" y1="15" x2="16" y2="15"></line></svg>`,
    'user-check': `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>`,
    'briefcase': `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
    'book-open': `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
    'globe': `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
  };
  return icons[iconName] || icons['globe'];
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
