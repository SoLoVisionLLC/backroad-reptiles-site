export interface FeederFreshnessItem {
  id: string;
  name: string;
  category: 'insects' | 'worms' | 'rodents' | 'aquatic';
  freshnessScore: number; // 0-100
  lastArrival: string;
  nextRestock: string;
  inStockCount: string;
  sizes: string[];
  priceRange: string;
  nutrition: {
    protein: string;
    fat: string;
    calciumToPhos: string;
    moisture: string;
  };
  gutLoadingProtocol: string;
  squareUrl: string;
  badge?: string;
}

export interface HabitatBuildStep {
  stepNumber: number;
  stepTitle: string;
  options: {
    id: string;
    name: string;
    description: string;
    price: number;
    specs?: string[];
    recommendedFor?: string[];
    isPopular?: boolean;
  }[];
}

export interface HusbandryFieldEntry {
  speciesId: string;
  scientificName: string;
  commonName: string;
  category: 'lizards' | 'snakes' | 'turtles' | 'amphibians' | 'inverts';
  originBiotope: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  lifespan: string;
  adultLength: string;
  baskingTemp: string;
  ambientDayTemp: string;
  ambientNightTemp: string;
  humidityLevel: string;
  uvbIndex: string;
  substrateFormula: string;
  feedingCadence: string;
  keeperTips: string[];
  squareSearchTerm: string;
}

export const STORE_META_B = {
  name: "Back Road Reptiles and Exotics LLC",
  tagline: "Seneca County's Premier Captive-Bred Herpetological Sanctuary",
  established: "2021",
  founders: "Brian & Angel Johnson",
  phone: "(419) 701-7101",
  phoneRaw: "4197017101",
  email: "backroadreptilesandexotics@gmail.com",
  address: {
    street: "610 Plaza Drive",
    city: "Fostoria",
    state: "OH",
    zip: "44830",
    county: "Seneca County",
    landmark: "Directly across from Fostoria High School Plaza",
  },
  squareOnlineStore: "https://store.backroadreptiles.com/",
  squareCatalog: "https://store.backroadreptiles.com/s/shop",
  facebook: "https://www.facebook.com/backroadreptilesandexotics",
  tiktok: "https://www.tiktok.com/@backroadreptiles",
  bbbUrl: "https://www.bbb.org/us/oh/fostoria/profile/reptiles/back-road-reptiles-and-exotics-llc-0322-205166444",
  bbbRating: "A+ Accredited",
  pickupPolicy: "In-Store & Regional Expo Pickup Only — 100% Zero-Stress Animal Transit Guarantee",
  hours: [
    { day: "Monday", open: "12:00 PM", close: "7:00 PM", isOpen: true, shortDay: "Mon" },
    { day: "Tuesday", open: "12:00 PM", close: "7:00 PM", isOpen: true, shortDay: "Tue" },
    { day: "Wednesday", open: "12:00 PM", close: "7:00 PM", isOpen: true, shortDay: "Wed" },
    { day: "Thursday", open: "12:00 PM", close: "7:00 PM", isOpen: true, shortDay: "Thu" },
    { day: "Friday", open: "12:00 PM", close: "7:00 PM", isOpen: true, shortDay: "Fri" },
    { day: "Saturday", open: "11:00 AM", close: "7:00 PM", isOpen: true, shortDay: "Sat" },
    { day: "Sunday", open: "12:00 PM", close: "5:00 PM", isOpen: true, shortDay: "Sun" },
  ],
  environmentSensors: {
    sanctuaryTemp: "78.4°F",
    sanctuaryHumidity: "54%",
    uvbCalibrationDate: "Aug 2026",
    activeCaptiveBredSpecies: 48,
    feederColonyCount: "120,000+",
  }
};

