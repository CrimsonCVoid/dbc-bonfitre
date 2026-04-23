export const SITE = {
  name: "Destin Bonfire Company",
  domain: "https://www.destinbonfirecompany.com",
  tagline: "All-Inclusive Beach Bonfire Experiences near Destin & 30A",
  description:
    "Professionally hosted beach bonfires near Destin and along 30A with permits, seating, s’mores, and cleanup included. Perfect for bachelorettes and families.",
  phone: "(850) 706-1325",
  phoneHref: "tel:+18507061325",
  email: "erik@destincartcompany.com",
  emailHref: "mailto:erik@destincartcompany.com",
  address: {
    street: "34990 Emerald Coast Pkwy",
    city: "Destin",
    region: "FL",
    postal: "32541",
    country: "US",
    lat: 30.38888,
    lng: -86.42237,
  },
  social: {
    facebook: "https://facebook.com/Destin-Bonfire-Company-100088117208761",
    instagram: "https://instagram.com/destin_bonfire_company",
  },
  booking:
    "https://fareharbor.com/embeds/book/destinbonfirecompany/?full-items=yes&language=en-us&u=6c9d4aed-4337-42f0-a465-d02502aa4167&from-ssl=yes&g4=no&a=yes&back=https://destinbonfirecompany.com/",
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
} as const;

export type Package = {
  slug: string;
  name: string;
  price: number;
  groupSize: string;
  duration: string;
  tagline: string;
  popular?: boolean;
  image: string;
  includes: string[];
};

export const PACKAGES: Package[] = [
  {
    slug: "cozy-fire",
    name: "The Cozy Fire",
    price: 429,
    groupSize: "Up to 6 guests",
    duration: "2 hours",
    tagline: "Perfect for couples and small groups looking for a relaxed beach night",
    image: "/images/IMG_0674.jpeg",
    includes: [
      "Private beach bonfire setup",
      "2 hour fire",
      "6 chair setup",
      "Tiki torches",
      "On-site bonfire attendant",
      "Welcome sign",
      "6 ft table with tablecloth",
      "Cornhole",
      "Bluetooth speaker",
      "Complimentary s’mores",
      "Full setup & cleanup",
      "$157 Walton County permit included",
    ],
  },
  {
    slug: "sunset-circle",
    name: "The Sunset Circle",
    price: 529,
    groupSize: "Up to 12 guests",
    duration: "2 hours",
    tagline: "Our most popular option for families and small groups",
    popular: true,
    image: "/images/IMG_0684.jpeg",
    includes: [
      "Private beach bonfire setup",
      "2 hour fire",
      "12 chair setup",
      "Tiki torches",
      "On-site bonfire attendant",
      "Welcome sign",
      "6 ft table with tablecloth",
      "Cornhole",
      "Bluetooth speaker",
      "Complimentary s’mores",
      "Full setup & cleanup",
      "$157 Walton County permit included",
    ],
  },
  {
    slug: "shoreline-social",
    name: "The Shoreline Social",
    price: 729,
    groupSize: "Up to 20 guests",
    duration: "3 hours",
    tagline: "Great for celebrations and larger group gatherings",
    image: "/images/IMG_2426.jpeg",
    includes: [
      "Private beach bonfire setup",
      "3 hour fire",
      "20 chair setup",
      "Tiki torches",
      "On-site bonfire attendant",
      "Welcome sign",
      "Two 6 ft tables with tablecloths",
      "Cornhole",
      "Bluetooth speaker",
      "Complimentary s’mores",
      "Full setup & cleanup",
      "$157 Walton County permit included",
    ],
  },
  {
    slug: "bonfire-bash",
    name: "The Bonfire Bash",
    price: 969,
    groupSize: "Up to 29 guests",
    duration: "3 hours",
    tagline: "Ideal for big events and unforgettable group nights",
    image: "/images/IMG_0673.jpeg",
    includes: [
      "Private beach bonfire setup",
      "3 hour fire",
      "29 chair setup",
      "Tiki torches",
      "TWO on-site bonfire attendants",
      "Welcome sign",
      "Two 6 ft tables with tablecloths",
      "Two 32″ round high-top tables with tablecloths",
      "Cornhole",
      "Bluetooth speaker",
      "Complimentary s’mores",
      "Full setup & cleanup",
      "$157 Walton County permit included",
      "18% gratuity added at booking",
    ],
  },
];

export type ServiceArea = {
  slug: string;
  name: string;
  address?: string;
  image: string;
};

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "ed-walline",
    name: "Ed Walline Regional Beach Access",
    image: "/images/edwallenbeach.jpg",
  },
  {
    slug: "gulfview-heights",
    name: "Gulfview Heights Beach Access",
    address: "186 Gulfview Heights Street, Santa Rosa Beach, FL 32459",
    image: "/images/gulfviewheights.jpg",
  },
  {
    slug: "santa-clara",
    name: "Santa Clara Regional Beach Access",
    image: "/images/SantaClara.jpg",
  },
  {
    slug: "dune-allen",
    name: "Dune Allen Beach",
    image: "/images/DuneAllen.jpg",
  },
  {
    slug: "fort-panic",
    name: "Fort Panic Regional Beach",
    image: "/images/FortPanic.jpg",
  },
  {
    slug: "blue-mountain",
    name: "Blue Mountain Regional Beach Access",
    image: "/images/BlueMountain2.jpg",
  },
  {
    slug: "walton-dunes",
    name: "Walton Dunes Access",
    image: "/images/waltondunes.jpg",
  },
  {
    slug: "one-seagrove",
    name: "One Seagrove Access",
    address: "57 Seagrove Place, Santa Rosa Beach, FL 32459",
    image: "/images/oneseagrove.jpg",
  },
  {
    slug: "grayton-dunes",
    name: "Grayton Dunes Access",
    address: "288 Garfield Street, Santa Rosa Beach, FL 32459",
    image: "/images/GraytonDunes.jpg",
  },
  {
    slug: "inlet-beach",
    name: "Inlet Beach",
    address: "438 West Park Place Avenue, Inlet Beach, FL 32461",
    image: "/images/InletBeach.jpg",
  },
  {
    slug: "scenic-gulf-drive",
    name: "Scenic Gulf Drive Miramar Regional Access",
    address: "907 Scenic Gulf Drive, Miramar Beach, FL 32550",
    image: "/images/scenicbeach.jpg",
  },
];

