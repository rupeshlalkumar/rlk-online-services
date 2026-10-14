# RLK Online Services – Official Website

**Tagline:** Ask. Solve. Succeed.  
**Description:** Online Cafe · Digital Services · Computer Solutions  

This is the complete, responsive, multi-page website built for **RLK Online Services** using standard, future-proof **HTML5, CSS3, and Vanilla JavaScript**.

---

## 1. Project Directory Architecture

```
rlk-online-services/
├── index.html                   # Homepage with hero, search, workflow, and highlights
├── services.html                # Complete dynamic directory (13 categories, 117+ services)
├── about.html                   # Story, mission, and core values
├── contact.html                 # Business details, operating hours, and WhatsApp enquiry form
├── privacy.html                 # Privacy policy, document retention, and UIDAI compliance
├── terms.html                   # Terms of service, customer responsibilities, and guidelines
├── css/
│   └── style.css                # Global stylesheet with brand CSS custom properties
├── js/
│   ├── services-data.js         # Single source of truth for all services & site configuration
│   ├── script.js                # Global navigation, mobile drawer, modals, and config binding
│   └── services.js              # Directory rendering, search, and category filter engine
├── assets/
│   └── images/
│       ├── rlk-logo-primary.svg # Primary circular brand emblem (Orange, Green, Azure, Yellow)
│       └── rlk-logo-secondary.svg # Horizontal brand lockup
├── favicon.svg                  # Circular browser favicon
├── robots.txt                   # Search crawler directives
├── sitemap.xml                  # XML sitemap for Google Search Console
└── README.md                    # Setup, maintenance, and future expansion guide
```

---

## 2. Brand Identity & Design System

The website strictly applies the official RLK Online Services brand palette:

- **Orange (`#fb8d2e`)**: Primary brand accents, key call-to-actions, and highlight badges.
- **Vivid Azure (`#04abed`)**: Interactive links, digital service accents, and secondary actions.
- **Green (`#3aa540`)**: Verified checkmarks, positive indicators, and category highlights.
- **Yellow (`#fcca0a`)**: Subdued warm highlights and attention elements.
- **Neutral Canvas (`#f8fafc` & `#ffffff`)**: Crisp, readable surfaces with accessible contrast.
- **Dark Neutral (`#0f172a`)**: High-contrast, legible headings and body prose.

Typography uses Google's modern geometric face **Plus Jakarta Sans** with tabular numerals (**JetBrains Mono**) for phone numbers and counters.

---

## 3. How to Configure Your Contact Details

All contact and business details are controlled centrally in **`js/services-data.js`**. You do not need to hunt through HTML pages to update your phone number or business hours.

### Updating WhatsApp & Phone Number:
Open `js/services-data.js` and edit the `CONFIG` object at the top:

```javascript
const CONTACT_CONFIG = {
  businessName: "RLK Online Services",
  tagline: "Ask. Solve. Succeed.",
  phone: "+917870886355",
  phoneDisplay: "+91 7870886355",
  whatsapp: "917870886355",
  whatsappDisplay: "+91 7870886355",
  email: "rlkonlineservices@outlook.com",
  defaultEmailSubject: "Service Enquiry - RLK Online Services"
};
```

When visitors interact with contact buttons across the website:
- **Phone buttons:** Trigger `tel:+917870886355` for instant voice calls.
- **WhatsApp buttons:** Open `https://wa.me/917870886355` with prefilled, URL-encoded service request enquiries.
- **Email buttons:** Open `mailto:rlkonlineservices@outlook.com?subject=...` in their default email application.

---

## 4. How to Add New Services (Zero-HTML Workflow)

All services are rendered dynamically from `js/services-data.js`. **You never need to edit HTML or CSS to add or remove a service.**

### Step-by-Step: Adding a New Service to an Existing Category
1. Open `js/services-data.js`.
2. Locate the appropriate category in the `serviceCategories` array (e.g., `id: "land-revenue"`).
3. In its `services` list, add a new service item:

```javascript
{
  id: "new-service-unique-id",
  name: "New Service Name Here",
  description: "Brief, professional 1-2 sentence description of what the service provides.",
  featured: false // Set to true if you want it spotlighted on the homepage
}
```

4. Save `js/services-data.js`.
5. Reload your browser. The new service will automatically appear in:
   - The Services directory (`services.html`)
   - Category filter tabs (tab counts update automatically)
   - Real-time search by keyword
   - The WhatsApp enquiry generator

### Adding a Brand New Category
To add a 14th category:
1. In `js/services-data.js`, append a new category object to `serviceCategories`:

```javascript
{
  id: "gst-taxation",
  name: "GST and Business Tax Services",
  shortName: "GST & Tax",
  description: "Assistance with basic GST registrations, return filing, and challan payments.",
  icon: "file-text", // Icon name: 'file-text', 'briefcase', 'monitor', etc.
  color: "#fb8d2e",
  services: [
    {
      id: "gst-registration-help",
      name: "GST Registration Assistance",
      description: "Document collection, portal account setup, and submission assistance."
    }
  ]
}
```
2. Save the file. The new category card, filter tab, and cards will render immediately!

---

## 5. Logo Asset Setup

The website currently uses high-resolution vector SVGs created to match your brand logo:
- `assets/images/rlk-logo-primary.svg`
- `assets/images/rlk-logo-secondary.svg`
- `favicon.svg`

If you wish to use your original raster image files (`03 Main Logo.png` or other PNG files):
1. Place your PNG file in the `assets/images/` folder.
2. Name it `rlk-logo-primary.png`.
3. In `index.html`, `services.html`, `about.html`, and `contact.html`, change:
   `<img src="/assets/images/rlk-logo-primary.svg" ... />` to `<img src="/assets/images/rlk-logo-primary.png" ... />`.

---

## 6. Public Pricing Policy

As strictly instructed, **no prices, rupee symbols, price ranges, or starting amounts are published anywhere on the website**.

- Every service card displays the tag *"Quotes upon request"* or *"Direct Support"*.
- When clients enquire via WhatsApp, you can review the specific task, assess any applicable government portal fees, and quote your customized service fee directly.

---

## 7. Local Testing & Web Deployment

### Running Locally with Vite:
```bash
npm install
npm run dev
```
The site runs on `http://localhost:3000`.

### Building for Production:
```bash
npm run build
```
This generates the optimized production build in the `dist/` directory.

### Running on Any Traditional Web Host (Apache, Nginx, cPanel, Netlify, Vercel, GitHub Pages):
Because this website uses pure HTML, CSS, and Vanilla JavaScript with relative paths, you can upload the folder directly to any web server without needing Node.js or any backend runtime.

---

## 8. Business Contact Details (Confirmed)
The official contact channels are configured:
- **Phone:** `+91 7870886355` (`tel:+917870886355`)
- **WhatsApp:** `917870886355` (`https://wa.me/917870886355`)
- **Email:** `rlkonlineservices@outlook.com` (`mailto:rlkonlineservices@outlook.com`)
- **Tagline:** Ask. Solve. Succeed.
