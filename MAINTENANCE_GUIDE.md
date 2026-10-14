# RLK Online Services – Website Maintenance & Catalogue Guide

> **Tagline:** Ask. Solve. Succeed.  
> **Architecture:** Pure HTML5, CSS3, and Vanilla JavaScript  
> **Single Source of Truth:** `js/services-data.js`  
> **Important Rule:** Ordinary service additions, edits, or removals require modifying **only** `js/services-data.js`. You do **not** need to edit HTML, CSS, or JavaScript rendering files (`js/services.js` or `js/script.js`).

---

## Quick Reference Summary

| Action | File to Edit | Need to touch HTML/CSS? |
| :--- | :--- | :--- |
| **Add a new service** | `js/services-data.js` | ❌ No |
| **Edit service title / description** | `js/services-data.js` | ❌ No |
| **Temporarily disable a service** | `js/services-data.js` (`disabled: true` or comment out) | ❌ No |
| **Remove a service permanently** | `js/services-data.js` | ❌ No |
| **Add a brand new category** | `js/services-data.js` | ❌ No |
| **Update phone / WhatsApp number** | `js/services-data.js` (`CONFIG` object at line 14) | ❌ No |
| **Check for duplicate IDs** | Open browser console (`F12`) & run `validateCatalogueData()` | ❌ No |

---

## 1. Finding the Correct Category

All 13 official service categories are defined in the `serviceCategories` array inside `js/services-data.js`. Each category has a unique `id`:

| # | Category Name | Category `id` in `services-data.js` | Line Range (Approx.) |
|---|---|---|---|
| 1 | **Land and Revenue Services** | `"land-revenue"` | Lines ~35–88 |
| 2 | **School and College Services** | `"school-college"` | Lines ~90–140 |
| 3 | **Certificate Services** | `"certificate-services"` | Lines ~142–195 |
| 4 | **Aadhaar and Identity Services** | `"aadhaar-identity"` | Lines ~197–255 |
| 5 | **PAN Card Services** | `"pan-card"` | Lines ~257–315 |
| 6 | **Bill Payment and Recharge** | `"bill-recharge"` | Lines ~317–370 |
| 7 | **Computer and Document Services** | `"computer-document"` | Lines ~372–445 |
| 8 | **Printing and Photo Services** | `"printing-photo"` | Lines ~447–510 |
| 9 | **Online Form and Application Services** | `"online-forms"` | Lines ~512–595 |
| 10 | **Resume and Document Services** | `"resume-document"` | Lines ~597–660 |
| 11 | **Basic Digital Business Services** | `"digital-business"` | Lines ~662–725 |
| 12 | **Online English Classes** | `"english-classes"` | Lines ~727–775 |
| 13 | **Other Digital Services** | `"other-digital"` | Lines ~777–825 |

### How to Find It in Your Code Editor:
1. Open `js/services-data.js` in VS Code or your preferred text editor.
2. Press `Ctrl + F` (or `Cmd + F` on Mac) to open the search bar.
3. Type the category `id` (e.g. `id: "land-revenue"` or `"certificate-services"`).
4. Jump directly to that category block.

---

## 2. Adding a New Service

To add a new service to an existing category, insert a new service object into that category's `services` array.

### Step-by-Step Instructions:
1. Locate the target category in `js/services-data.js`.
2. Scroll to the bottom of its `services: [...]` list (or place it where you want it ordered).
3. Ensure there is a comma `,` after the preceding service object.
4. Paste your new service object following the exact structure below:

```javascript
      {
        id: "land-encumbrance-certificate",
        name: "Encumbrance Certificate (EC) Search",
        description: "Assistance with online property encumbrance checks, transaction history search, and official status download.",
        featured: false
      }
```

### Fields Explained:
- **`id` (Required, String):** A lowercase, hyphen-separated unique identifier (e.g., `"land-encumbrance-certificate"`). Must not match any other service ID across the entire site.
- **`name` (Required, String):** The clear, official title of the service.
- **`description` (Required, String):** 1–2 sentences explaining what assistance RLK Online Services provides.
- **`featured` (Optional, Boolean):** Set to `true` if you want this service to appear in the "Spotlight Services" carousel on the homepage (`index.html`). Defaults to `false`.
- **`officialAdvisory` (Optional, String):** An advisory disclaimer for sensitive government or identity processes (e.g., compliance reminders).

> ⚠️ **No Pricing Fields:** Do not add prices, rupee symbols (`₹`), or estimates. The website intentionally keeps quotes request-based via WhatsApp.

---

## 3. Editing an Existing Service Name or Description