export const FEEDER_FRESHNESS_DATA: FeederFreshnessItem[] = [
  {
    id: "dubia-roaches",
    name: "Dubia Roaches (Blaptica dubia)",
    category: "insects",
    freshnessScore: 98,
    lastArrival: "Every Monday 9:00 AM",
    nextRestock: "Monday (Weekly Standing Shipment)",
    inStockCount: "15,000+ Available",
    sizes: ["Small (1/4\")", "Medium (1/2\")", "Large (3/4\" - 1\")", "Adult Breeders"],
    priceRange: "$4.99 – $24.99",
    nutrition: {
      protein: "36%",
      fat: "7%",
      calciumToPhos: "1:3 (Optimal for dusting)",
      moisture: "65%",
    },
    gutLoadingProtocol: "Fed high-calcium organic grain medley, fresh carrots & bee pollen 24h prior to sale.",
    squareUrl: "https://store.backroadreptiles.com/s/shop",
    badge: "Keeper #1 Choice"
  },
  {
    id: "banded-crickets",
    name: "Banded Crickets (Gryllodes sigillatus)",
    category: "insects",
    freshnessScore: 95,
    lastArrival: "Tuesday & Friday",
    nextRestock: "Friday Morning",
    inStockCount: "25,000+ Active",
    sizes: ["Pinhead (1/8\")", "Small (1/4\")", "Medium (1/2\")", "Large (3/4\")"],
    priceRange: "$2.50 / 25ct – $18.00 / 250ct",
    nutrition: {
      protein: "18.6%",
      fat: "6.0%",
      calciumToPhos: "1:9",
      moisture: "69%",
    },
    gutLoadingProtocol: "Hydrated with Repashy Hydroload and dusted spirulina potato slices.",
    squareUrl: "https://store.backroadreptiles.com/s/shop",
    badge: "High Activity"
  },
  {
    id: "hornworms",
    name: "Live Hornworms (Manduca sexta)",
    category: "worms",
    freshnessScore: 99,
    lastArrival: "Wednesday Fresh Hatch",
    nextRestock: "Wednesday",
    inStockCount: "In-Pod Cups Ready",
    sizes: ["Small Starter Pod (12ct)", "Medium Pod (18-24ct)"],
    priceRange: "$8.99 – $14.99 / cup",
    nutrition: {
      protein: "9.0%",
      fat: "3.2%",
      calciumToPhos: "1:3",
      moisture: "85% (Hydration Booster)",
    },
    gutLoadingProtocol: "Cultured on fortified mulberry chow; unparalleled for post-lay recovery.",
    squareUrl: "https://store.backroadreptiles.com/s/shop",
    badge: "Hydration Superfood"
  },
  {
    id: "black-soldier-fly",
    name: "Calci-Worms / BSFL (Hermetia illucens)",
    category: "worms",
    freshnessScore: 96,
    lastArrival: "Every Monday",
    nextRestock: "Next Monday",
    inStockCount: "Cups of 50 / 100",
    sizes: ["Medium (3/8\")", "Large (5/8\")"],
    priceRange: "$5.99 – $9.99",
    nutrition: {
      protein: "17.3%",
      fat: "9.4%",
      calciumToPhos: "1.5:1 (Natural Calcium Monster)",
      moisture: "61%",
    },
    gutLoadingProtocol: "Naturally high in bio-available calcium; no dusting required.",
    squareUrl: "https://store.backroadreptiles.com/s/shop"
  },
  {
    id: "frozen-thawed-rodents",
    name: "Lab-Grade Frozen Mice & Rats",
    category: "rodents",
    freshnessScore: 100,
    lastArrival: "Flash-Frozen Bi-Weekly",
    nextRestock: "Continuous Inventory",
    inStockCount: "Over 800 Packets in Cryo-Freezer",
    sizes: ["Pinkies", "Fuzzies", "Hoppers", "Adult Mice", "Rat Pups", "Weanlings", "Jumbos"],
    priceRange: "$1.75 – $8.50 ea (Volume Discounts)",
    nutrition: {
      protein: "55.8% dry",
      fat: "23.6% dry",
      calciumToPhos: "1.1:1",
      moisture: "64%",
    },
    gutLoadingProtocol: "Ethically raised on certified organic grain feeds, CO2 euthanized per AVMA guidelines.",
    squareUrl: "https://store.backroadreptiles.com/s/shop",
    badge: "Certified Clean"
  },
  {
    id: "nightcrawlers",
    name: "Canadian Nightcrawlers & Red Wigglers",
    category: "worms",
    freshnessScore: 94,
    lastArrival: "Thursday Chilled",
    nextRestock: "Thursday",
    inStockCount: "Cups in Cold Storage",
    sizes: ["12ct Cup", "24ct Cup"],
    priceRange: "$4.50 – $7.99",
    nutrition: {
      protein: "10.5%",
      fat: "1.8%",
      calciumToPhos: "1.5:1",
      moisture: "82%",
    },
    gutLoadingProtocol: "Kept in damp peat moss enriched with organic kelp meal.",
    squareUrl: "https://store.backroadreptiles.com/s/shop"
  }
];

