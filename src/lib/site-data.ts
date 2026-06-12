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

export const HERO_ANIMATION = {
  poemHTML: `
    <p>When your <span>trees</span> need <span>expert</span> care across Grant County, Affordable Tree Guys shows up with decades of <span>experience</span> and a neighbor-first approach. From towering oaks to storm-damaged limbs, every <span>cut</span> is planned with <span>precision</span> and respect for your property. We <span>remove</span> hazardous trees safely, <span>trim</span> canopies for lasting health, grind stumps below grade, and clear overgrown brush—leaving your yard clean and <span>beautiful</span>. Fully <span>insured</span> and rated five stars on Google, we're proud to be the community's trusted choice for <span>emergency</span> response day or night. When branches threaten your home or a fallen tree blocks your driveway, one call brings a professional crew ready to work. We haul debris, protect landscaping, and treat every job site like our own backyard. From Marion to Gas City and beyond, Affordable Tree Guys delivers <span>affordable</span> pricing without cutting corners on safety. Your trees deserve craftsmen who care—your property deserves results you can see. That's our <span>promise</span>: honest quotes, expert work, and a yard you're proud to come home to. When storms roll through Indiana, we answer the call—<span>24 hours</span> a day, seven days a week. Our climbers rig every removal with ANSI standards, our ground crew keeps walkways clear, and we never leave until the last chip is swept. Whether it's a single dead limb or a full lot clearing, we scale the job to your budget and timeline. Neighbors recommend us because we show up on time, communicate clearly, and stand behind every <span>branch</span> we cut. Tree removal, precision trimming, stump grinding, lot clearing, storm cleanup—Affordable Tree Guys does it all with the same pride we bring to our own homes. Call <span>765-293-7760</span> today for a free estimate and see why Grant County trusts us with their tallest assets. Professional arbor care isn't a luxury—it's peace of mind. Let us earn yours.</p>
  `,
  backgroundImageUrl:
    "https://images.unsplash.com/photo-1625247839864-11a7669d20fa?w=1920&q=80",
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
