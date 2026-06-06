/**
 * siteContent.js
 * ---------------------------------------------------------------------------
 * Single source of truth for ALL site copy, pricing, fleet, packages, etc.
 * Edit business details, prices, and content here — components read from this.
 *
 * NOTE ON IMAGES:
 * The image URLs below point to free Unsplash photos so the site looks complete
 * out of the box. For production, replace them with your own licensed photos
 * (drop files into src/assets/images and import them, or use your CDN URLs).
 * ---------------------------------------------------------------------------
 */

// ── Business / brand -------------------------------------------------------
export const business = {
  name: 'Luxora Holidays',
  tagline: 'Luxury Travel Experiences & Premium Cab Rentals',
  phoneDisplay: '+91 96052 27745',
  phone: '+919605227745',
  phoneRaw: '9605227745',
  email: 'infoluxoraholidays@gmail.com',
  whatsapp: '919605227745', // wa.me format, no '+'
  address: {
    line1: 'Cochin Airport',
    line2: 'Nedumbassery',
    region: 'Kerala, India',
  },
  hours: 'Open 24 / 7',
  mapsQuery: 'Cochin International Airport, Nedumbassery, Kerala',
};

// ── Navigation -------------------------------------------------------------
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Packages', href: '#packages' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

// ── Hero -------------------------------------------------------------------
export const hero = {
  eyebrow: 'Cochin Airport · Kerala',
  titleLine1: 'Explore Kerala With',
  titleLine2: 'Luxora Holidays',
  subtitle:
    'Premium Cab Rentals • Kerala Tour Packages • Airport Transfers • Family Trips',
  background:
    'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2400&auto=format&fit=crop',
  trustBadges: [
    'Premium Fleet',
    'Airport Pickup & Drop',
    'Kerala Tour Experts',
    '24/7 Support',
  ],
  stats: [
    { value: 12, suffix: '+', label: 'Years on the road' },
    { value: 25000, suffix: '+', label: 'Happy travellers' },
    { value: 40, suffix: '+', label: 'Premium vehicles' },
    { value: 4.9, suffix: '★', label: 'Average rating', decimals: 1 },
  ],
};

// ── Fleet (premium cars with tiered pricing) -------------------------------
export const fleet = [
  {
    id: 'innova',
    name: 'Innova Package',
    subtitle: 'Comfortable 7 Seater',
    seats: '7 Seater',
    badge: 'Most Popular',
    image:
      'https://cdn.carhp.in/toyota/toyota_innova_hycross_super_white.jpg?format=webp&width=800&q=75',
    tiers: [
      { label: '4 Hours / 40 Km', price: 1600 },
      { label: '8 Hours / 80 Km', price: 3500 },
      { label: '12 Hours / 120 Km', price: 4800 },
    ],
    extraHour: 400,
    outstation: {
      note: 'Outstation (150 Km)',
      options: [
        { label: 'Innova', price: 4000 },
        { label: 'Crysta', price: 4200 },
        { label: 'Hycross', price: 4500 },
      ],
    },
  },
  {
    id: 'ertiga',
    name: 'SUV 6+1 Ertiga',
    subtitle: 'Smooth rides ideal for business and family trips.',
    seats: '6 + 1 Seater',
    badge: 'Best for Family',
    image:
      'https://images.91wheels.com/assets/c_images/gallery/maruti/ertiga-2018-2022/maruti-ertiga-2018-2022-0-1766751514.png',
    tiers: [
      { label: '4 Hours / 40 Km', price: 1400 },
      { label: '8 Hours / 80 Km', price: 2800 },
      { label: '12 Hours / 120 Km', price: 4200 },
    ],
    extraHour: 350,
    outstation: {
      note: 'Outstation (150 Km)',
      options: [{ label: 'Ertiga', price: 3500 }],
    },
  },
  {
    id: 'sedan',
    name: 'Sedan Package',
    subtitle: 'Budget Friendly',
    seats: '4 Seater',
    badge: 'Best Value',
    image:
      'https://auto.hindustantimes.com/cms-images/tata_tigor/images/exterior_tata-tigor_front-right-side_614x420.jpg?imwidth=420',
    tiers: [
      { label: '4 Hours / 40 Km', price: 1200 },
      { label: '8 Hours / 80 Km', price: 2400 },
      { label: '12 Hours / 120 Km', price: 3600 },
    ],
    extraHour: 300,
    outstation: {
      note: 'Outstation (150 Km)',
      options: [{ label: 'Sedan', price: 3000 }],
    },
  },
];

