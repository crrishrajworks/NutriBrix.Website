export const SITE = {
  name: "NutriBrix",
  tagline: "Feed the Soil. Fuel the Future.",
  subtitle: "From Farm Waste to Farm Wealth",
  description:
    "NutriBrix Organic Smart Block — compressed organic manure made from crop residue and farm waste for Indian farmers.",
  whatsapp: "91XXXXXXXXXX",
  email: "info@nutribrix.in",
  phone: "+91 XXXXX XXXXX",
  location: "Rajkot, Gujarat",
  domain: "www.nutribrix.in",
} as const;

export const PACKS = [
  {
    id: "5kg",
    weight: "5 KG",
    price: 149,
    perKg: 30,
    image: "/bag-5kg.jpg",
    label: "Small farmers",
    description: "Trial & convenience pack",
    featured: false,
    tag: "",
  },
  {
    id: "10kg",
    weight: "10 KG",
    price: 269,
    perKg: 27,
    image: "/bag-10kg.jpg",
    label: "Regular use",
    description: "Mid-sized landholdings",
    featured: true,
    tag: "Most chosen",
  },
  {
    id: "30-40kg",
    weight: "30–40 KG",
    price: 525,
    perKg: 15,
    image: "/bag-30-40kg.jpg",
    label: "Bulk / FPO use",
    description: "Farmer Producer Organizations",
    featured: false,
    tag: "",
  },
] as const;

export const CHAPTERS = [
  {
    num: "01",
    title: "Crop residue burning",
    body: "Farmers burn agricultural waste each season, causing air pollution and long-term soil damage.",
  },
  {
    num: "02",
    title: "NutriBrix Smart Block",
    body: "That same waste is processed into a compact, nutrient-rich organic manure block.",
  },
  {
    num: "03",
    title: "Healthier soil",
    body: "Gradual nutrient release and better moisture retention rebuild soil health naturally.",
  },
  {
    num: "04",
    title: "Better crops, better future",
    body: "Farmers get sustainable yields while reducing pollution and input cost over time.",
  },
] as const;

export const WHY_POINTS = [
  "Compressed smart block — not loose material, so it doesn't spill, scatter, or need extra packaging",
  "Compact storage in minimal space, easy to stack at a dealer counter or farm shed",
  "Gradual nutrient release instead of a quick, wasted burst",
  "Made from recycled agricultural waste — converts a burning problem into a soil solution",
] as const;

export const COMPARE_ROWS = [
  { feature: "Form", ordinary: "Loose material", nb: "Compressed block" },
  { feature: "Transport", ordinary: "Difficult", nb: "Easy" },
  { feature: "Storage", ordinary: "Large space", nb: "Compact" },
  {
    feature: "Nutrient release",
    ordinary: "Quick",
    nb: "Gradual",
  },
  {
    feature: "Packaging",
    ordinary: "Traditional",
    nb: "Smart eco packaging",
  },
] as const;

export const BUY_CHANNELS = [
  {
    title: "Agri Input Shops",
    description:
      "Ask for NutriBrix at your local agri retailer — packs stocked in Gujarat and expanding.",
    icon: "shop" as const,
  },
  {
    title: "Krishi Kendras",
    description:
      "Available through select Krishi Vigyan Kendras and government-linked farm centres.",
    icon: "pin" as const,
  },
  {
    title: "FPOs & Co-ops",
    description:
      "Bulk 30–40kg packs with FPO pricing and delivery straight to your co-op yard.",
    icon: "users" as const,
  },
  {
    title: "Online / Direct",
    description:
      "Enquire on WhatsApp or through nutribrix.in — we'll route your order to the nearest dealer.",
    icon: "phone" as const,
  },
] as const;

export const TESTIMONIALS = [
  {
    initials: "RP",
    quote:
      "I used to burn what was left after harvest — there was no other way to clear the field. Now that waste goes back into the soil instead of up in smoke.",
    name: "Ramesh Patel",
    role: "Small farmer, 2–4 acre landholding, cotton & groundnut, Gujarat",
  },
  {
    initials: "SM",
    quote:
      "The compressed block format means no spillage, no mess. My vegetable garden has never looked better. The gradual nutrient release really works.",
    name: "Sunita Mehta",
    role: "Vegetable grower, Junagadh, Gujarat",
  },
  {
    initials: "DK",
    quote:
      "Our FPO ordered 20 bags of the 30–40kg pack. The 10% discount made it very affordable. Soil moisture retention has improved noticeably across all our member farms.",
    name: "Dinesh Kumar",
    role: "FPO Leader, Amreli, Gujarat",
  },
  {
    initials: "BJ",
    quote:
      "I was sceptical at first, but NutriBrix changed my mind. The block format is genius — easy to handle, no mess, and the results speak for themselves.",
    name: "Bhavesh Joshi",
    role: "Marginal farmer, Bhavnagar, Gujarat",
  },
] as const;

export const MARQUEE_ITEMS = [
  "From Farm Waste",
  "to Farm Wealth",
  "Feed the Soil",
  "Fuel the Future",
] as const;
