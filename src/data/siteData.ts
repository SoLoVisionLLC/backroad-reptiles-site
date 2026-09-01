import { Product, SpeciesCareInfo, Review, FAQItem } from '../types';

export const STORE_INFO = {
  name: 'Back Road Reptiles and Exotics LLC',
  shortName: 'Back Road Reptiles',
  established: '2017',
  accreditation: 'BBB A+ Accredited Business',
  owners: 'Brian & Angel Johnson',
  tagline: 'Your next curious companion starts here.',
  subheadline: 'Fostoria’s hands-on source for healthy reptiles, exotic companions, weekly fresh feeders, custom setups, and practical keeper know-how.',
  
  address: {
    street: '610 Plaza Drive',
    city: 'Fostoria',
    state: 'OH',
    zip: '44830',
    formatted: '610 Plaza Drive, Fostoria, Ohio 44830',
    googleMapsUrl: 'https://maps.google.com/?q=610+Plaza+Drive+Fostoria+OH+44830',
    directionsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.3847248742886!2d-83.4243!3d41.1578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883bbf5555555555%3A0x5555555555555555!2s610%20Plaza%20Dr%2C%20Fostoria%2C%20OH%2044830!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus',
  },

  contact: {
    phone: '(419) 701-7101',
    phoneRaw: '4197017101',
    email: 'backroadreptilesllc@gmail.com',
  },

  socials: {
    facebook: 'https://www.facebook.com/backroadreptile/',
    instagram: 'https://instagram.com/back_road_reptiles',
    instagramHandle: '@back_road_reptiles',
    twitter: 'https://twitter.com/BackRoadReptile',
    twitterHandle: '@BackRoadReptile',
  },

  square: {
    storeUrl: 'https://store.backroadreptiles.com/s/shop',
    giftCardUrl: 'https://squareup.com/gift/AAHHRT2TA5HRJ/order',
    bookingUrl: 'https://store.backroadreptiles.com/contact-us',
    rodentsCategoryUrl: 'https://store.backroadreptiles.com/shop/rodents/5PQKONX6H2DHSE4Y2DGUJSBS',
    insectsCategoryUrl: 'https://store.backroadreptiles.com/shop/insects-worms-feeders/2',
    aquaticsCategoryUrl: 'https://store.backroadreptiles.com/shop/fish-aquatics-supplies/7CBAK5IHRNNE4GUD2RNM63PK',
    fishSaleCategoryUrl: 'https://store.backroadreptiles.com/shop/fish-4-sale/7JRZEOXQYCJTIHINVZCXEIBA',
  },

  policies: {
    shipping: 'No shipping offered at this time. In-store pickup and local visit only to safeguard animal welfare.',
    returns: 'All sales final due to the nature of live animals and perishable feeders. No returns accepted.',
    financing: 'Build Your Dream Reptile Setup — Without the Upfront Sting. Split payments into 4 interest-free installments with AfterPay.',
    welfare: 'We prioritize health, genetics, proper quarantine, and keeper education before every animal goes home.',
  }
};