export const HABITAT_CONFIGURATOR_STEPS: HabitatBuildStep[] = [
  {
    stepNumber: 1,
    stepTitle: "Select Target Companion",
    options: [
      {
        id: "bearded-dragon",
        name: "Central Bearded Dragon (Pogona vitticeps)",
        description: "Arid scrubland setup with intense UVB gradient and elevated sandstone basking plateau.",
        price: 0,
        specs: ["Min 4x2x2 (120 Gallon)", "105°F Basking", "12-14% UVB Zone 3"],
        isPopular: true
      },
      {
        id: "crested-gecko",
        name: "New Caledonian Crested Gecko (Correlophus ciliatus)",
        description: "Vertical rainforest canopy with live bromeliads, cork rounds, and springtail bio-crew.",
        price: 0,
        specs: ["Min 18x18x36 Vertical", "72-78°F Ambient", "65-80% Humidity Drop"]
      },
      {
        id: "ball-python",
        name: "Royal Ball Python (Python regius)",
        description: "Sub-Saharan microclimate with dual thermo-regulated hides and moisture-retentive cypress floor.",
        price: 0,
        specs: ["Min 4x2x2 PVC", "88-92°F Warm Hide", "60-70% Humidity Baseline"]
      },
      {
        id: "leopard-gecko",
        name: "Leopard Gecko (Eublepharis macularius)",
        description: "Arid rocky clay biome with dedicated humid hide box and gentle 7% Ferguson Zone 1 lighting.",
        price: 0,
        specs: ["Min 36x18x18 (40 Gallon Breeder)", "90°F Belly/Slate Heat", "2% UVB Supp"]
      },
      {
        id: "dart-frog",
        name: "Poison Dart Frog / Tropical Amphibian",
        description: "Mist-saturated living slice of rainforest with drainage layer, ABG mix, and tropical mosses.",
        price: 0,
        specs: ["Front-Opening Glass", "MistKing Automation Ready", "Dense Live Flora"]
      }
    ]
  },
  {
    stepNumber: 2,
    stepTitle: "Choose Bioactive Enclosure Grade",
    options: [
      {
        id: "bio-complete-pvc",
        name: "Custom 4x2x2 Solid PVC Sanctuary Enclosure",
        description: "Aircraft-grade thermal insulation PVC, sliding safety glass doors, recessed screen top, and cable grommets.",
        price: 289.99,
        specs: ["120 Gallon equivalent", "98% humidity retention efficiency", "Lifetime warp guarantee"],
        isPopular: true
      },
      {
        id: "bio-vertical-glass",
        name: "Exo Terra / Zoo Med Natural Glass Terrarium",
        description: "Dual front-opening doors, raised bottom frame for substrate heaters, and stainless steel top ventilation.",
        price: 199.99,
        specs: ["18\" x 18\" x 36\" Vertical", "Built-in rock background", "Integrated lock latch"]
      },
      {
        id: "bio-essential-glass-40",
        name: "40-Gallon Breeder Front-Opening Low Habitat",
        description: "Low-profile glass footprint optimized for terrestrial geckos and juvenile colubrids.",
        price: 149.99,
        specs: ["36\" x 18\" x 18\"", "Sliding steel screen top", "Polished edge glass"]
      }
    ]
  },
  {
    stepNumber: 3,
    stepTitle: "Thermoregulation & UVB Lighting Package",
    options: [
      {
        id: "pro-t5-deep-heat",
        name: "Arcadia ProT5 UVB Linear Kit + Deep Heat Projector (DHP)",
        description: "Gold standard Ferguson Zone-calibrated linear phosphor tube + infrared-A/B deep tissue penetrator with dimming thermostat.",
        price: 144.99,
        specs: ["Arcadia ProT5 12% or 6%", "50W/80W Deep Heat Projector", "Arcadia Clamp Lamp & Cage"],
        isPopular: true
      },
      {
        id: "halogen-t5-bundle",
        name: "Sun-Spectrum Halogen Basking Flood + T5 UVB Kit",
        description: "Closest spectral match to midday natural solar radiation with high-output UVA.",
        price: 119.99,
        specs: ["PAR38 Halogen Flood 75W", "T5 HO 24W Fixture", "Analog Timer Control"]
      },
      {
        id: "tropical-led-uvb",
        name: "Jungle Dawn LED Bar + Arcadia ShadeDweller 7%",
        description: "Ultra-high PAR 6500K spectrum for dense plant photosynthesis plus safe low-index UVB for crepuscular species.",
        price: 129.99,
        specs: ["Arcadia Jungle Dawn 22W LED", "ShadeDweller 7% UVB", "Full botanical spectrum"]
      }
    ]
  },
  {
    stepNumber: 4,
    stepTitle: "Substrate & Living Clean-Up Crew (CUC)",
    options: [
      {
        id: "bioactive-super-kit",
        name: "Full Living Bioactive Ecosystem Package",
        description: "Custom ABG soil blend, leaf litter, hydro-balls drainage layer, plus active master colonies of Springtails & Tropical Dwarf White Isopods.",
        price: 64.99,
        specs: ["2x 10qt Hand-Mixed Substrate", "Tropical Isopod Colony (25ct)", "Temperate Springtail Culture", "Virgin Oak Leaf Litter"],
        isPopular: true
      },
      {
        id: "arid-clay-bio",
        name: "Arid Australian Stone & Excavator Bio-Blend",
        description: "Burrow-holding clay sand, crushed granite, desert leaf litter, and Porcellio scaber arid isopods.",
        price: 54.99,
        specs: ["30lb Arid Bio-Substrate", "Arid Isopod Colony", "Natural Slate Basking Slab"]
      },
      {
        id: "sterile-naturalist",
        name: "Organic Forest Floor & Cypress Mulch Foundation",
        description: "Pre-sterilized, dust-free kiln-dried bark and milled coconut husk for easy spot maintenance.",
        price: 34.99,
        specs: ["24qt Substrate Pack", "Sphagnum Moss Brick", "Reptile-Safe Disinfectant"]
      }
    ]
  }
];

