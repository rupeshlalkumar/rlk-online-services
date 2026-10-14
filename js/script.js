/**
 * RLK Online Services - Global JavaScript
 * 
 * Centralized Contact Configuration & Shared Website Behavior
 * Brand: RLK Online Services
 * Tagline: Ask. Solve. Succeed.
 */

// ==========================================================================
// 1. Centralized Contact Configuration
// ==========================================================================
const CONTACT_CONFIG = {
  businessName: "RLK Online Services",
  tagline: "Ask. Solve. Succeed.",
  phone: "+917870886355",
  phoneDisplay: "+91 7870886355",
  phoneTel: "tel:+917870886355",
  whatsapp: "917870886355",
  whatsappDisplay: "+91 7870886355",
  whatsappUrl: "https://wa.me/917870886355",
  email: "rlkonlineservices@outlook.com",
  defaultEmailSubject: "Service Enquiry - RLK Online Services"
};

// Expose globally so every page and script can access it
window.CONTACT_CONFIG = CONTACT_CONFIG;

// Backward-compatible alias for existing CONFIG references
if (typeof window.CONFIG === 'undefined') {
  window.CONFIG = {
    businessName: CONTACT_CONFIG.businessName,
    brandTagline: CONTACT_CONFIG.tagline,
    whatsappNumber: CONTACT_CONFIG.phone,
    phoneDisplay: CONTACT_CONFIG.phoneDisplay,
    emailDisplay: CONTACT_CONFIG.email
  };
}

/**
 * Builds prefilled WhatsApp message and official click-to-chat URL
 * Contains:
 * - RLK Online Services
 * - The selected service name
 * - A short enquiry asking how to request that service
 * Encoded with JavaScript encodeURIComponent
 */
function buildWhatsAppServiceUrl(serviceName = "General Digital Assistance", customNote = "") {
  let rawMessage = `Hello RLK Online Services,\n\nI would like to enquire about your service: "${serviceName}".\n\nPlease let me know how to request this service, the required documents, and the next steps.\n`;
  if (customNote && customNote.trim().length > 0) {
    rawMessage += `\nAdditional details:\n${customNote.trim()}\n`;
  }
  rawMessage += `\nThank you!`;

  const encodedMessage = encodeURIComponent(rawMessage);
  const url = `https://wa.me/${CONTACT_CONFIG.whatsapp}?text=${encodedMessage}`;

  return {
    rawMessage,
    url,
    whatsappNumber: CONTACT_CONFIG.whatsapp,
    whatsappDisplay: CONTACT_CONFIG.whatsappDisplay
  };
}

// Global expose for services.js and inline callers
window.buildWhatsAppServiceUrl = buildWhatsAppServiceUrl;

/**
 * Builds mailto link with prefilled subject
 */
function buildMailtoUrl(subject = CONTACT_CONFIG.defaultEmailSubject) {
  return `mailto:${CONTACT_CONFIG.email}?subject=${encodeURIComponent(subject)}`;
}
window.buildMailtoUrl = buildMailtoUrl;

// ==========================================================================
// Lifecycle Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initHeaderBehavior();
  initMobileNav();
  populateContactData();
  initEnquiryModal();
  updateCurrentYear();
});

/**
 * Header sticky shadow behavior
 */
function initHeaderBehavior() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileNav() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const drawer = document.querySelector('.mobile-nav-drawer');
  if (!menuBtn || !drawer) return;

  menuBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      drawer.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  // Close when clicking a nav link inside drawer
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/**
 * Populate elements referencing central contact information
 */