### Step-by-Step Instructions:
1. In `js/services-data.js`, search (`Ctrl + F`) for the service name or its `id`.
2. Edit the string inside `name` or `description`.

#### Example Before:
```javascript
      {
        id: "land-possession-cert",
        name: "LPC (Land Possession Certificate)",
        description: "Online application assistance for Land Possession Certificates required for agricultural loans, subsidies, and revenue verification."
      }
```

#### Example After:
```javascript
      {
        id: "land-possession-cert",
        name: "Land Possession Certificate (LPC) Online",
        description: "Comprehensive assistance with LPC portal submission, revenue officer follow-up guidance, and approved certificate retrieval."
      }
```

3. Save `js/services-data.js`. The directory, search results, and WhatsApp buttons will automatically use the updated wording upon browser reload.

---

## 4. Creating a New Category

If RLK Online Services expands into an entirely new business domain (e.g., GST & Taxation, Motor Vehicle Services), you can add a 14th category directly in `js/services-data.js`.

### Step-by-Step Instructions:
1. Scroll to the end of the `serviceCategories` array in `js/services-data.js` (just before the closing `];` at line ~825).
2. Add a comma `,` after the previous closing brace `}`, and append your new category object:

```javascript
  {
    id: "taxation-services",
    name: "GST and Business Tax Services",
    shortName: "GST & Tax",
    description: "Assistance with GST registration, monthly return preparation, challan generation, and portal support.",
    icon: "file-text",
    color: "#fb8d2e",
    services: [
      {
        id: "gst-registration-help",
        name: "GST New Registration Filing",
        description: "Document checklist review, OTP verification guidance, and online registration portal filing.",
        featured: false
      },
      {
        id: "gst-challan-payment",
        name: "GST Challan Creation & Payment",
        description: "Assistance with generating GST PMT-06 challans and completing bank portal payments.",
        featured: false
      }
    ]
  }
```

### Available Icons (`icon` field):
Choose from any of the built-in SVG icon names:
- `'file-text'` (Documents & forms)
- `'graduation-cap'` (Education & admissions)
- `'award'` (Certificates & achievements)
- `'shield-check'` (Security, Aadhaar, identity)
- `'credit-card'` (PAN & cards)
- `'zap'` (Bills & utilities)
- `'monitor'` (Computer & tech services)
- `'printer'` (Printing & xerox)
- `'clipboard-list'` (Online exams & recruitment)
- `'user-check'` (Resume & career documents)
- `'briefcase'` (Business & MSME)
- `'book-open'` (Classes & courses)
- `'globe'` (Internet & miscellaneous)

### Brand Colors (`color` field):
Use any of the official brand colors:
- Orange: `"#fb8d2e"`
- Vivid Azure: `"#04abed"`
- Green: `"#3aa540"`
- Yellow: `"#fcca0a"`

---

## 5. Temporarily Disabling a Service

If a government portal is undergoing maintenance, or you want to temporarily suspend a service without deleting its text, you have two simple options:

### Method A: Use the `disabled: true` flag (Recommended)
Add `disabled: true` to the service object:

```javascript
      {
        id: "land-mutation-apply",
        name: "Online Mutation (Dakhil Kharij) Application",
        description: "Step-by-step assistance with filing online mutation petitions...",
        disabled: true // <-- Temporarily hides service from website, search, and category counts
      }
```
When you want to reactivate the service, simply remove `disabled: true` or set it to `false`.

### Method B: Comment out the block
Wrap the service block in standard JavaScript comment markers `/* ... */`:

```javascript
      /*
      {
        id: "land-mutation-apply",
        name: "Online Mutation (Dakhil Kharij) Application",
        description: "Step-by-step assistance with filing online mutation petitions..."
      },
      */
```

---

## 6. Removing a Service Safely

To permanently remove a service:

1. Locate the service block in `js/services-data.js`.
2. Delete the entire curly-brace block `{ ... }`.
3. **Check the commas:** Ensure every remaining item in the `services: [...]` array is separated by a comma, and that there is **no trailing comma** after the very last item in the array if you are using older JS engines.
4. Save the file.
5. Reload `services.html` to verify that the category count and total service count decrement cleanly.

---

## 7. Checking for Duplicate IDs

Every category `id` and service `id` must be unique so that the filter tabs, URL query parameters, and WhatsApp dispatchers target the exact right item.

### Instant In-Browser Diagnostic Check:
The website includes a built-in diagnostic function `validateCatalogueData()`.

