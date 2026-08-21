// Campaign content for Dennis Ondati Omari — MCA Aspirant, Gesusu Ward.

export const CAMPAIGN = {
  candidate: "Dennis Ondati Omari",
  ward: "Gesusu Ward",
  year: "2027",
  cupSince: "2014",

  // Replace XXXXXXXXXX with the real campaign WhatsApp number / community link.
  whatsappUrl: "https://wa.me/XXXXXXXXXX",
  socials: {
    facebook: "#",
    twitter: "#",
    tiktok: "#",
    youtube: "#",
  },
};

export interface Pillar {
  title: string;
  description: string;
  icon: string;
}

export const PILLARS: Pillar[] = [
  {
    title: "Youth Empowerment & Job Creation",
    description:
      "Skills training, startup grants, and links to markets so young people in Gesusu can build livelihoods at home.",
    icon: "users",
  },
  {
    title: "Transparent Ward Development Fund",
    description:
      "Every shilling accounted for. Public project boards, open budgets, and community oversight of the Ward fund.",
    icon: "shield",
  },
  {
    title: "Infrastructure & Market Development",
    description:
      "All-weather roads, upgraded local markets, water access, and reliable lighting for safer, thriving trading centres.",
    icon: "building",
  },
  {
    title: "Agricultural Support for Farmers",
    description:
      "Affordable inputs, extension services, and cooperative value chains that put more money in farmers' pockets.",
    icon: "sprout",
  },
];

export interface LocationPortal {
  id: string;
  name: string;
  promises: string[];
}

export const LOCATIONS: LocationPortal[] = [
  {
    id: "loc-1",
    name: "Gesusu",
    promises: [
      "Upgrade the Gesusu trading centre with safe drainage, street lighting, and a modern market shed.",
      "Complete and equip the Gesusu health facility to serve residents without long referrals.",
      "Set up a youth innovation hub offering skills training, job linkages, and start-up coaching.",
    ],
  },
  {
    id: "loc-2",
    name: "Geteri",
    promises: [
      "Gravel and grade the Geteri–Gesusu link road for all-weather access to markets and services.",
      "Improve water access through new boreholes and extended reticulation across the area.",
      "Support farmer cooperatives with subsidised inputs and a reliable produce collection point.",
    ],
  },
  {
    id: "loc-3",
    name: "Ikenye",
    promises: [
      "Tarmac the main Ikenye access road and open feeder roads for easier transport and trade.",
      "Establish a bursary desk and mentorship programme for bright but needy students from Ikenye.",
      "Launch a community security and lighting programme to make the area safer after dark.",
    ],
  },
  {
    id: "loc-4",
    name: "Masabo",
    promises: [
      "Build a modern Masabo market with sanitation, water, and secure trading spaces for vendors.",
      "Deliver an agricultural extension programme focused on crop yields, dairy, and poultry.",
      "Construct a community centre for meetings, training, and civic engagement.",
    ],
  },
  {
    id: "loc-5",
    name: "Nyang'onda",
    promises: [
      "Upgrade the Nyang'onda water scheme so every home has reliable, clean water.",
      "Open a neighbourhood health outreach point with regular clinical visits and drug supplies.",
      "Invest in sports and talent development through the Ondati Cup and local youth leagues.",
    ],
  },
];

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  help: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Everlyne Kwamboka",
    location: "Geteri, Gesusu",
    quote:
      "When my son was sent home for fees, Dennis stepped in and cleared his term's balance. Today he is back in school and top of his class.",
    help: "School fees support",
  },
  {
    name: "Josphat Nyabuto",
    location: "Friends,Kiamokama",
    quote:
      "He gave me the push and the seed capital to open my hardware shop. I now employ two other young men from our village.",
    help: "Business start-up",
  },
  {
    name: "Mary Bosibori",
    location: "Gesusu Centre",
    quote:
      "My hospital bill was too heavy for our family. Dennis quietly settled a big part of it — no cameras, just genuine help.",
    help: "Hospital bills",
  },
  {
    name: "Samwel Ondieki",
    location: "Masabo Trading Centre",
    quote:
      "When we lost our father, he stood with us through the funeral arrangements. That kindness is something our family will never forget.",
    help: "Funeral assistance",
  },
  {
    name: "Grace Moraa",
    location: "Chibwobi",
    quote:
      "Even from beyond the ward, his support for needy students reached my daughter. He believes in uplifting people, not politics.",
    help: "School fees support",
  },
  {
    name: "Duke Omwenga",
    location: "Kiomiti, Gesusu",
    quote:
      "I pitched my small poultry idea and he backed it. Six months later I'm supplying eggs to three trading centres.",
    help: "Business start-up",
  },
];

