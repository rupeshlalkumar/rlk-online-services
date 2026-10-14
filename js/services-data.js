/**
 * RLK Online Services - Central Service Catalogue & Site Configuration
 * 
 * IMPORTANT FOR OWNER / DEVELOPER:
 * This file is the SINGLE SOURCE OF TRUTH for the entire website.
 * - To add a new service: Find the category and add an object to its `services` array.
 * - To add a new category: Add a new category object to `serviceCategories`.
 * - To update contact details: Modify the `CONFIG` object below.
 * - NO PRICES are allowed in this catalogue. Quotes are provided individually upon enquiry.
 */

const CONFIG = {
  businessName: "RLK Online Services",
  brandTagline: "Ask. Solve. Succeed.",
  businessDescription: "Online Cafe · Digital Services · Computer Solutions",
  
  // Confirmed Business Contact Information:
  phone: "+917870886355",
  phoneDisplay: "+91 7870886355",
  phoneTel: "tel:+917870886355",
  whatsapp: "917870886355",
  whatsappNumber: "917870886355",
  whatsappDisplay: "+91 7870886355",
  whatsappUrl: "https://wa.me/917870886355",
  email: "rlkonlineservices@outlook.com",
  emailDisplay: "rlkonlineservices@outlook.com",
  emailMailto: "mailto:rlkonlineservices@outlook.com?subject=Service%20Enquiry%20-%20RLK%20Online%20Services"
};

/**
 * Complete Service Directory: 13 Categories
 * All entries strictly match the official business catalogue.
 */