export const FEATURED_CATEGORIES = [
  {
    id: 'feeders-insects',
    title: 'Live Feeder Insects & Worms',
    subtitle: 'Weekly fresh shipments',
    description: 'Crickets, Dubia roaches, mealworms, waxworms, and nightcrawlers gut-loaded and ready.',
    badge: 'Weekly Fresh Stock',
    icon: 'Bug',
    image: '/assets/catalog/MSMUPZAOM4ZVG63FOCILAQIJ.webp',
    squareUrl: STORE_INFO.square.insectsCategoryUrl,
  },
  {
    id: 'reptiles',
    title: 'Reptiles & Amphibians',
    subtitle: 'Healthy captive-bred species',
    description: 'Geckos, bearded dragons, iguanas, axolotls, ball pythons, and colubrids with full health history.',
    badge: 'Hand-Raised Keepers',
    icon: 'Sparkles',
    image: '/assets/catalog/2MCOKHE5NPKOSNFSUC4ILLMP.webp',
    squareUrl: STORE_INFO.square.storeUrl,
  },
  {
    id: 'feeders-rodents',
    title: 'Live & Frozen Feeder Rodents',
    subtitle: 'Mice & rats in all sizes',
    description: 'High-quality clean feeders from pinkies to jumbos for snakes, monitors, and raptor keepers.',
    badge: 'Clean Feeders',
    icon: 'Rat',
    image: '/assets/catalog/H6IBZLI3QQOTCOTXM3AJMOGQ.webp',
    squareUrl: STORE_INFO.square.rodentsCategoryUrl,
  },
  {
    id: 'supplies',
    title: 'Habitats, Heating & Supplies',
    subtitle: 'Complete bioactive & enclosure gear',
    description: 'Deep dome lighting, UVB fixtures, thermostats, bioactive substrates, hides, and custom terrarium builds.',
    badge: 'Expert Setup Help',
    icon: 'Home',
    image: '/assets/catalog/AS3BFKB7CRAK44U5AGBYPZTH.webp',
    squareUrl: STORE_INFO.square.storeUrl,
  },
  {
    id: 'aquatics',
    title: 'Aquatics & Specialty Fish',
    subtitle: 'Freshwater fish & water care',
    description: 'Healthy community fish, aquatic plants, water conditioners, and tank setup essentials.',
    badge: 'In-Store Tanks',
    icon: 'Fish',
    image: '/assets/catalog/CKBVTRMPO3WQIR3YWINLG7EK.webp',
    squareUrl: STORE_INFO.square.aquaticsCategoryUrl,
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'axolotl-spec',
    name: 'Captive-Bred Axolotls (Assorted Morphs)',
    category: 'reptiles',
    categoryLabel: 'Amphibians',
    price: '$34.99',
    priceNum: 34.99,
    description: 'Healthy, hand-raised captive bred axolotls. Leucistic, Wild Type, and Copper morphs available. Fully acclimated to cold freshwater.',
    image: '/assets/catalog/2MCOKHE5NPKOSNFSUC4ILLMP.webp',
    badge: 'Customer Favorite',
    inStock: true,
    squareUrl: STORE_INFO.square.storeUrl,
    features: ['Captive bred in Ohio', 'Coldwater freshwater species', 'Full care sheet included', 'In-store pickup only']
  },
  {
    id: 'blue-iguana-spec',
    name: 'High-End Blue Iguana (Captive Bred)',
    category: 'reptiles',
    categoryLabel: 'Lizards',
    price: '$129.99',
    priceNum: 129.99,
    description: 'Stunning bright blue coloration with calm temperament. Established, eating well on fresh greens and calcium-dusted insects.',
    image: '/assets/catalog/AS3BFKB7CRAK44U5AGBYPZTH.webp',
    badge: 'Rare Morph',
    inStock: true,
    squareUrl: STORE_INFO.square.storeUrl,
    features: ['Vibrant turquoise-blue pigmentation', 'Herbivorous/Omnivorous', 'Requires high UVB & heat', 'AfterPay eligible']
  },
  {
    id: 'nightcrawlers-spec',
    name: 'Premium Canadian Nightcrawlers',
    category: 'feeders-insects',
    categoryLabel: 'Live Feeder Worms',
    price: '$4.00 – $8.99',
    priceNum: 4.00,
    description: 'Fresh, lively nightcrawlers kept cold and healthy. The #1 staple food for axolotls, box turtles, large geckos, and amphibians.',
    image: '/assets/catalog/MSMUPZAOM4ZVG63FOCILAQIJ.webp',
    badge: 'Fresh Restock',
    inStock: true,
    squareUrl: STORE_INFO.square.insectsCategoryUrl,
    features: ['Packed cold in fresh peat', 'High moisture & protein', 'Count options: 12ct / 24ct / 50ct', 'Weekly fresh shipment']
  },
  {
    id: 'dubia-roaches',
    name: 'Gut-Loaded Dubia Roaches',
    category: 'feeders-insects',
    categoryLabel: 'Feeder Insects',
    price: '$6.99 – $18.99',
    priceNum: 6.99,
    description: 'High meat-to-shell ratio feeder roaches. Fed organic greens and bee pollen before sale. Does not climb glass or fly.',
    image: '/assets/catalog/WIZOLPNQWIUWTRNKKPT4EGKQ.webp',
    badge: 'Best Nutrition',
    inStock: true,
    squareUrl: STORE_INFO.square.insectsCategoryUrl,
    features: ['High protein & calcium ratio', 'Sizes: Nymph, Med, Sub-Adult, Adult', 'Ideal for Bearded Dragons & Chameleons']
  },
  {
    id: 'feeder-rodents-mice',
    name: 'Frozen & Live Feeder Mice (All Sizes)',
    category: 'feeders-rodents',
    categoryLabel: 'Feeder Rodents',
    price: '$2.00 – $5.50',
    priceNum: 2.00,
    description: 'Clean, healthy feeder mice. Available live or flash-frozen. Pinkies, Fuzzies, Hoppers, Weanlings, and Adults available weekly.',
    image: '/assets/catalog/H6IBZLI3QQOTCOTXM3AJMOGQ.webp',
    badge: 'Weekly Supply',
    inStock: true,
    squareUrl: STORE_INFO.square.rodentsCategoryUrl,
    features: ['Clean pathogen-screened stock', 'Individually vacuum packed (frozen)', 'Bulk discount packs in-store']
  },
  {
    id: 'feeder-rodents-rats',
    name: 'Frozen & Live Feeder Rats',
    category: 'feeders-rodents',
    categoryLabel: 'Feeder Rodents',
    price: '$3.50 – $9.50',
    priceNum: 3.50,
    description: 'Top-tier nutrition for growing ball pythons, boas, monitors, and birds of prey. Pups, Weanlings, Smalls, Mediums, Large, and Jumbos.',
    image: '/assets/catalog/QTU7YOQ2HC4I76Z4Q6DB4LT7.webp',
    badge: 'High Demand',
    inStock: true,
    squareUrl: STORE_INFO.square.rodentsCategoryUrl,
    features: ['Weights accurately graded', 'Ideal for ball pythons & boas', 'Live & frozen available']
  },
  {
    id: 'bioactive-starter-kit',
    name: 'Complete Bioactive Habitat Setup Kit',
    category: 'supplies',
    categoryLabel: 'Habitats & Care',
    price: '$49.99',
    priceNum: 49.99,
    originalPrice: '$59.99',
    description: 'Everything you need to turn your terrarium into a self-cleaning natural ecosystem: bioactive drainage layer, ABG substrate blend, leaf litter, and seeded springtails.',
    image: '/assets/catalog/ATF65BA4PP7CYQOZ2K2BC2PX.webp',
    badge: 'Top Seller',
    inStock: true,
    squareUrl: STORE_INFO.square.storeUrl,
    features: ['Includes live Springtails & Isopods', 'Organic bioactive soil blend', 'Prevents mold and odor', 'Setup guidance provided']
  },
  {
    id: 'reptile-lighting-combo',
    name: 'Deep Dome Dual Lamp Fixture & UVB',
    category: 'supplies',
    categoryLabel: 'Lighting & Heat',
    price: '$44.99',
    priceNum: 44.99,
    description: 'Dual ceramic sockets rated up to 100W each. Independent on/off switches with polished aluminum reflective dome for maximum heat and UVB penetration.',
    image: '/assets/catalog/BM4ONI22ER7RTMJIAB7DVCHT.webp',
    badge: 'Essential Gear',
    inStock: true,
    squareUrl: STORE_INFO.square.storeUrl,
    features: ['Dual ceramic sockets', 'Deep dome prevents bulb protrusion', 'Essential for diurnal lizards']
  },
  {
    id: 'aquatic-community-fish',
    name: 'Freshwater Tropical Fish & Aquatic Plants',
    category: 'aquatics',
    categoryLabel: 'Aquatics',
    price: '$3.99 – $19.99',
    priceNum: 3.99,
    description: 'Clean, quarantined tropical freshwater fish and live aquatic plants. Angelfish, tetras, livebearers, corydoras, and specialty snails.',
    image: '/assets/catalog/AYACCL2WFBL4Z3SCUZFFO7F5.webp',
    badge: 'Quarantined',
    inStock: true,
    squareUrl: STORE_INFO.square.fishSaleCategoryUrl,
    features: ['Quarantined for health', 'Acclimated to local water parameters', 'Live plant bunches available']
  }
];