export const HUSBANDRY_FIELD_JOURNAL: HusbandryFieldEntry[] = [
  {
    speciesId: "bearded-dragon",
    scientificName: "Pogona vitticeps",
    commonName: "Central Bearded Dragon",
    category: "lizards",
    originBiotope: "Interior Arid Woodlands & Desert Scrub, Australia",
    difficulty: "Beginner",
    lifespan: "12 – 15 Years",
    adultLength: "18 – 24 Inches",
    baskingTemp: "104°F – 110°F (Surface measured with Infrared Gun)",
    ambientDayTemp: "82°F – 86°F",
    ambientNightTemp: "68°F – 74°F",
    humidityLevel: "30% – 40% (Never mist directly; provide fresh water dish)",
    uvbIndex: "Ferguson Zone 3 (UVI 2.9 – 7.4 at basking perch)",
    substrateFormula: "50% Topsoil / 30% Washed Playsand / 20% Excavator Clay",
    feedingCadence: "Juveniles: 80% Gut-Loaded Insects / 20% Greens. Adults: 80% Collard/Dandelion Greens / 20% Insects.",
    keeperTips: [
      "Always measure surface temperature with an infrared digital temp gun, not an analog wall dial.",
      "Replace T5 UVB bulbs every 10-12 months even if light is visible, as UV phosphors decay.",
      "Dust insects with Calcium without D3 on weekdays; Calcium with D3 twice monthly."
    ],
    squareSearchTerm: "Bearded Dragon"
  },
  {
    speciesId: "ball-python",
    scientificName: "Python regius",
    commonName: "Royal Ball Python",
    category: "snakes",
    originBiotope: "West & Central African Grasslands & Agricultural Borders",
    difficulty: "Beginner",
    lifespan: "20 – 30+ Years",
    adultLength: "3.5 – 5.0 Feet",
    baskingTemp: "88°F – 92°F (Warm Hide Interior)",
    ambientDayTemp: "78°F – 82°F",
    ambientNightTemp: "75°F – 78°F",
    humidityLevel: "60% – 70% Baseline (Increase to 80% during opaque shed cycle)",
    uvbIndex: "Ferguson Zone 1 (ShadeDweller 2.4% - 7% recommended)",
    substrateFormula: "70% Organic Cypress Mulch / 30% Coco Coir Husk",
    feedingCadence: "Hatchlings: 1 appropriately sized mouse/rat every 5-7 days. Adults: 1 small/medium rat every 14-21 days.",
    keeperTips: [
      "Provide two identical tight-fitting hides (one hot side, one cool side) so the animal never chooses between security and thermoregulation.",
      "Never feed live rodents unattended; we offer 100% frozen-thawed trained feeders in-store."
    ],
    squareSearchTerm: "Ball Python"
  },
  {
    speciesId: "crested-gecko",
    scientificName: "Correlophus ciliatus",
    commonName: "Crested Gecko",
    category: "lizards",
    originBiotope: "Grand Terre & Isle of Pines Rainforest Canopy, New Caledonia",
    difficulty: "Beginner",
    lifespan: "15 – 20 Years",
    adultLength: "8 Inches (including tail)",
    baskingTemp: "Gentle 78°F warm spot optional",
    ambientDayTemp: "72°F – 76°F (Warning: temps above 82°F cause heat stress)",
    ambientNightTemp: "65°F – 70°F",
    humidityLevel: "50% Daytime drying period -> 80-90% Evening heavy mist cycle",
    uvbIndex: "Ferguson Zone 1 (Arcadia ShadeDweller 2.4% - 7%)",
    substrateFormula: "ABG mix (Peat, Tree Fern Fiber, Sphagnum, Charcoal, Bark)",
    feedingCadence: "Complete Fruit Diet Puree (Pangea / Repashy) 3x weekly; live dusted crickets or roaches 1x weekly.",
    keeperTips: [
      "Always allow terrarium to dry out to 50% humidity during the day to prevent respiratory bacterial fungal growth.",
      "Thrives in living bioactive setups where micro-fauna devour waste and mold."
    ],
    squareSearchTerm: "Crested Gecko"
  }
];

export const FOUNDER_OATH_POINTS = [
  {
    title: "100% Captive-Bred & Socialized",
    description: "We never source unvetted wild-caught imports that carry parasites. Every single reptile in our care is captive-bred, eating steadily, and socialized before going home."
  },
  {
    title: "No Mail Carrier Animal Shipping",
    description: "Unlike warehouse shippers who leave live animals in freezing or sweltering courier trucks, we protect life through in-person pickup and regional expo handoffs only."
  },
  {
    title: "Lifetime Husbandry Hotline",
    description: "When you adopt from Brian & Angel, you gain direct access to our personal husbandry advice. Call, text, or visit our Fostoria shop whenever questions arise."
  },
  {
    title: "Gut-Loaded Feeders Every Single Day",
    description: "Every insect and rodent leaving our doors has been nourished with high-grade organic grains, fresh produce, and bee pollen for maximum nutritional density."
  },
  {
    title: "Transparent Habitat Sizing",
    description: "We refuse to sell undersized cages. We will always guide you to the correct adult enclosure size so your animal lives a full, stress-free life."
  }
];