const serviceCategories = [
  {
    id: "land-revenue",
    name: "Land and Revenue Services",
    shortName: "Land & Revenue",
    description: "Assistance with online land records, land receipts, and revenue-related government portal processes.",
    icon: "file-text",
    color: "#fb8d2e",
    featured: true,
    services: [
      {
        id: "land-receipt-download",
        name: "Land Receipt Download",
        description: "Assistance with locating, generating, and downloading official online land tax (lagaan) receipts.",
        featured: true
      },
      {
        id: "land-receipt-printing",
        name: "Land Receipt Printing",
        description: "High-clarity color or black-and-white printouts of verified land revenue receipts and payment challans."
      },
      {
        id: "online-land-information",
        name: "Online Land Information",
        description: "Guidance on searching and checking parcel information across state revenue portals (Bhulekh / Land Records)."
      },
      {
        id: "basic-land-khata-khesra-search",
        name: "Basic Land, Khata and Khesra Search",
        description: "Assistance in navigating revenue records using Khata number, Khesra (Plot) number, and Jamabandi details."
      },
      {
        id: "land-record-information-verification",
        name: "Land Record Information and Verification",
        description: "Help with cross-verifying ownership records, Jamabandi registers, and computerized record status."
      },
      {
        id: "online-revenue-application-assistance",
        name: "Online Revenue Application Assistance",
        description: "Step-by-step guidance for submitting online applications on state revenue and land reforms portals."
      },
      {
        id: "land-document-application-assistance",
        name: "Land Document and Application Assistance",
        description: "Support with organizing, scanning, and uploading required supporting land documents for online processing."
      },
      {
        id: "complex-land-revenue-online-assistance",
        name: "Complex Land and Revenue Online Assistance",
        description: "Comprehensive end-to-end guidance for multi-parcel queries, record corrections, or detailed revenue submissions."
      }
    ]
  },
  {
    id: "school-college",
    name: "School and College Services",
    shortName: "School & College",
    description: "End-to-end online support for student admissions, examination form submissions, registrations, and scholarships.",
    icon: "graduation-cap",
    color: "#04abed",
    featured: true,
    services: [
      {
        id: "school-college-form-download",
        name: "School and College Form Download",
        description: "Downloading official prospectus, admission notices, registration templates, and examination forms."
      },
      {
        id: "school-college-form-printing",
        name: "School and College Form Printing",
        description: "Clean printing on quality bond paper for hard-copy submission and institutional verification."
      },
      {
        id: "online-admission-form-filling",
        name: "Online Admission Form Filling",
        description: "Accurate online data entry for school, intermediate, degree, diploma, and university admissions.",
        featured: true
      },
      {
        id: "examination-form-filling",
        name: "Examination Form Filling",
        description: "Assistance with semester, annual, board, and university examination form submissions and fee challans."
      },
      {
        id: "scholarship-form-assistance",
        name: "Scholarship Form Assistance",
        description: "Assistance with state and National Scholarship Portals (NSP, Post-Matric, Pre-Matric, Merit-cum-Means)."
      },
      {
        id: "school-college-registration",
        name: "School and College Registration",
        description: "Student portal profile creation, registration number generation, and academic credentials setup."
      },
      {
        id: "document-upload-education",
        name: "Document Upload",
        description: "Precision resizing and formatting of marks cards, certificates, and ID proofs to institutional specs."
      },
      {
        id: "admission-form-document-upload-assistance",
        name: "Admission Form and Document Upload Assistance",
        description: "Combined assistance covering both form information entry and digital document verification uploads."
      },
      {
        id: "complete-admission-assistance",
        name: "Complete Admission Assistance",
        description: "Full-cycle support from college selection criteria through application submission, slip generation, and follow-ups."
      },
      {
        id: "complete-scholarship-assistance",
        name: "Complete Scholarship Assistance",
        description: "Complete scholarship application filing, document reconciliation, bonafide verification guidance, and renewal support."
      }
    ]
  },
  {
    id: "certificates",
    name: "Certificate Services",
    shortName: "Certificates",
    description: "Assistance with official state public service applications (RTPS) including Caste, Residential, and Income certificates.",
    icon: "award",
    color: "#3aa540",
    featured: true,
    services: [
      {
        id: "caste-certificate-status-check",
        name: "Caste Certificate Status Check",
        description: "Tracking application reference numbers and processing stages on the official RTPS / e-District portals."
      },
      {
        id: "residential-certificate-status-check",
        name: "Residential Certificate Status Check",
        description: "Checking approval status and issuing authority updates for domicile/residence certificate applications."
      },
      {
        id: "income-certificate-status-check",
        name: "Income Certificate Status Check",
        description: "Real-time verification of income certificate approvals and tracking verification reports."
      },
      {
        id: "certificate-download",
        name: "Certificate Download",
        description: "Downloading digitally signed, tamper-evident government certificates with QR verification codes."
      },
      {
        id: "certificate-printing",
        name: "Certificate Printing",
        description: "High-resolution color printing on premium photo/bond paper with optional lamination for preservation."
      },
      {
        id: "certificate-application-assistance",
        name: "Certificate Application Assistance",
        description: "General guidance on eligibility rules, required supporting documents, and designated portal procedures."
      },
      {
        id: "caste-certificate-application-assistance",
        name: "Caste Certificate Application Assistance",
        description: "Filing assistance for central or state caste certificates (SC, ST, OBC, EBC, EWS) with correct category selection."
      },
      {
        id: "residential-certificate-application-assistance",
        name: "Residential Certificate Application Assistance",
        description: "Filing assistance for local residence / domicile certificates with address proof validation."
      },
      {
        id: "income-certificate-application-assistance",
        name: "Income Certificate Application Assistance",
        description: "Step-by-step assistance in declaring agricultural, business, or employment income per official norms."
      },
      {
        id: "application-document-upload-certificates",
        name: "Application and Document Upload",
        description: "Proper document conversion (PDF/JPEG) and compression to meet strict portal file-size ceilings."
      },
      {
        id: "multiple-certificate-assistance",
        name: "Multiple Certificate Assistance",
        description: "Coordinated application filing when Caste, Residence, and Income certificates are all required together."
      }
    ]
  },
  {
    id: "aadhaar-identity",
    name: "Aadhaar and Identity Services",
    shortName: "Aadhaar & Identity",
    description: "Guidance and online portal assistance for UIDAI identity services, official appointment booking, and status checks.",
    icon: "shield-check",
    color: "#fb8d2e",
    featured: true,
    officialAdvisory: "Notice: We do NOT perform biometric modifications or unauthorized updates. In accordance with UIDAI regulations, all biometric updates and primary demographic changes requiring physical presence must be completed at an authorized Aadhaar Seva Kendra. We provide guidance, appointment booking, and online portal assistance only.",
    services: [
      {
        id: "aadhaar-related-information-search-assistance",
        name: "Aadhaar-Related Information and Search Assistance",
        description: "Assisting customers with finding official UIDAI circulars, acceptable document lists, and service guidelines."
      },
      {
        id: "aadhaar-card-download-assistance",
        name: "Aadhaar Card Download Assistance",
        description: "Assistance with downloading e-Aadhaar through official OTP verification on the UIDAI portal."
      },
      {
        id: "aadhaar-pdf-download",
        name: "Aadhaar PDF Download",
        description: "Assistance with generating password-protected official e-Aadhaar PDF files and safe document retrieval."
      },
      {
        id: "aadhaar-pvc-order-assistance",
        name: "Aadhaar PVC Order Assistance",
        description: "Guidance on ordering the official durable UIDAI PVC card delivered directly by India Post."
      },
      {
        id: "npci-dbt-status-check",
        name: "NPCI and DBT Status Check",
        description: "Checking Aadhaar-bank account seeding status for direct benefit transfers (DBT, PM-Kisan, scholarships).",
        featured: true
      },
      {
        id: "aadhaar-seeding-mapping-information",
        name: "Aadhaar Seeding and Mapping Information",
        description: "Information on mapping Aadhaar to bank accounts, NPCI mapper protocols, and required bank mandate procedures."
      },
      {
        id: "aadhaar-related-online-assistance",
        name: "Aadhaar-Related Online Assistance",
        description: "Assisting users with the myAadhaar portal interface, document update guidelines, and self-service requests."
      },
      {
        id: "aadhaar-appointment-assistance",
        name: "Aadhaar Appointment Assistance",
        description: "Booking slots at authorized Aadhaar Seva Kendras (ASK) for fresh enrollment, biometrics, or mobile updates."
      },
      {
        id: "aadhaar-update-process-guidance",
        name: "Aadhaar Update Process Guidance",
        description: "Clarifying valid proof of address (PoA) and proof of identity (PoI) requirements before visiting a centre."
      },
      {
        id: "complete-aadhaar-related-assistance",
        name: "Complete Aadhaar-Related Assistance",
        description: "End-to-end procedural support, form preparation, and centre appointment scheduling."
      }
    ]
  },
  {
    id: "pan-card",
    name: "PAN Card Services",
    shortName: "PAN Card",
    description: "Assistance with new PAN applications (Form 49A), minor-to-major updates, corrections, and e-PAN downloads.",
    icon: "credit-card",
    color: "#04abed",
    featured: true,
    services: [
      {
        id: "pan-application-information",
        name: "PAN Application Information",
        description: "Guidance on acceptable proofs, eligibility, and the difference between physical PAN and instant e-PAN."
      },
      {
        id: "pan-application-assistance",
        name: "PAN Application Assistance",
        description: "Assisting customers with filling out Form 49A details on authorized NSDL (Protean) or UTIITSL portals."
      },
      {
        id: "new-pan-application-assistance",
        name: "New PAN Application Assistance",
        description: "Assistance with fresh PAN card requests for individual citizens, students, and family members.",
        featured: true
      },
      {
        id: "pan-correction-assistance",
        name: "PAN Correction Assistance",
        description: "Assistance with correcting errors in name spelling, father's name, date of birth, photo, or signature."
      },
      {
        id: "pan-download-epan-assistance",
        name: "PAN Download and e-PAN Assistance",
        description: "Assistance with downloading official digital e-PAN PDFs using acknowledgement or PAN numbers."
      },
      {
        id: "pan-status-check",
        name: "PAN Status Check",
        description: "Tracking application status using the 15-digit acknowledgement number or coupon number."
      },
      {
        id: "pan-document-upload-assistance",
        name: "PAN and Document Upload Assistance",
        description: "Cropping, resizing, and uploading photograph, signature, and identity proofs per exact DPI specifications."
      },
      {
        id: "complete-pan-application-assistance",
        name: "Complete PAN Application Assistance",
        description: "Comprehensive end-to-end service from initial form completion through receipt generation and dispatch tracking."
      }
    ]
  },
  {
    id: "utility-recharge",
    name: "Bill Payment and Recharge",
    shortName: "Recharge & Bills",
    description: "Assistance with digital utility payments, electricity bills, municipal water bills, mobile and DTH recharges.",
    icon: "zap",
    color: "#fcca0a",
    services: [
      {
        id: "mobile-recharge-assistance",
        name: "Mobile Recharge Assistance",
        description: "Assistance with prepaid mobile plan selection, data add-ons, and payment processing (Airtel, Jio, Vi, BSNL)."
      },
      {
        id: "dth-recharge-assistance",
        name: "DTH Recharge Assistance",
        description: "Assisting with monthly DTH subscriptions, package updates, and top-ups (Tata Play, Airtel DTH, Dish TV, etc.)."
      },
      {
        id: "electricity-bill-payment-assistance",
        name: "Electricity Bill Payment Assistance",
        description: "Help with looking up consumer numbers (CA / Consumer ID), verifying dues, and processing electricity payments.",
        featured: true
      },
      {
        id: "water-bill-payment-assistance",
        name: "Water Bill Payment Assistance",
        description: "Assistance with checking municipal water supply bills and executing online payments."
      },
      {
        id: "other-digital-bill-payment-assistance",
        name: "Other Digital Bill Payment Assistance",
        description: "Payment assistance for broadband internet, piped gas, municipal taxes, and fastag recharges."
      },
      {
        id: "multiple-bill-payment-assistance",
        name: "Multiple Bill Payment Assistance",
        description: "Consolidated bill payment assistance for households or small businesses managing several monthly utilities."
      }
    ]
  },
  {
    id: "computer-documents",
    name: "Computer and Document Services",
    shortName: "Computer & Documents",
    description: "Bilingual typing, Microsoft Word formatting, spreadsheet entry, and complete PDF manipulation services.",
    icon: "monitor",
    color: "#3aa540",
    featured: true,
    services: [
      {
        id: "hindi-typing",
        name: "Hindi Typing",
        description: "Accurate typing in Hindi using standard Kruti Dev, Mangal Unicode, or Remington layouts."
      },
      {
        id: "english-typing",
        name: "English Typing",
        description: "Fast, accurate English document transcription from handwritten notes, audio, or printed drafts."
      },
      {
        id: "basic-ms-word-work",
        name: "Basic MS Word Work",
        description: "Document creation, letters, notices, declarations, affidavits, and standard office templates."
      },
      {
        id: "ms-word-formatting",
        name: "MS Word Formatting",
        description: "Styling margins, typography, page numbers, tables of contents, headers, and professional layout standards."
      },
      {
        id: "basic-excel-work",
        name: "Basic Excel Work",
        description: "Spreadsheet setup, formula calculations, inventory lists, and neat tabulations."
      },
      {
        id: "excel-data-entry",
        name: "Excel Data Entry",
        description: "High-accuracy data transfer from physical registers, surveys, or invoices into structured Excel files."
      },
      {
        id: "pdf-creation",
        name: "PDF Creation",
        description: "Compiling multiple documents, text, and images into clean, standardized PDF files."
      },
      {
        id: "pdf-merge",
        name: "PDF Merge",
        description: "Combining separate PDF pages, receipts, and supporting papers into a single organized document."
      },
      {
        id: "pdf-split",
        name: "PDF Split",
        description: "Extracting designated pages, chapters, or sheets from large PDF documents without data loss."
      },
      {
        id: "pdf-compression",
        name: "PDF Compression",
        description: "Reducing PDF file size to conform to portal limits (e.g. under 200KB or 500KB) while maintaining readability."
      },
      {
        id: "pdf-to-word-conversion",
        name: "PDF to Word Conversion",
        description: "Converting static PDFs into editable Word (.docx) documents with layout retention."
      },
      {
        id: "word-to-pdf-conversion",
        name: "Word to PDF Conversion",
        description: "Locking formatting, fonts, and print layouts into secure, universal PDF formats."
      },
      {
        id: "document-scanning",
        name: "Document Scanning",
        description: "High-DPI flatbed scanning for physical certificates, land deeds, identity documents, and old records."
      },
      {
        id: "document-upload",
        name: "Document Upload",
        description: "Assisting customers with uploading digital files securely to employer, government, or bank portals."
      },
      {
        id: "document-download",
        name: "Document Download",
        description: "Accessing and securely retrieving customer document files, notifications, and results from the web."
      },
      {
        id: "multiple-document-preparation",
        name: "Multiple Document Preparation",
        description: "Comprehensive preparation of full document bundles for legal submissions, admissions, or recruitment."
      }
    ]
  },
  {
    id: "printing-photo",
    name: "Printing and Photo Services",
    shortName: "Printing & Photos",
    description: "High-quality document printing, color outputs, passport photo preparation, resizing, and lamination.",
    icon: "printer",
    color: "#fb8d2e",
    featured: true,
    services: [
      {
        id: "black-and-white-printing",
        name: "Black-and-White Printing",
        description: "High-speed laser printing for study materials, notes, forms, and official documentation."
      },
      {
        id: "colour-printing",
        name: "Colour Printing",
        description: "Vibrant, high-resolution color prints for certificates, projects, reports, and identity cards."
      },
      {
        id: "photo-printing",
        name: "Photo Printing",
        description: "Glossy photo-paper printing with fade-resistant inks for portraits, events, and memories."
      },
      {
        id: "passport-size-photo-preparation",
        name: "Passport-Size Photo Preparation",
        description: "Standard 35mm x 45mm passport photos with white or light backgrounds meeting official guidelines.",
        featured: true
      },
      {
        id: "passport-photo-sheet-preparation",
        name: "Passport Photo Sheet Preparation",
        description: "Multiple passport photo sets printed on 4x6 or A4 sheets for examinations, visas, and job applications."
      },
      {
        id: "photo-resizing",
        name: "Photo Resizing",
        description: "Digital pixel and millimeter dimension adjustments to match exam portal requirements (e.g. SSC, UPSC, NTA)."
      },
      {
        id: "photo-cropping-editing",
        name: "Photo Cropping and Editing",
        description: "Background clearing, contrast enhancement, border adjustment, and face centering."
      },
      {
        id: "signature-resizing",
        name: "Signature Resizing",
        description: "Sharpening, crop cleaning, and file size adjustment for signature uploads on government recruitment portals."
      },
      {
        id: "photo-and-signature-preparation",
        name: "Photo and Signature Preparation",
        description: "Combined candidate image prep kit (photo + signature) calibrated for online competitive exam applications."
      },
      {
        id: "lamination",
        name: "Lamination",
        description: "Protective thermal pouch lamination for certificates, marksheets, ID cards, and land documents."
      },
      {
        id: "photocopying",
        name: "Photocopying",
        description: "Clear single and double-sided photocopies for document sets, application enclosures, and study notes."
      },
      {
        id: "document-scanning-photo",
        name: "Document Scanning",
        description: "High-fidelity digital preservation and scanning of paper records in color or grayscale."
      }
    ]
  },
  {
    id: "online-forms",
    name: "Online Form and Application Services",
    shortName: "Online Forms",
    description: "Guidance and filling assistance for central, state, competitive, and recruitment examinations.",
    icon: "clipboard-list",
    color: "#04abed",
    featured: true,
    services: [
      {
        id: "online-form-download",
        name: "Online Form Download",
        description: "Retrieving official PDF application templates, syllabus copies, and employment notifications."
      },
      {
        id: "form-filling",
        name: "Form Filling",
        description: "Meticulous data entry assistance ensuring no errors in names, dates, qualifications, or categories."
      },
      {
        id: "simple-online-application-assistance",
        name: "Simple Online Application Assistance",
        description: "Assistance with basic one-step online registrations and entry-level recruitment submissions."
      },
      {
        id: "application-and-document-upload",
        name: "Application and Document Upload",
        description: "Simultaneous assistance with form field inputs and uploading all mandatory certificates and proofs."
      },
      {
        id: "application-upload-submission-assistance",
        name: "Application Upload and Submission Assistance",
        description: "Final review of entered data, fee payment gateway navigation, and formal application submission."
      },
      {
        id: "application-correction-assistance",
        name: "Application Correction Assistance",
        description: "Assisting candidates during official correction window periods to fix identified errors."
      },
      {
        id: "application-status-check",
        name: "Application Status Check",
        description: "Checking scrutiny results, rejection/acceptance lists, and admit card release dates."
      },
      {
        id: "application-resubmission-assistance",
        name: "Application Resubmission Assistance",
        description: "Handling re-uploads for rejected photographs, unreadable signatures, or missing document remarks."
      },
      {
        id: "complex-application-assistance",
        name: "Complex Application Assistance",
        description: "Step-by-step navigation for intricate multi-tier forms requiring extensive experience and eligibility details."
      },
      {
        id: "multiple-application-assistance",
        name: "Multiple Application Assistance",
        description: "Filing across multiple exam boards, regional posts, or institutional quotas for a single applicant."
      },
      {
        id: "complete-online-application-support",
        name: "Complete Online Application Support",
        description: "All-inclusive guidance: notification breakdown, form filling, photo prep, fee payment, and admit card download tracking."
      }
    ]
  },
  {
    id: "resume-services",
    name: "Resume and Document Services",
    shortName: "Resume & Documents",
    description: "Professional resume design, curriculum vitae (CV) writing, biodata preparation, and official application drafting.",
    icon: "user-check",
    color: "#3aa540",
    featured: true,
    services: [
      {
        id: "basic-resume-creation",
        name: "Basic Resume Creation",
        description: "Clean single-page resume layout suitable for freshers, entry-level jobs, and apprenticeships."
      },
      {
        id: "resume-formatting",
        name: "Resume Formatting",
        description: "Polishing existing resumes with modern typography, aligned bullet points, and clean visual margins."
      },
      {
        id: "cv-creation",
        name: "CV Creation",
        description: "Detailed Curriculum Vitae detailing academic research, teaching credentials, publications, and certifications."
      },
      {
        id: "biodata-creation",
        name: "Biodata Creation",
        description: "Traditional and modern biodata formatting for marriage, family records, or regional business applications."
      },
      {
        id: "application-writing",
        name: "Application Writing",
        description: "Drafting formal letters to institutional heads, government officers, bank managers, or employers."
      },
      {
        id: "document-formatting-resume",
        name: "Document Formatting",
        description: "Comprehensive layout styling, proofreading, and structuring of official text documents."
      },
      {
        id: "professional-resume-creation",
        name: "Professional Resume Creation",
        description: "Industry-tailored multi-section resume highlighting measurable career accomplishments and technical skills."
      },
      {
        id: "resume-with-pdf-and-formatting",
        name: "Resume with PDF and Formatting",
        description: "Complete package including editable source file, print-ready PDF export, and digital mobile sharing version."
      }
    ]
  },
  {
    id: "business-services",
    name: "Basic Digital Business Services",
    shortName: "Digital Business",
    description: "Helping local shops, traders, and small enterprises establish an online presence on Google Maps and WhatsApp.",
    icon: "briefcase",
    color: "#fb8d2e",
    featured: true,
    services: [
      {
        id: "google-maps-information-assistance",
        name: "Google Maps Information Assistance",
        description: "Guidance on how local businesses appear on Google Maps, pin location accuracy, and contact listing guidelines."
      },
      {
        id: "google-business-profile-basic-assistance",
        name: "Google Business Profile Basic Assistance",
        description: "Assistance with setting up or editing Google Business Profile information, business hours, and categories."
      },
      {
        id: "whatsapp-business-setup",
        name: "WhatsApp Business Setup",
        description: "Configuring WhatsApp Business app, catalog items, automated greeting messages, and quick replies.",
        featured: true
      },
      {
        id: "digital-visiting-card-creation",
        name: "Digital Visiting Card Creation",
        description: "Interactive digital business cards with clickable call, WhatsApp, and Google Maps location buttons."
      },
      {
        id: "qr-code-creation",
        name: "QR Code Creation",
        description: "Custom QR codes for UPI payments, shop menus, website links, or Google Maps directions."
      },
      {
        id: "basic-business-profile-setup",
        name: "Basic Business Profile Setup",
        description: "Foundational digital footprint for local ventures: business description, logo placement, and contact setup."
      },
      {
        id: "google-business-basic-setup-assistance",
        name: "Google Business Basic Setup Assistance",
        description: "Step-by-step assistance in requesting address postcard verification or video verification on Google."
      },
      {
        id: "whatsapp-business-basic-profile-setup",
        name: "WhatsApp Business and Basic Profile Setup",
        description: "Dual setup combining Google listing guidance with an organized WhatsApp Business customer catalog."
      },
      {
        id: "digital-visiting-card-qr-code-creation",
        name: "Digital Visiting Card and QR Code Creation",
        description: "Complete digital identity kit: shareable electronic visiting card plus high-resolution printable QR cards."
      }
    ]
  },
  {
    id: "english-classes",
    name: "Online English Classes",
    shortName: "Online English",
    description: "One-on-one and small group online guidance for spoken English, grammar fundamentals, reading, and writing.",
    icon: "book-open",
    color: "#04abed",
    featured: true,
    services: [
      {
        id: "basic-english-guidance",
        name: "Basic English Guidance",
        description: "Introductory confidence building, sentence structures, everyday vocabulary, and conversational foundations."
      },
      {
        id: "english-speaking-practice",
        name: "English Speaking Practice",
        description: "Interactive conversation sessions designed to eliminate hesitation in daily, academic, and job environments."
      },
      {
        id: "english-grammar-practice",
        name: "English Grammar Practice",
        description: "Systematic practice on tenses, prepositions, active/passive voice, and common grammatical mistakes."
      },
      {
        id: "english-reading-practice",
        name: "English Reading Practice",
        description: "Pronunciation coaching, syllable stress, intonation, and comprehension of articles and textbooks."
      },
      {
        id: "english-writing-practice",
        name: "English Writing Practice",
        description: "Practice in drafting clear emails, formal letters, paragraphs, and job application statements."
      },
      {
        id: "english-speaking-grammar-practice",
        name: "English Speaking and Grammar Practice",
        description: "Integrated program balancing correct grammatical rules with fluent spoken sentence delivery."
      },
      {
        id: "basic-english-monthly-learning-support",
        name: "Basic English Monthly Learning Support",
        description: "Structured month-long guided curriculum with scheduled practice, homework reviews, and progress tracking."
      }
    ]
  },
  {
    id: "other-digital",
    name: "Other Digital Services",
    shortName: "Other Digital Services",
    description: "General internet assistance, travel booking guidance, digital payment help, and portal verifications.",
    icon: "globe",
    color: "#3aa540",
    services: [
      {
        id: "online-form-assistance",
        name: "Online Form Assistance",
        description: "Assistance with general citizen inquiries, feedback forms, and consumer redressal portals."
      },
      {
        id: "government-portal-assistance",
        name: "Government Portal Assistance",
        description: "Navigating state and central government web portals (UMANG, DigiLocker, e-Services, Labor welfare)."
      },
      {
        id: "railway-ticket-assistance",
        name: "Railway Ticket Assistance",
        description: "Assistance with IRCTC user registration, train schedule lookups, PNR status tracking, and booking guidance."
      },
      {
        id: "flight-ticket-assistance",
        name: "Flight Ticket Assistance",
        description: "Search and fare comparison guidance for domestic flights, web check-in, and boarding pass printing."
      },
      {
        id: "online-booking-assistance",
        name: "Online Booking Assistance",
        description: "Assisting users with bus reservations, hotel room bookings, and pilgrimage / darshan slot appointments."
      },
      {
        id: "digital-payment-assistance",
        name: "Digital Payment Assistance",
        description: "Guidance on UPI safety, transaction failure resolutions, bank dispute raising, and secure digital hygiene."
      },
      {
        id: "online-document-download-other",
        name: "Online Document Download",
        description: "Retrieving official gazette notifications, exam answer keys, merit lists, and result scorecards."
      },
      {
        id: "online-document-upload-other",
        name: "Online Document Upload",
        description: "Assisting clients who do not possess scanners or desktop computers with secure remote file uploads."
      },
      {
        id: "online-information-search",
        name: "Online Information Search",
        description: "Locating verified official phone numbers, addresses, scheme rules, and government notifications."
      },
      {
        id: "online-verification-assistance",
        name: "Online Verification Assistance",
        description: "Checking vehicle RC status, driving license validity, and public record verification portals."
      },
      {
        id: "general-digital-assistance",
        name: "General Digital Assistance",
        description: "General troubleshooting with online accounts, email creation, smartphone setup, and digital safety."
      },
      {
        id: "complex-digital-assistance",
        name: "Complex Digital Assistance",
        description: "Dedicated assistance for multifaceted digital requirements requiring patience, research, and technical guidance."
      }
    ]
  }
];