export const SPECIES_CARE_DATABASE: SpeciesCareInfo[] = [
  {
    id: 'bearded-dragon',
    name: 'Bearded Dragon',
    scientificName: 'Pogona vitticeps',
    category: 'Lizard',
    experienceLevel: 'Beginner',
    lifespan: '10 – 15 years',
    adultSize: '18 – 24 inches',
    enclosureSize: '4x2x2 ft (120 Gallon minimum for adults)',
    tempBasking: '100°F – 108°F',
    tempAmbient: '75°F – 85°F (cool side)',
    humidity: '30% – 40% (arid / low humidity)',
    diet: 'Omnivore: 80% greens / 20% live insects (adults); 70% insects (juveniles)',
    feedingSchedule: 'Daily greens, insects 2-3x weekly for adults',
    uvbRequired: true,
    uvbDetails: 'T5 HO 10.0 or 12% linear UVB tube spanning 50-70% of enclosure',
    substrate: 'Tile, non-adhesive shelf liner, or 50/50 organic topsoil & playsand mix',
    overview: 'Inquisitive, social, and calm diurnal lizards known for expressive body language and easy handling.',
    tips: [
      'Always dust insects with Calcium + D3 and multivitamin on alternating days.',
      'Do NOT use coil UVB bulbs — linear T5 tubes are mandatory for bone health.',
      'Provide a solid textured basking rock that absorbs belly heat.'
    ],
    image: '/assets/catalog/AS3BFKB7CRAK44U5AGBYPZTH.webp'
  },
  {
    id: 'crested-gecko',
    name: 'Crested Gecko',
    scientificName: 'Correlophus ciliatus',
    category: 'Gecko',
    experienceLevel: 'Beginner',
    lifespan: '15 – 20 years',
    adultSize: '7 – 9 inches',
    enclosureSize: '18x18x36 inches (Vertical arborial tank)',
    tempBasking: '75°F – 78°F (Avoid heat over 82°F!)',
    tempAmbient: '68°F – 75°F (Standard room temp)',
    humidity: '60% – 80% (Daily misting cycle)',
    diet: 'Frugivore / Insectivore: Complete powdered crested gecko diet (Pangea/Repashy) + occasional live insects',
    feedingSchedule: 'Fresh powder diet every 2-3 days; live dusted crickets once weekly',
    uvbRequired: false,
    uvbDetails: 'Low level UVB (5.0 or ShadeDweller) highly beneficial for activity and coloration',
    substrate: 'Bioactive ABG mix, coconut fiber, or paper towels',
    overview: 'No heat lamps required in temperate homes! Docile, arboreal geckos with velvet eyelashes that thrive in lush vertical planted enclosures.',
    tips: [
      'They are prone to overheating — temperatures over 83°F can be fatal.',
      'Allow humidity to drop to 50% during the day before evening heavy misting.',
      'Include plenty of horizontal cork bark and broad-leaf foliage for climbing.'
    ],
    image: '/assets/catalog/2MCOKHE5NPKOSNFSUC4ILLMP.webp'
  },
  {
    id: 'leopard-gecko',
    name: 'Leopard Gecko',
    scientificName: 'Eublepharis macularius',
    category: 'Gecko',
    experienceLevel: 'Beginner',
    lifespan: '15 – 20+ years',
    adultSize: '8 – 10 inches',
    enclosureSize: '36x18x18 inches (40 Gallon breeder minimum)',
    tempBasking: '90°F – 93°F (Basking surface)',
    tempAmbient: '72°F – 78°F (Cool side)',
    humidity: '30% – 40% (Provide a dedicated humid hide with damp sphagnum moss)',
    diet: 'Strict Insectivore: Live crickets, dubia roaches, mealworms, hornworms',
    feedingSchedule: 'Adults: 5-8 insects every 3-4 days; Juveniles: daily',
    uvbRequired: false,
    uvbDetails: 'ShadeDweller 7% UVB promotes natural circadian rhythms and D3 synthesis',
    substrate: 'Slate tile, paper towels, or 70/30 organic topsoil and washed play sand',
    overview: 'Terrestrial nocturnal geckos with smiling faces, calm temperaments, and beautiful morph varieties.',
    tips: [
      'A dedicated enclosed Humid Hide is essential for clean toe sheds.',
      'Keep a shallow dish of pure Calcium without D3 in the tank at all times.',
      'Never feed wild insects or use pure sand substrates for babies.'
    ],
    image: '/assets/catalog/MSMUPZAOM4ZVG63FOCILAQIJ.webp'
  },
  {
    id: 'ball-python',
    name: 'Ball Python',
    scientificName: 'Python regius',
    category: 'Snake',
    experienceLevel: 'Beginner to Intermediate',
    lifespan: '20 – 30+ years',
    adultSize: '3.5 – 5 feet',
    enclosureSize: '4x2x2 ft (120 Gallon solid top/PVC enclosure)',
    tempBasking: '88°F – 92°F (Warm side)',
    tempAmbient: '76°F – 80°F (Cool side)',
    humidity: '60% – 75% (Crucial for clean shed and respiratory health)',
    diet: 'Carnivore: Appropriately sized rats (Frozen/Thawed preferred)',
    feedingSchedule: 'Juveniles: Every 7 days; Adults: Every 14-21 days',
    uvbRequired: false,
    uvbDetails: 'Low level Ferguson Zone 1 lighting beneficial',
    substrate: 'Cypress mulch, coconut husk (Coco Blox), or bioactive blend',
    overview: 'Docile, heavy-bodied African constrictors celebrated for relaxed handling and stunning genetic color morphs.',
    tips: [
      'Use deep heat projectors (DHP) or halogen floods regulated by digital pulse thermostats.',
      'Two identical secure hides (one hot side, one cool side) eliminate stress.',
      'Never use screen-top glass tanks without covering mesh to retain humidity.'
    ],
    image: '/assets/catalog/H6IBZLI3QQOTCOTXM3AJMOGQ.webp'
  },
  {
    id: 'axolotl',
    name: 'Mexican Axolotl',
    scientificName: 'Ambystoma mexicanum',
    category: 'Amphibian',
    experienceLevel: 'Intermediate',
    lifespan: '10 – 15 years',
    adultSize: '9 – 12 inches',
    enclosureSize: '20 Gallon Long (Single) / 40 Gallon Breeder (Pair)',
    tempBasking: 'N/A — Coldwater Only: 60°F – 68°F (Never above 72°F!)',
    tempAmbient: 'Cold water aquarium (Chiller or cooling fans recommended)',
    humidity: '100% (Fully Aquatic)',
    diet: 'Carnivore: Canadian Nightcrawlers, blackworms, soft salmon pellets',
    feedingSchedule: 'Adults: 1-2 earthworms every 2-3 days; Juveniles: daily',
    uvbRequired: false,
    uvbDetails: 'They have no eyelids; prefer dim, ambient room lighting and caves',
    substrate: 'Bare bottom, large river stones (>2x head size), or ultra-fine sand (>1mm)',
    overview: 'Fascinating neotenic salamanders featuring feathery external gills and permanent aquatic larval forms.',
    tips: [
      'Water temperature is critical: prolonged temps above 72°F cause deadly fungal infections.',
      'Canister or low-flow sponge filters are required because strong currents cause severe stress.',
      'Earthworms are the gold standard staple nutrition — bloodworms are only treats.'
    ],
    image: '/assets/catalog/2MCOKHE5NPKOSNFSUC4ILLMP.webp'
  },
  {
    id: 'chameleon',
    name: 'Veiled / Panther Chameleon',
    scientificName: 'Chamaeleo calyptratus',
    category: 'Lizard',
    experienceLevel: 'Intermediate to Advanced',
    lifespan: '5 – 8 years',
    adultSize: '14 – 20 inches',
    enclosureSize: '24x24x48 inches (Screen cage or hybrid acrylic)',
    tempBasking: '82°F – 86°F',
    tempAmbient: '72°F – 76°F',
    humidity: '50% – 80% (High morning/night humidity spike, dry during day)',
    diet: 'Insectivore: Crickets, Dubia roaches, silkworms, hornworms, black soldier fly larvae',
    feedingSchedule: 'Adults: 4-6 gut-loaded insects every other day',
    uvbRequired: true,
    uvbDetails: 'T5 HO 6% or 10.0 linear UVB fixture placed 6-10" above highest perch',
    substrate: 'Bare bottom for easy sanitation; live potted non-toxic plants (Pothos, Hibiscus, Ficus)',
    overview: 'Spectacular arboreal reptiles with independent 360° eyes, ballistic tongues, and zygodactylous gripping feet.',
    tips: [
      'They do not drink from standing water bowls; automated misting or dripping systems onto live leaves are required.',
      'High ventilation with screen walls is mandatory to prevent upper respiratory infections.',
      'Live non-toxic plants help maintain microclimates and provide drinking surfaces.'
    ],
    image: '/assets/catalog/ATF65BA4PP7CYQOZ2K2BC2PX.webp'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Marcus Vance',
    role: 'Local Reptile Keeper (Fostoria, OH)',
    content: 'Brian and Angel are absolute lifesavers for reptile owners in Seneca County. Their feeders are always fresh, healthy, and gut-loaded, unlike big box stores. You can ask them anything about husbandry and they will guide you step by step without pushing unnecessary gear.',
    rating: 5,
    date: 'August 2026',
    highlight: 'Always fresh, healthy, and gut-loaded feeders'
  },
  {
    id: 'rev-2',
    author: 'Sarah Lin',
    role: 'Axolotl Keeper (Findlay, OH)',
    content: 'Bought our first leucistic axolotl from Back Road Reptiles. The care sheet and setup guidance they provided made our transition smooth. The nightcrawlers we get weekly are always fresh and cold. True local experts who genuinely care about animal welfare.',
    rating: 5,
    date: 'July 2026',
    highlight: 'True local experts who genuinely care about animal welfare'
  },
  {
    id: 'rev-3',
    author: 'Dave Kozlowski',
    role: 'Ball Python Hobbyist (Tiffin, OH)',
    content: 'Best place around for frozen and live rodents. Consistent sizes, clean quality, and fair pricing. Plus their AfterPay option made upgrading my 4x2x2 enclosure painless. 10/10 recommend!',
    rating: 5,
    date: 'August 2026',
    highlight: 'Best place around for rodents & clean setups'
  },
  {
    id: 'rev-4',
    author: 'Jessica Miller',
    role: 'First-time Gecko Parent',
    content: 'I brought my daughter in knowing nothing about leopard geckos. Angel spent 45 minutes walking us through heating, humidity, and calcium schedules. Our gecko is thriving. We wouldn’t go anywhere else!',
    rating: 5,
    date: 'June 2026',
    highlight: 'Spent 45 minutes walking us through setup & care'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'store',
    question: 'Where is your storefront located and what are your public hours?',
    answer: 'We are located at 610 Plaza Drive, Fostoria, Ohio 44830. Our storefront is open to the public Tuesday through Thursday from 4:00 PM to 8:00 PM. Private appointments, custom setup deliveries, and feeder pickups on other days can be arranged by calling (419) 701-7101.'
  },
  {
    category: 'feeders',
    question: 'When do you receive fresh feeder shipments?',
    answer: 'We receive weekly shipments of live crickets, dubia roaches, superworms, mealworms, waxworms, and Canadian nightcrawlers. All live feeders are properly hydrated and gut-loaded in-store with nutritious greens and vitamins.'
  },
  {
    category: 'feeders',
    question: 'Do you carry both live and frozen feeder rodents?',
    answer: 'Yes! We stock clean, healthy feeder mice and feeder rats from pinkies up to jumbo sizes in both live and vacuum-sealed frozen packs.'
  },
  {
    category: 'animals',
    question: 'Do you ship live animals?',
    answer: 'No, we do not ship live animals at this time. To ensure the highest welfare and stress-free transition, all animals must be picked up in person at our Fostoria store where we can verify enclosure parameters with you.'
  },
  {
    category: 'payments',
    question: 'Can I split payments for large terrarium setups or high-end animals?',
    answer: 'Yes! We offer 4 interest-free split payments through AfterPay online and in-store, allowing you to build your dream bioactive setup without upfront financial strain.'
  },
  {
    category: 'animals',
    question: 'What is your return policy?',
    answer: 'All sales are final due to the nature of live animals and perishable feeders. We provide complete husbandry reviews and health checks prior to handing over any animal to ensure a thriving environment.'
  }
];
