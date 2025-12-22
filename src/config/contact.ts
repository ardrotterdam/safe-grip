// Centralized contact information configuration
// All contact details should be imported from here to avoid hardcoding in components

export const CONTACT_INFO = {
  email: "info@safe-grip.nl",
  phone: "+31 10 123 4567",
  phoneDisplay: "+31 (0)10 123 4567",
  whatsapp: "+31612345678",
  
  address: {
    street: "Scheepvaartkwartier 42",
    postalCode: "3011 TH",
    city: "Rotterdam",
    country: "Nederland",
    full: "Scheepvaartkwartier 42, 3011 TH Rotterdam, Nederland"
  },
  
  company: {
    name: "SafeGrip",
    legalName: "SafeGrip B.V.",
    kvk: "12345678",
    btw: "NL123456789B01"
  },
  
  social: {
    linkedin: "https://linkedin.com/company/safegrip",
    // Add more social links as needed
  },
  
  support: {
    hours: "Ma-Vr 08:00 - 17:00",
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