// Helper to access all services as a flattened array (skips disabled services by default)
function getAllServices(includeDisabled = false) {
  const all = [];
  serviceCategories.forEach(category => {
    if (category.disabled && !includeDisabled) return;
    (category.services || []).forEach(service => {
      if (service.disabled && !includeDisabled) return;
      all.push({
        ...service,
        categoryId: category.id,
        categoryName: category.name,
        categoryShortName: category.shortName,
        categoryColor: category.color,
        categoryIcon: category.icon,
        officialAdvisory: service.officialAdvisory || category.officialAdvisory || null
      });
    });
  });
  return all;
}

// Helper to find a service by ID (includes search through all categories)
function findServiceById(serviceId) {
  for (const cat of serviceCategories) {
    const s = (cat.services || []).find(item => item.id === serviceId);
    if (s) {
      return {
        ...s,
        categoryId: cat.id,
        categoryName: cat.name,
        categoryShortName: cat.shortName,
        categoryColor: cat.color,
        categoryIcon: cat.icon,
        officialAdvisory: s.officialAdvisory || cat.officialAdvisory || null
      };
    }
  }
  return null;
}

// Self-check diagnostic utility: checks for duplicate category or service IDs
function validateCatalogueData() {
  const categoryIds = new Map();
  const serviceIds = new Map();
  const duplicateCategories = [];
  const duplicateServices = [];

  serviceCategories.forEach(cat => {
    if (categoryIds.has(cat.id)) {
      duplicateCategories.push({ id: cat.id, name: cat.name });
    } else {
      categoryIds.set(cat.id, cat.name);
    }

    (cat.services || []).forEach(s => {
      if (serviceIds.has(s.id)) {
        duplicateServices.push({
          id: s.id,
          name: s.name,
          firstFoundIn: serviceIds.get(s.id),
          alsoFoundIn: cat.name
        });
      } else {
        serviceIds.set(s.id, cat.name);
      }
    });
  });

  const result = {
    isValid: duplicateCategories.length === 0 && duplicateServices.length === 0,
    totalCategories: serviceCategories.length,
    totalServices: serviceIds.size,
    duplicateCategories,
    duplicateServices
  };

  if (!result.isValid) {
    console.warn("⚠️ Catalogue validation warnings found:", result);
  }

  return result;
}

// Build WhatsApp enquiry URL safely
function generateWhatsAppUrl(serviceName = "General Digital Assistance", customNote = "") {
  const number = "917870886355";
  
  let text = `Hello RLK Online Services,\n\nI would like to enquire about your service: "${serviceName}".\n\nPlease let me know how to request this service, the required documents, and the next steps.\n`;
  if (customNote && customNote.trim().length > 0) {
    text += `\nAdditional details:\n${customNote.trim()}\n`;
  }
  text += `\nThank you!`;

  const encodedMessage = encodeURIComponent(text);

  return {
    isConfigured: true,
    url: `https://wa.me/${number}?text=${encodedMessage}`,
    rawMessage: text,
    whatsappNumber: number
  };
}