// ── Services ---------------------------------------------------------------
export const services = [
  {
    id: 'airport',
    icon: 'Plane',
    title: 'Airport Pickup & Drop',
    description:
      'On-time Cochin Airport transfers with flight tracking and a warm meet-and-greet at arrivals.',
  },
  {
    id: 'sightseeing',
    icon: 'Camera',
    title: 'Sightseeing Packages',
    description:
      'Curated day tours and multi-day itineraries across Kerala’s most beautiful destinations.',
  },
  {
    id: 'tourist-vehicles',
    icon: 'Bus',
    title: 'Tourist Vehicles',
    description: 'Urbania Traveller line-up for comfortable group sightseeing.',
    tags: ['12 Seater', '17 Seater', '19 Seater', '26 Seater'],
  },
  {
    id: 'bus-rental',
    icon: 'BusFront',
    title: 'Bus Rental',
    description: 'Spacious coaches for large groups, weddings and corporate offsites.',
    tags: ['36 Seater', '49 Seater'],
  },
  {
    id: 'cab-rental',
    icon: 'Car',
    title: 'Cab Rental',
    description: 'Hourly, full-day and outstation cabs with professional chauffeurs.',
  },
  {
    id: 'family',
    icon: 'Users',
    title: 'Family Trips',
    description: 'Safe, comfortable family journeys with child-friendly vehicles.',
  },
  {
    id: 'corporate',
    icon: 'Briefcase',
    title: 'Corporate Travel',
    description: 'Reliable executive transport with billing and priority support.',
  },
  {
    id: 'group',
    icon: 'UsersRound',
    title: 'Group Tours',
    description: 'End-to-end planning and transport for friends, clubs and pilgrims.',
  },
];

// ── Kerala tour destinations -----------------------------------------------
export const destinations = [
  {
    name: 'Munnar',
    blurb: 'Rolling tea gardens, misty peaks and cool mountain air.',
    image:
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1600&auto=format&fit=crop',
    tag: 'Hill Station',
  },
  {
    name: 'Alleppey',
    blurb: 'Iconic backwaters and serene overnight houseboat cruises.',
    image:
      'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=1600&auto=format&fit=crop',
    tag: 'Backwaters',
  },
  {
    name: 'Thekkady',
    blurb: 'Periyar wildlife, spice plantations and bamboo rafting.',
    image:
      'https://images.unsplash.com/photo-1591805741030-7a8b3c8c8b4a?q=80&w=1600&auto=format&fit=crop',
    tag: 'Wildlife',
  },
  {
    name: 'Kochi',
    blurb: 'Colonial charm, Chinese fishing nets and Fort Kochi art.',
    image:
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1600&auto=format&fit=crop',
    tag: 'Heritage',
  },
  {
    name: 'Athirapally',
    blurb: 'Kerala’s grandest waterfalls set in lush rainforest.',
    image:
      'https://images.unsplash.com/photo-1623431924446-7a2bb1f6a86b?q=80&w=1600&auto=format&fit=crop',
    tag: 'Waterfalls',
  },
  {
    name: 'Vagamon',
    blurb: 'Emerald meadows, pine forests and paragliding skies.',
    image:
      'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1600&auto=format&fit=crop',
    tag: 'Meadows',
  },
  {
    name: 'Wayanad',
    blurb: 'Ancient caves, waterfalls and untouched green wilderness.',
    image:
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1600&auto=format&fit=crop',
    tag: 'Nature',
  },
  {
    name: 'Kumarakom',
    blurb: 'Vembanad lake, bird sanctuary and luxury lakeside stays.',
    image:
      'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?q=80&w=1600&auto=format&fit=crop',
    tag: 'Lakeside',
  },
  {
    name: 'Varkala',
    blurb: 'Dramatic red cliffs above a golden Arabian Sea beach.',
    image:
      'https://images.unsplash.com/photo-1621622471896-83b3a3f1a0a1?q=80&w=1600&auto=format&fit=crop',
    tag: 'Beach',
  },
  {
    name: 'Kovalam',
    blurb: 'Crescent beaches, lighthouse views and seaside resorts.',
    image:
      'https://images.unsplash.com/photo-1517824806704-9040b037703b?q=80&w=1600&auto=format&fit=crop',
    tag: 'Beach',
  },
];

