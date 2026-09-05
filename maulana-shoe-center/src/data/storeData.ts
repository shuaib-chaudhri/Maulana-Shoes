export interface FootwearStyle {
  id: string;
  name: string;
  type: string;
  category: string;
  image: string;
  position: string;
  tag: string;
  styleNote: string;
  description: string;
  highlights: string[];
  idealFor: string;
}

export interface Category {
  id: string;
  label: string;
  detail: string;
  image: string;
  position: string;
  styleCount?: string;
}

export const STORE = {
  name: 'Maulana Shoe Center',
  location: 'Begumpeth, Solapur, Maharashtra 413001',
  landmark: 'Near Begumpeth Main Market, Solapur',
  description:
    'Discover stylish, comfortable and quality footwear at Maulana Shoe Center, Begumpeth, Solapur.',
  tagline: 'Step Into Style. Walk With Confidence.',
  referenceNotice:
    'Styles shown on this website are representative references. We carry a wide, ever-updating variety of designs, colors, and all standard sizes at our Begumpeth showroom.',
  phone: '+91 98903 24362',
  phoneLink: 'tel:+919890324362',
  whatsapp: '+91 75888 88578',
  whatsappRaw: '917588888578',
  whatsappLink:
    'https://wa.me/917588888578?text=Hello%20Maulana%20Shoe%20Center%2C%20I%20would%20like%20to%20ask%20about%20your%20footwear%20collection.',
  address: 'Begumpeth, Solapur, Maharashtra 413001',
  establishedYear: 1992,
  yearsOfTrust: new Date().getFullYear() - 1992,
  directionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Maulana+Shoe+Center+Begumpeth+Solapur+Maharashtra+413001',
  hours: 'Monday – Sunday: 10:00 AM – 9:30 PM',
  rating: '4.8',
  reviewsCount: '1,200+',
};

export const CATEGORIES: Category[] = [
  { id: 'men', label: 'Men', image: './images/hero-footwear.jpg', position: 'center 42%', detail: 'Refined everyday & casual pairs', styleCount: 'Wide variety' },
  { id: 'sports', label: 'Sports & Walkers', image: './images/hero-footwear.jpg', position: '70% 40%', detail: 'Cushioned active & daily walking shoes', styleCount: 'Multiple styles' },
  { id: 'casual', label: 'Casuals & Sneakers', image: './images/collection-editorial.jpg', position: '34% 45%', detail: 'Everyday lifestyle & comfort footwear', styleCount: 'Multiple designs' },
  { id: 'formal', label: 'Formals & Loafers', image: './images/hero-footwear.jpg', position: 'center 68%', detail: 'Executive oxfords, derbies & slip-ons', styleCount: 'Classic range' },
  { id: 'sandals', label: 'Leather Sandals', image: './images/leather-sandals.jpg', position: 'center 50%', detail: 'Handcrafted genuine leather straps & comfort soles', styleCount: 'Artisan range' },
  { id: 'slippers', label: 'Comfort Slippers', image: './images/premium-slippers.jpg', position: 'center 50%', detail: 'Arch-support slippers & casual house-wear', styleCount: 'Cushioned range' },
  { id: 'kolhapuri', label: 'Kolhapuri Chappals', image: './images/kolhapuri-chappals.jpg', position: 'center 50%', detail: 'Authentic Maharashtrian braided leather craft', styleCount: 'Heritage craft' },
  { id: 'party-wear', label: 'Party & Celebration', image: './images/lace-up-party-shoes.jpg', position: 'center 50%', detail: 'Patent shine, festive lace-ups & wedding wear', styleCount: 'Occasion edit' },
  { id: 'mojaris', label: 'Ethnic Mojaris', image: './images/mojaris.jpg', position: 'center 50%', detail: 'Embroidered, curved-toe traditional juttis', styleCount: 'Festive edit' },
  { id: 'sport-sandals', label: 'Outdoor Sport Sandals', image: './images/sport-sandals.jpg', position: 'center 50%', detail: 'High-traction, rugged strap footwear for rough terrain', styleCount: 'All-weather' },
];

