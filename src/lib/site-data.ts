export const SITE = {
  name: "Affordable Tree Guys",
  tagline: "Professional Tree Care for Grant County",
  phone: "(765) 293-7760",
  phoneHref: "tel:+17652937760",
  email: "info@affordabletreeguys.org",
  address: {
    street: "931 East North H Street",
    city: "Gas City",
    state: "IN",
    zip: "46933",
    full: "931 East North H Street, Gas City, IN 46933",
  },
  serviceArea: [
    "Gas City",
    "Marion",
    "Jonesboro",
    "Upland",
    "Fairmount",
    "Sweetser",
    "Van Buren",
    "Grant County",
  ],
} as const;

export const HERO = {
  imageUrl: "/hero-crew.jpg",
  imageAlt:
    "Affordable Tree Guys crew removing a tree with branded truck on site",
  badge: "Fully Insured · 5.0 Google Rating",
  headline: "Affordable Tree Guys",
  subheadline: "Protecting Your Home & Landscape in Grant County",
} as const;

export const BEFORE_AFTER = {
  /** Replace with your own job-site photos: public/before-tree.jpg & public/after-tree.jpg */
  beforeImage: "/before-tree.jpg",
  afterImage: "/after-tree.jpg",
  beforeAlt: "Overgrown trees and hazardous limbs before removal",
  afterAlt: "Clean, open yard after professional tree removal",
  caption:
    "Same property — hazardous overgrowth removed, debris hauled, and yard restored.",
  trimBeforeImage: "/trim-before.jpg",
  trimAfterImage: "/trim-after.jpg",
} as const;

export const SERVICES = [
  {
    title: "Tree Removal",
    description:
      "Safe, controlled removal of hazardous, dead, or unwanted trees using professional rigging—minimal impact to your landscape.",
    icon: "Axe" as const,
  },
  {
    title: "Tree Trimming & Pruning",
    description:
      "Health-focused trimming that improves structure, promotes growth, and reduces storm damage risk on your property.",
    icon: "Scissors" as const,
  },
  {
    title: "Stump Grinding",
    description:
      "Complete stump removal below grade so you can replant, sod, or reclaim usable yard space without tripping hazards.",
    icon: "CircleDot" as const,
  },
  {
    title: "Storm & Emergency Service",
    description:
      "24/7 emergency response when fallen trees or limbs threaten your home, driveway, or power lines after severe weather.",
    icon: "CloudLightning" as const,
  },
  {
    title: "Brush & Lot Clearing",
    description:
      "Overgrown brush, invasive growth, and lot clearing for residential and commercial properties across Grant County.",
    icon: "Trees" as const,
  },
  {
    title: "Debris Haul-Away",
    description:
      "Full cleanup included—we chip, haul, and leave your property spotless when the job is done.",
    icon: "Truck" as const,
  },
] as const;

export const STATS = [
  { value: "5.0", label: "Google Rating" },
  { value: "24/7", label: "Emergency Service" },
  { value: "100%", label: "Fully Insured" },
  { value: "#1", label: "Local Choice" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "They removed two massive trees near our house and you'd never know they were there. Fair price, fast crew, spotless cleanup.",
    author: "Sarah M.",
    location: "Marion, IN",
  },
  {
    quote:
      "Called after a storm at midnight—they were here first thing in the morning. Professional, insured, and genuinely good people.",
    author: "Mike T.",
    location: "Gas City, IN",
  },
  {
    quote:
      "Five stars is an understatement. Best quote we got, and the trimming made our oaks look incredible. Highly recommend.",
    author: "Jennifer L.",
    location: "Fairmount, IN",
  },
  {
    quote:
      "Had three stumps ground and the yard looks brand new. Crew was respectful, on time, and the price beat every other quote.",
    author: "David R.",
    location: "Upland, IN",
  },
  {
    quote:
      "Emergency tree on our roof after the storm—they had it off safely within hours. Lifesavers. Will never call anyone else.",
    author: "Amanda K.",
    location: "Sweetser, IN",
  },
  {
    quote:
      "Honest pricing, no surprises. They walked me through every step and left the property cleaner than before. A+ service.",
    author: "Robert H.",
    location: "Jonesboro, IN",
  },
] as const;