// ── Why choose us ----------------------------------------------------------
export const whyChooseUs = [
  { icon: 'Crown', title: 'Premium Fleet', text: 'Hand-picked, well-maintained vehicles cleaned before every trip.' },
  { icon: 'Sparkles', title: 'Luxury Travel', text: 'Refined comfort from airport pickup to the last destination.' },
  { icon: 'BadgeCheck', title: 'Professional Drivers', text: 'Courteous, verified chauffeurs who know Kerala inside out.' },
  { icon: 'Plane', title: 'Airport Transfers', text: 'Punctual Cochin Airport pickup & drop with flight tracking.' },
  { icon: 'IndianRupee', title: 'Affordable Pricing', text: 'Transparent, all-inclusive fares with no hidden charges.' },
  { icon: 'Heart', title: 'Family Friendly', text: 'Spacious, safe rides perfect for travelling with family.' },
  { icon: 'Briefcase', title: 'Corporate Travel', text: 'Dependable executive transport with priority support.' },
  { icon: 'MapPin', title: 'Kerala Experts', text: 'Local specialists crafting the perfect Kerala itinerary.' },
];

// ── Booking process --------------------------------------------------------
export const bookingProcess = [
  { step: '01', icon: 'CarFront', title: 'Choose Vehicle', text: 'Pick the cab or tour package that fits your journey.' },
  { step: '02', icon: 'PhoneCall', title: 'Contact Us', text: 'Reach out on call or WhatsApp for instant availability.' },
  { step: '03', icon: 'CalendarCheck', title: 'Confirm Booking', text: 'Lock in your date, route and fare — quick and clear.' },
  { step: '04', icon: 'PartyPopper', title: 'Enjoy Journey', text: 'Sit back, relax and explore Kerala in comfort.' },
];

// ── Testimonials -----------------------------------------------------------
export const testimonials = [
  {
    name: 'Arun Menon',
    role: 'Family trip · Munnar',
    rating: 5,
    quote:
      'Spotless Innova and a driver who knew every viewpoint in Munnar. The airport pickup was right on time. Easily the smoothest Kerala trip we have had.',
  },
  {
    name: 'Priya Nair',
    role: 'Alleppey houseboat tour',
    rating: 5,
    quote:
      'Booking over WhatsApp took two minutes and the pricing was exactly as quoted. Felt premium without being expensive. Highly recommend Luxora.',
  },
  {
    name: 'Rahul Sharma',
    role: 'Corporate travel · Kochi',
    rating: 5,
    quote:
      'We use Luxora for all our client airport transfers now. Always punctual, always professional. The Crysta is immaculate.',
  },
  {
    name: 'Sneha Thomas',
    role: 'Group tour · Thekkady',
    rating: 5,
    quote:
      'Travelled as a group of 16 in the Urbania — super comfortable and the planning was handled end-to-end. Will book again next season.',
  },
  {
    name: 'David Joseph',
    role: 'Airport transfer · Cochin',
    rating: 5,
    quote:
      'Landed at midnight and the driver was waiting with a name board. Stress-free, courteous and a beautifully kept car. Five stars.',
  },
];

// ── FAQ --------------------------------------------------------------------
export const faqs = [
  {
    q: 'Do you provide Cochin Airport pickup and drop?',
    a: 'Yes. We specialise in Cochin International Airport (Nedumbassery) transfers with flight tracking, 24/7 availability and a meet-and-greet at arrivals.',
  },
  {
    q: 'Which vehicles are available for rent?',
    a: 'Our fleet includes Sedans, Ertiga (6+1), Innova / Crysta / Hycross (7-seater), Urbania Travellers (12–26 seater) and buses (36 & 49 seater) for larger groups.',
  },
  {
    q: 'How is the fare calculated?',
    a: 'We offer transparent hourly packages (4/8/12 hours) with a fixed kilometre allowance, plus per-hour and per-km extras. Outstation trips are charged at a flat 150 km base. No hidden charges.',
  },
  {
    q: 'How do I book a cab or tour package?',
    a: 'Choose your vehicle or package, then call or WhatsApp us. We confirm availability, route and fare instantly. You can also use the booking form on this page.',
  },
  {
    q: 'Are your drivers professional and local?',
    a: 'Absolutely. All our chauffeurs are verified, courteous and know Kerala’s routes, viewpoints and timings intimately.',
  },
  {
    q: 'Can you plan a full multi-day Kerala itinerary?',
    a: 'Yes — from Munnar and Alleppey to Wayanad and Kovalam, we craft complete itineraries with transport, timing and sightseeing handled end-to-end.',
  },
];

// ── Footer -----------------------------------------------------------------
export const footer = {
  about:
    'Luxora Holidays delivers luxury travel experiences and premium cab rentals across Kerala — from Cochin Airport transfers to curated tour packages.',
  quickLinks: navLinks,
  popularServices: [
    'Cochin Airport Taxi',
    'Innova Rental Kerala',
    'Kerala Tour Packages',
    'Family Trips',
    'Corporate Travel',
  ],
};