export const FOOTWEAR_STYLES: FootwearStyle[] = [
  {
    id: '01',
    name: 'Everyday Comfort Runners',
    type: 'Low-profile sneakers & walking pairs',
    category: 'sports',
    image: './images/hero-footwear.jpg',
    position: 'center 48%',
    tag: 'Style Reference',
    styleNote: 'Multiple colors & designs in store',
    description:
      'We stock lightweight, flexible everyday runners with shock-absorbing EVA soles and ventilated mesh uppers. Ideal for Solapur daily commutes, walking routines, and active lifestyles.',
    highlights: [
      'All standard Indian sizes available (UK 6 – 11)',
      'Multiple colorways, sole densities, and brands in stock',
      'Try on different sole cushions in store for exact comfort',
    ],
    idealFor: 'Daily commutes, morning walks & casual weekends',
  },
  {
    id: '02',
    name: 'Cushioned Daily Slippers',
    type: 'Arch-contour & soft footbed slippers',
    category: 'slippers',
    image: './images/premium-slippers.jpg',
    position: 'center 50%',
    tag: 'Style Reference',
    styleNote: 'Wide range of comfort footbeds',
    description:
      'Engineered for long-lasting relief. Our slipper range features soft memory footbeds, wide non-chafing straps, and slip-resistant grip soles suitable for home and casual outdoor steps.',
    highlights: [
      'Anatomic arch-support styles available',
      'Durable rubber outsoles built for Indian flooring & outdoors',
      'Various strap textures and colors to choose from in store',
    ],
    idealFor: 'Home relaxation, casual errands & all-day ease',
  },
  {
    id: '03',
    name: 'Executive Formal Shoes',
    type: 'Classic derbies, oxfords & sleek loafers',
    category: 'formal',
    image: './images/hero-footwear.jpg',
    position: '75% 62%',
    tag: 'Style Reference',
    styleNote: 'Deep shine & matte leather finishes',
    description:
      'A sharp, polished selection of formal footwear for office, legal, banking, and professional wear. Features reinforced heel counters and padded insoles for long standing hours.',
    highlights: [
      'Available in black, dark tan, oxblood & brown tones',
      'Both lace-up and slip-on formal silhouettes in stock',
      'Personal fitting advice to ensure zero heel slippage',
    ],
    idealFor: 'Business meetings, formal events & daily office wear',
  },
  {
    id: '04',
    name: 'Handcrafted Leather Sandals',
    type: 'Open-air leather sandals & comfort floaters',
    category: 'sandals',
    image: './images/leather-sandals.jpg',
    position: 'center 50%',
    tag: 'Style Reference',
    styleNote: 'Supple leather & brass-buckle styles',
    description:
      'Crafted with genuine leather straps and sturdy outsoles. Designed to keep feet cool during Solapur warm days while providing firm arch support and breathable open comfort.',
    highlights: [
      '100% Genuine leather varieties with sturdy welt stitching',
      'Adjustable buckles and velcro options for high or flat arches',
      'Different strap configurations available to try on in store',
    ],
    idealFor: 'Hot weather, daily market trips & evening outings',
  },
  {
    id: '05',
    name: 'Authentic Kolhapuri Chappals',
    type: 'Traditional vegetable-tanned leather chappals',
    category: 'kolhapuri',
    image: './images/kolhapuri-chappals.jpg',
    position: 'center 50%',
    tag: 'Style Reference',
    styleNote: 'Authentic Maharashtrian leathercraft',
    description:
      'Solapur favorite heritage footwear. Hand-braided leather straps, traditional craftsmanship, and rawhide soles that organically mold to the shape of your feet the more you walk.',
    highlights: [
      'Authentic handcrafted pairs from veteran regional artisans',
      'Classic yellow-tan, dark brown, and oiled leather finishes',
      'Available across all standard foot sizes in Begumpeth',
    ],
    idealFor: 'Traditional wear, festivals, weddings & daily cultural pride',
  },
  {
    id: '06',
    name: 'Active Sports Footwear',
    type: 'High-grip training & outdoor sports shoes',
    category: 'sports',
    image: './images/hero-footwear.jpg',
    position: '28% 50%',
    tag: 'Style Reference',
    styleNote: 'High-traction soles & padded collars',
    description:
      'Dynamic athletic footwear featuring reinforced toe bumpers, breathable fabric weaves, and resilient sole grips designed for workouts, sports, and fast-paced walking.',
    highlights: [
      'Shock-dampening heels for road and ground walking',
      'Wide toe-box styles available for broader feet',
      'Various sporty aesthetics and color accents in stock',
    ],
    idealFor: 'Morning exercise, jogging & dynamic sports',
  },
  {
    id: '07',
    name: 'Party & Celebration Shoes',
    type: 'High-gloss patent & designer evening shoes',
    category: 'party-wear',
    image: './images/lace-up-party-shoes.jpg',
    position: 'center 50%',
    tag: 'Style Reference',
    styleNote: 'Evening gloss & festive detailing',
    description:
      'Eye-catching dress shoes designed to elevate festive suits, sherwanis, and occasion wear. Features sleek contours and refined finishes that catch the warm celebration light.',
    highlights: [
      'Patent gloss, textured leather, and velvet finish options',
      'Memory foam footbed for dancing and standing through long events',
      'Multiple wedding and reception styles waiting in showroom',
    ],
    idealFor: 'Weddings, receptions, Eid gatherings & family milestones',
  },
  {
    id: '08',
    name: 'Festive Ethnic Mojaris & Juttis',
    type: 'Handmade embroidered traditional footwear',
    category: 'mojaris',
    image: './images/mojaris.jpg',
    position: 'center 50%',
    tag: 'Style Reference',
    styleNote: 'Curled toe & embroidered designs',
    description:
      'Regal traditional footwear that pairs seamlessly with Kurta-Pajamas, Jodhpuris, and festive attire. Hand-stitched with care and detailed with timeless ethnic motifs.',
    highlights: [
      'Classic curved-toe curl silhouettes and flat-toe Punjabi juttis',
      'Soft inner leather lining designed to prevent shoe bite',
      'Extensive festive varieties stocked during wedding & festival seasons',
    ],
    idealFor: 'Groom & wedding guests, Diwali, Eid & cultural functions',
  },
  {
    id: '09',
    name: 'Rugged Sport Sandals',
    type: 'All-weather strap sandals with grooved tread',
    category: 'sport-sandals',
    image: './images/sport-sandals.jpg',
    position: 'center 50%',
    tag: 'Style Reference',
    styleNote: 'Water-tolerant & multi-strap utility',
    description:
      'Heavy-duty outdoor sandals built with weather-resistant nylon webbing, quick-adjust hook-and-loop straps, and aggressive traction soles for monsoon and outdoor durability.',
    highlights: [
      'Washable, quick-drying materials built for rugged Indian terrain',
      'Tri-point adjustable fit for customized comfort',
      'Tough polyurethane / rubber soles for years of use',
    ],
    idealFor: 'Monsoon season, travel, outdoor walking & daily rough use',
  },
];