export const FAQ = [
  {
    q: "How much does a 30A beach bonfire cost?",
    a: "Beach bonfire packages along Scenic Highway 30A start at $429 for up to 6 guests. Pricing includes permit handling, setup, seating, a dedicated fire attendant, s’mores, and cleanup. Larger groups can be accommodated with custom pricing.",
  },
  {
    q: "Do you need a permit for a beach bonfire on 30A?",
    a: "Yes. Permits are required for beach bonfires on permitted South Walton beaches. Our team secures and manages all required permits so your group can enjoy a stress-free bonfire experience.",
  },
  {
    q: "Where can you have a beach bonfire near 30A?",
    a: "We host beach bonfires on permitted beaches throughout South Walton, including Santa Rosa Beach and nearby 30A communities. Many guests staying in the Destin area also choose 30A beaches for their bonfire experience.",
  },
  {
    q: "Do you need a permit for a beach bonfire near Destin?",
    a: "Yes. All beach bonfires in this area require a permit issued by Walton County. Bonfires are not allowed within Destin city limits, so all permitted bonfires take place on nearby Walton County beaches.",
  },
  {
    q: "Can I have a bonfire directly in Destin?",
    a: "No, beach bonfires are not permitted in Destin (Okaloosa County). However, permitted beaches are located just minutes away, and we coordinate everything to ensure your experience is seamless. The closest beach to Destin is Miramar Beach.",
  },
  {
    q: "How far in advance are bonfire permits issued?",
    a: "Standard bonfire permits are typically released by the county about two weeks before your scheduled date. Because of this, availability cannot be confirmed until that time.",
  },
  {
    q: "Why do you ask for a second-choice beach?",
    a: "Each beach has a limited number of permits available per day. Providing a second-choice option helps ensure we can secure a permit for your date if your first-choice location is already full.",
  },
  {
    q: "What is a special event permit, and do I need one?",
    a: "A special event permit may be required for larger gatherings or events that include additional elements such as catering, lighting, or expanded setups. We will let you know if this applies to your event and guide you through the process.",
  },
  {
    q: "How early should I book my bonfire?",
    a: "We recommend booking as early as possible — especially during peak seasons. While permits are issued closer to your date, securing your reservation early ensures you are in position when permits become available.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah P.",
    location: "Santa Rosa Beach",
    text: "Absolutely unforgettable. The setup was gorgeous, the s’mores were perfect, and our attendant made sure everything ran smoothly. The best night of our trip.",
  },
  {
    name: "Megan L.",
    location: "Seaside bachelorette",
    text: "They handled the permit, the chairs, the décor — everything. We just walked up and enjoyed the sunset with the girls. Worth every penny.",
  },
  {
    name: "David R.",
    location: "Inlet Beach",
    text: "Beautiful fire, clean setup, and extremely professional from booking to breakdown. Our family will be back next summer.",
  },
];

export const GALLERY = [
  { src: "/images/IMG_0674.jpeg", alt: "Sunset beach bonfire with lounge chairs" },
  { src: "/images/IMG_0684.jpeg", alt: "Guests gathered around an evening beach fire" },
  { src: "/images/IMG_0673.jpeg", alt: "Beach bonfire setup with tiki torches" },
  { src: "/images/IMG_0398.jpg", alt: "Bachelorette beach bonfire with bride" },
  { src: "/images/IMG_1146.jpg", alt: "Gulf Coast beach bonfire at twilight" },
  { src: "/images/IMG_2426.jpeg", alt: "Evening bonfire with seating circle" },
  { src: "/images/IMG_2429.jpeg", alt: "Bonfire with welcome sign on the sand" },
  { src: "/images/IMG_7995-640w.jpg", alt: "Group enjoying s’mores by the fire" },
  { src: "/images/IMG_7998-640w.jpg", alt: "Chairs arranged around a bonfire" },
  { src: "/images/IMG_8002-640w.jpg", alt: "Destin area beach bonfire at dusk" },
  { src: "/images/IMG_8408-640w.JPG", alt: "Beach bonfire attendant tending fire" },
  { src: "/images/IMG_8410-640w.JPG", alt: "Bonfire with cornhole set on the beach" },
  { src: "/images/602A0017-640w.jpg", alt: "Bonfire at sunset with blue sky" },
  { src: "/images/602A0364-640w.jpg", alt: "Beachside fire pit with guests" },
  { src: "/images/959AB69B-BBDD-4A4D-BB99-D648E9375B18-640w.jpeg", alt: "Beach bonfire lit at golden hour" },
  { src: "/images/FFB1ED87-672D-49E1-BB65-C7258AE9F2D2-640w.jpeg", alt: "Private bonfire with seating and décor" },
];