1. Open your website in Google Chrome, Microsoft Edge, or Mozilla Firefox.
2. Press **`F12`** (or right-click anywhere and select **Inspect**).
3. Click the **Console** tab at the top.
4. Type:
   ```javascript
   validateCatalogueData()
   ```
   and press **Enter**.
5. You will see an instant summary:
   ```json
   {
     "isValid": true,
     "totalCategories": 13,
     "totalServices": 128,
     "duplicateCategories": [],
     "duplicateServices": []
   }
   ```
   If any duplicate IDs exist, `isValid` will be `false` and the exact duplicated ID and its category names will be printed immediately so you can fix it.

---

## 8. Testing the Updated Website Locally

Before pushing changes to GitHub or your web host, test locally.

### Using Vite Dev Server (AI Studio / Node.js environment):
```bash
# In your terminal:
npm run dev
```
Open `http://localhost:3000` in your browser.

### Using Python Simple Server (No Node.js required):
```bash
# In the project directory:
python3 -m http.server 8000
```
Open `http://localhost:8000`.

### Using VS Code Live Server:
1. Open the project folder in VS Code.
2. Right-click `index.html` and click **"Open with Live Server"**.

---

## 9. Verifying that the Service Appears in Search & Filters

Once your website is running locally:

1. Navigate to `services.html`.
2. **Check the Category Filter Tab:**
   - Look at the tab for the category you edited.
   - Verify that the count in parentheses (e.g. `(11)`) reflects your addition/subtraction.
   - Click the category tab. Confirm your service card renders with its title, description, and "Direct Support" badge.
3. **Check Keyword Search:**
   - Click "All Services".
   - Type a distinctive word from your new service's name or description into the search bar.
   - Confirm that the catalog instantly filters down and highlights your service.
   - Clear the search bar and verify all services return.

---

## 10. Verifying the WhatsApp Request Button

1. On your service card, click the **"Request on WhatsApp"** button.
2. Check the browser behavior:
   - WhatsApp opens directly (`https://wa.me/917870886355?text=...`) with the prefilled message:
     ```
     Hello RLK Online Services,

     I would like to enquire about your service: "<Your Service Name>".

     Please let me know how to request this service, the required documents, and the next steps.

     Thank you!
     ```
3. Verify that `<Your Service Name>` in the prefilled message matches your service name exactly.
4. Verify that no prices are mentioned anywhere in the prefilled message or cards.

---

## 11. Saving Changes to Git and GitHub

Once you have verified the changes locally:

```bash
# 1. Check which files were modified:
git status

# 2. Stage your updated data file:
git add js/services-data.js

# 3. Commit your change with a descriptive message:
git commit -m "Update service catalogue: add Encumbrance Certificate service"

# 4. Push to your GitHub repository:
git push origin main
```

---

## 12. Publishing the Updated Website

> ℹ️ **Important Note on Hosting:** A live website does **not** update automatically when you edit files on your personal computer unless you have connected your GitHub repository to an automated hosting service (CI/CD).

Choose the deployment method that matches your setup:

### Option A: GitHub Pages (Automatic on `git push`)
If your repository is hosted on GitHub Pages:
1. Push your commit (`git push origin main`).
2. GitHub automatically triggers a build and publishes the changes to your live URL within 1–2 minutes.

### Option B: Netlify / Vercel (Automatic Git Integration)
1. Push your commit (`git push origin main`).
2. Netlify/Vercel detects the change, runs `npm run build`, and deploys the new `dist/` bundle immediately.

### Option C: cPanel / Traditional Web Host / Shared Hosting (Manual FTP/Upload)
If you host on a traditional cPanel or Apache/Nginx web server:
1. Run `npm run build` locally, OR directly upload the modified `js/services-data.js` file via cPanel File Manager / FTP into the `public_html/js/` directory.
2. Clear your browser cache (`Ctrl + F5` or `Cmd + Shift + R`) to view the updated catalogue immediately.

---

## Quick Troubleshooting Guide

| Issue | Cause | Fix |
|---|---|---|
| **Whole catalogue disappears (blank page)** | Syntax error in `js/services-data.js` (missing comma or unclosed quote) | Press `F12`, view the red error in **Console**. It will show the exact line number with the typo. Add the missing comma or quote. |
| **Search doesn't find the new service** | Service was added with `disabled: true` or inside an unclosed comment | Check `js/services-data.js` to ensure `disabled` is not set to `true`. |
| **Duplicate card appears in search** | Re-used an existing `id` | Run `validateCatalogueData()` in the console (`F12`) to identify and rename the duplicate ID. |
| **New service not showing on live site** | Browser cached the old JS file | Hard-refresh the webpage with `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac). |