export const REASONS = [
  {
    number: '01',
    title: 'A considered edit',
    body: 'We hand-curate footwear styles that offer dependable build, comfortable cushioning, and authentic value rather than stocking disposable fast-fashion.',
  },
  {
    number: '02',
    title: 'The right fit matters',
    body: 'Take your time. Our Begumpeth store is dedicated to patient, personalized try-ons so you leave with footwear that truly fits how you walk.',
  },
  {
    number: '03',
    title: 'Made for real days',
    body: 'From Solapur paved streets and market lanes to family weddings and home relaxation, we prioritize genuine comfort and durable materials.',
  },
  {
    number: '04',
    title: 'Room to explore',
    body: 'Wide varieties across traditional Kolhapuris, formal leather shoes, daily sandals, and sports walkers in all standard Indian sizes under one roof.',
  },
  {
    number: '05',
    title: 'A proper welcome',
    body: 'No rush and no high-pressure selling. Just helpful guidance, honest answers, and the hospitality Solapur has trusted since 1992.',
  },
  {
    number: '06',
    title: 'Details worth noticing',
    body: 'Arch contouring, sole flexibility, breathable linings, and authentic leather grain — craftsmanship nuances you can feel immediately in-store.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Suhail Inamdar',
    location: 'Begumpeth, Solapur',
    comment:
      'Maulana Shoe Center has been our family footwear shop for over 15 years. Their Kolhapuri chappals and formal shoes are unmatched in quality and price in Solapur.',
    rating: 5,
    tag: 'Verified Regular Customer',
  },
  {
    name: 'Aniket Deshmukh',
    location: 'Saat Rasta, Solapur',
    comment:
      'Got wedding mojaris and formal shoes for my brother wedding. Superb comfort, elegant finish, and the staff took 45 minutes to help me find the exact right fit.',
    rating: 5,
    tag: 'Wedding Shopper',
  },
  {
    name: 'Mohammed Rafiq',
    location: 'Camp Area, Solapur',
    comment:
      'Best slippers and daily wear sandals in Begumpeth. Honest shopkeepers and authentic genuine leather pairs that easily last 2 to 3 years of daily usage.',
    rating: 5,
    tag: 'Daily Walker',
  },
];

export const SIZE_CHART = [
  { uk: 'UK 6', us: 'US 7', eu: 'EU 40', cm: '24.5 cm' },
  { uk: 'UK 7', us: 'US 8', eu: 'EU 41', cm: '25.4 cm' },
  { uk: 'UK 8', us: 'US 9', eu: 'EU 42', cm: '26.2 cm' },
  { uk: 'UK 9', us: 'US 10', eu: 'EU 43', cm: '27.1 cm' },
  { uk: 'UK 10', us: 'US 11', eu: 'EU 44', cm: '27.9 cm' },
  { uk: 'UK 11', us: 'US 12', eu: 'EU 45', cm: '28.8 cm' },
];

export const FAQS = [
  {
    q: 'Are the shoes shown on the website the only models you have?',
    a: 'No! The images on this website represent the styles and types of footwear we specialize in (Kolhapuris, formals, sandals, slippers, runners, mojaris). When you visit our Begumpeth showroom, you will find a much broader variety of current designs, brand options, colors, and standard Indian sizes.',
  },
  {
    q: 'Do you offer trial and fit checks in-store?',
    a: 'Yes, absolutely! We encourage you to visit us in Begumpeth, sit comfortably, and try on multiple pairs and sizes until you find the perfect comfort level.',
  },
  {
    q: 'Can I check stock or ask about a style via WhatsApp?',
    a: 'Yes! Tap the WhatsApp button on any style card or the contact button to chat directly with us at +91 75888 88578. You can tell us what type or size you need, or share a photo, and we will confirm what we have in store.',
  },
  {
    q: 'Where is Maulana Shoe Center located and what are the hours?',
    a: 'We are situated in Begumpeth, Solapur (Maharashtra 413001), open 7 days a week from 10:00 AM to 9:30 PM.',
  },
];
