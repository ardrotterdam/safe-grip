// Centralized contact information configuration
// All contact details should be imported from here to avoid hardcoding in components

export const CONTACT_INFO = {
  email: "info@safe-grip.nl",
  phone: "+31 10 800 5912",
  phoneDisplay: "+31 (0)10 800 5912",
  whatsapp: "+31108005912",
  
  address: {
    street: "Westplein 12",
    postalCode: "3016 BM",
    city: "Rotterdam",
    country: "Nederland",
    full: "Westplein 12, 3016 BM Rotterdam, Nederland"
  },
  
  company: {
    name: "SafeGrip",
    legalName: "SafeGrip (onderdeel van ABshops.nl)",
    kvk: "72037628",
    btw: "NL001703956B72"
  },
  
  social: {
    linkedin: "https://linkedin.com/company/safegrip",
    // Add more social links as needed
  },
  
  support: {
    hours: "Ma-Vr 09:00 - 17:00",
    responseTime: "Binnen 24 uur"
  }
} as const;

// Service regions
export const SERVICE_REGIONS = ["Nederland", "België", "Luxemburg"] as const;

// Shipping info
export const SHIPPING_INFO = {
  freeShippingThreshold: 150, // EUR
  standardDelivery: "2-3 werkdagen",
  expressDelivery: "Volgende werkdag"
} as const;