export interface GalleryPhoto {
  src: string;
  caption: string;
}

export type NewsCategory = "Ondati Cup" | "Community" | "Ground Rally" | "Interview";

export interface NewsPost {
  slug: string;
  title: string;
  category: NewsCategory;
  date: string;
  location: string;
  excerpt: string;
  body: string[];
  image: "crowd" | "seated" | "portrait" | "event" | "elders";
}

export const NEWS_POSTS: NewsPost[] = [
  {
    slug: "thousands-turn-out-gesusu-movement-grows",
    title: "Thousands turn out as the Gesusu movement grows",
    category: "Ground Rally",
    date: "Saturday · Gesusu Trading Centre",
    location: "Gesusu Centre",
    excerpt:
      "A record turnout at the weekend rally signalled a movement that has quietly become the loudest voice in the ward.",
    body: [
      "Chants of ‘Tiga Gesusu Emese nero!’ rang across the trading centre as thousands of residents streamed in from every corner of the ward. What began as a small community meeting three months ago has grown into a movement pulling in boda operators, mama mbogas, farmers, teachers and young graduates.",
      "Speaking from a modest podium, Dennis Ondati Omari kept the message simple: accountable leadership, transparent development funds, and a ward that works for every family. ‘We are not building a campaign — we are building a promise,’ he told the crowd.",
      "Sub-location captains signed up dozens of new volunteers on the spot. The next rally moves to Nyabigena, where residents have already tabled their priorities: an all-weather access road, a youth polytechnic, and expanded water coverage.",
    ],
    image: "crowd",
  },
  {
    slug: "sitting-down-with-elders",
    title: "Sitting down with elders in a church service",
    category: "Community",
    date: "Church Visit · Gesusu",
    location: "Gesusu",
    excerpt:
      "Seated with elders during a church service in Gesusu, Dennis joined in worship and listened to the community's spiritual leaders.",
    body: [
      "Inside the church in Gesusu, Dennis took his place beside elders and congregation members for a moment of worship and reflection. No speeches, no campaign posters — just a shared recognition that faith and community hold the ward together.",
      "After the service, elders spoke about the role of servant leadership and the values they expect from anyone who seeks to represent Gesusu. Dennis listened, thanked them, and committed to carrying those values into every decision he makes on behalf of the ward.",
      "The visit reinforced a simple truth: leadership begins with showing up, listening, and respecting the institutions that shape daily life in Gesusu.",
    ],
    image: "elders",
  },
  {
    slug: "dennis-on-local-radio-accountability-first",
    title: "Dennis on local radio: accountability first",
    category: "Interview",
    date: "Live · Egesa FM breakfast show",
    location: "Kisii",
    excerpt:
      "In a wide-ranging morning interview, Dennis laid out the accountability framework he intends to bring to the Ward Development Fund.",
    body: [
      "Fielding sharp questions from callers, Dennis defended a simple proposition: every shilling of the Ward Development Fund should be traceable, from allocation to receipt, on a public board any resident can inspect.",
      "‘Accountability is not a slogan. It is a habit,’ he told listeners. ‘Publish the budget. Publish the tender. Publish the receipt. Then let the people judge.’",
      "He also addressed youth unemployment, farmer support, and the future of the Ondati Cup, which since 2014 has grown from a village tournament into a ward-wide platform for talent and mentorship.",
    ],
    image: "portrait",
  },
  {
    slug: "highlights-latest-ondati-cup",
    title: "Highlights from the latest Ondati Cup gathering",
    category: "Ondati Cup",
    date: "Community Sports · Kegogi grounds",
    location: "Kegogi",
    excerpt:
      "Sixteen village teams. One trophy. And a weekend that reminded Gesusu why the Ondati Cup has endured since 2014.",
    body: [
      "The Kegogi grounds were packed from morning whistle to sunset final as sixteen village sides battled for the Ondati Cup — a tournament that started in 2014 with four teams and a single ball.",
      "Beyond the football, the day featured a health tent, a mentorship corner for aspiring coaches and referees, and a jobs desk connecting youth with vocational opportunities.",
      "The trophy went to a spirited Nyabigena XI, but the real headline was the two hundred plus young people who signed up for the year-round sports and skills academy — the next chapter for a tournament that has always been about more than football.",
    ],
    image: "event",
  },
];