function populateContactData() {
  // 1. Phone number text & tel links
  document.querySelectorAll('[data-contact="phone"]').forEach(elem => {
    elem.textContent = CONTACT_CONFIG.phoneDisplay;
  });
  document.querySelectorAll('a[data-contact-link="phone"]').forEach(link => {
    link.href = CONTACT_CONFIG.phoneTel;
  });

  // 2. WhatsApp text & click-to-chat links
  document.querySelectorAll('[data-contact="whatsapp"]').forEach(elem => {
    elem.textContent = CONTACT_CONFIG.whatsappDisplay;
  });
  document.querySelectorAll('a[data-contact-link="whatsapp"]').forEach(link => {
    if (!link.getAttribute('href') || link.getAttribute('href') === '#') {
      const defaultText = encodeURIComponent(`Hello RLK Online Services, I would like to enquire about your digital services.`);
      link.href = `https://wa.me/${CONTACT_CONFIG.whatsapp}?text=${defaultText}`;
    }
  });

  // 3. Email address text & mailto links
  document.querySelectorAll('[data-contact="email"]').forEach(elem => {
    elem.textContent = CONTACT_CONFIG.email;
  });
  document.querySelectorAll('a[data-contact-link="email"]').forEach(link => {
    link.href = buildMailtoUrl();
  });

  // 4. Legacy data-config mappings
  document.querySelectorAll('[data-config]').forEach(elem => {
    const key = elem.getAttribute('data-config');
    if (key === 'phoneDisplay') {
      elem.textContent = CONTACT_CONFIG.phoneDisplay;
    } else if (key === 'emailDisplay') {
      elem.textContent = CONTACT_CONFIG.email;
    } else if (typeof CONFIG !== 'undefined' && CONFIG[key]) {
      elem.textContent = CONFIG[key];
    }
  });

  // 5. WhatsApp trigger buttons
  document.querySelectorAll('[data-whatsapp-btn]').forEach(elem => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceName = elem.getAttribute('data-service-name') || "General Assistance";
      handleServiceEnquiry(serviceName);
    });
  });
}

/**
 * Enquiry Modal & WhatsApp Review Handler
 */
let enquiryModal = null;

function initEnquiryModal() {
  enquiryModal = document.getElementById('enquiry-modal');
  if (!enquiryModal) return;

  const closeBtns = enquiryModal.querySelectorAll('.modal-close-trigger');
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => closeEnquiryModal());
  });

  enquiryModal.addEventListener('click', (e) => {
    if (e.target === enquiryModal) {
      closeEnquiryModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && enquiryModal.classList.contains('open')) {
      closeEnquiryModal();
    }
  });
}

function openEnquiryModal(serviceName, customNote = "") {
  if (!enquiryModal) return;

  const { rawMessage, url } = buildWhatsAppServiceUrl(serviceName, customNote);

  const titleEl = enquiryModal.querySelector('#modal-service-title');
  const previewEl = enquiryModal.querySelector('#modal-message-body');
  const launchBtn = enquiryModal.querySelector('#modal-launch-whatsapp');
  const copyBtn = enquiryModal.querySelector('#modal-copy-btn');

  if (titleEl) titleEl.textContent = `Enquire: ${serviceName}`;
  if (previewEl) previewEl.textContent = rawMessage;

  if (launchBtn) {
    launchBtn.href = url;
    launchBtn.target = "_blank";
    launchBtn.rel = "noopener noreferrer";
  }

  if (copyBtn) {
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(rawMessage).then(() => {
        copyBtn.textContent = "Copied to Clipboard!";
        setTimeout(() => {
          copyBtn.textContent = "Copy Message";
        }, 2000);
      }).catch(() => {
        copyBtn.textContent = "Select & Copy Below";
        setTimeout(() => {
          copyBtn.textContent = "Copy Message";
        }, 3000);
      });
    };
  }

  enquiryModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeEnquiryModal() {
  if (!enquiryModal) return;
  enquiryModal.classList.remove('open');
  document.body.style.overflow = '';
}

/**
 * Global trigger for service enquiries
 */
window.handleServiceEnquiry = function(serviceName, note = "") {
  openEnquiryModal(serviceName, note);
};

/**
 * Current Year for Footer
 */
function updateCurrentYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
