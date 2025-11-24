import { CoreProducts, CoreValue, FAQ, OurSolutions, OurStory, Slide, Team, Testimonial } from "@/interfaces/landing-page";

export const coreValues: CoreValue[] = [
  {
    value: "Efficiency",
    desc: "Streamlining inventory and logistics for retailers."
  },
  {
    value: "Accessibility",
    desc: "Making restocking and supply chain tools available to every SME."
  },
  {
    value: "Innovation",
    desc: "AI-driven restocking and demand forecasting."
  },
  {
    value: "Sustainability",
    desc: "Reducing waste and optimizing supply chain resources."
  },
]

export const coreProducts: CoreProducts[] = [
  {
    value: "Manufacturer Marketplace",
    desc: "Order directly from FMCG manufacturers and access transparent, factory level pricing.",
    icon: "/manu-mart.svg"
  },
  {
    value: "Real Time Tracking",
    desc: "Track every order from dispatch to delivery, ensuring full visibility.",
    icon: "/real-time.svg"
  },
  {
    value: "Smart Inventory Control",
    desc: "Manage stock in/out from your phone with real-time updates and alerts.",
    icon: "/smart-invt.svg"
  },
]


export const slides: Slide[] = [
  {
    id: 1,
    title: "Seamless Distribution",
    description:
      "Ensuring fast, reliable delivery of goods to keep local markets stocked and thriving.",
    image: "/van.webp", // Replace with your image path
  },
  {
    id: 2,
    title: "Reliable Logistics",
    description:
      "Connect suppliers with markets efficiently through our advanced distribution network.",
    image: "/billboard.webp", // Replace with your image path
  },
  {
    id: 3,
    title: "Smart Solutions",
    description:
      "Technology-driven approach to optimize your supply chain and reduce costs.",
    image: "/vannn.webp", // Replace with your image path
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Chelle Bonte',
    role: 'Founder',
    company: 'Everyday',
    content: `Since adopting Jooav Inventory, we've reduced stockouts by 30% and improved turnover by 35%.`,
    rating: 5
  },
  {
    id: 2,
    name: 'Owale',
    role: 'Distributor',
    company: '',
    content: `We now have more time to focus on our business and logistics. The system they're building is exactly what we need.`,
    rating: 5
  },
  {
    id: 3,
    name: 'Akane',
    role: 'Wholesaler',
    company: '',
    content: `Jooav helped us restock on time without manual ordering. It's connected the manufacturer — fast and reliable.`,
    rating: 5
  },
  {
    id: 4,
    name: 'Sarah Chen',
    role: 'Operations Manager',
    company: 'Metro Supplies',
    content: 'The automated ordering system has transformed how we manage inventory. No more guesswork!',
    rating: 5
  },
  {
    id: 5,
    name: 'David Okonkwo',
    role: 'Store Owner',
    company: '',
    content: 'Real-time tracking and seamless communication with suppliers. This is the future of distribution.',
    rating: 5
  }
];


export const partners: string[] = [
  "/expand-global.svg",
  "/coca-cola.svg",
  "/fidson.svg",
  "/first-bank.svg",
  "/moniepoint.svg",
  "/zenith.svg",
  "/dufil.svg",
]

export const faqs: FAQ[] = [
  {question: "How can I track my shipment?",
    answer: "You can track your shipment in real time using your tracking ID on our website or mobile app. You’ll receive regular updates on your shipment’s status from pickup to final delivery."
  },
  {question: "What areas do you deliver to?",
    answer: "You can track your shipment in real time using your tracking ID on our website or mobile app. You’ll receive regular updates on your shipment’s status from pickup to final delivery."
  },
  {question: "What should I do if my shipment is delayed or damaged?",
    answer: "You can track your shipment in real time using your tracking ID on our website or mobile app. You’ll receive regular updates on your shipment’s status from pickup to final delivery."
  },
  {question: "Do you offer customized logistics solutions for businesses?",
    answer: "You can track your shipment in real time using your tracking ID on our website or mobile app. You’ll receive regular updates on your shipment’s status from pickup to final delivery."
  },
  {question: "How do I get a delivery quote?",
    answer: "You can track your shipment in real time using your tracking ID on our website or mobile app. You’ll receive regular updates on your shipment’s status from pickup to final delivery."
  },
]

export const mission: CoreValue[] = [
  {
    value: "Mission",
    desc: "To enhance efficiency, accessibility, and supply chain integration across African retail markets through AI-driven inventory and logistics solutions.",
    bgColor: "bg-app-primary"
  },
  {
    value: "Vision",
    desc: "To become the “Walmart of Africa” by transforming the FMCG retail sector through technology-driven supply chain innovation.",
    bgColor: "bg-[#51C4F3]"
  },
]

export const theTeam: Team[] = [
  {
    name: "Frank Aladeojebi",
    role: "Co - founder & CEO",
    desc: "11+ years transforming retail practices across Nigeria’s South-West.",
    imageMobile: "/ceo-mobile.svg",
    imageDesktop: "/ceo-desktop.svg"
  },
  {
    name: "Daniel Olowokere",
    role: "Co - founder & CEO",
    desc: "11+ years transforming retail practices across Nigeria’s South-West.",
    imageMobile: "/co-ceo-mobile.svg",
    imageDesktop: "/co-ceo-desktop.svg"
  },
  {
    name: "Seun Akindeko",
    role: "CFO",
    desc: " ACA-certified finance expert focused on profitability and strategic growth.",
    imageMobile: "/cfo-mobile.svg",
    imageDesktop: "/cfo-desktop.svg"
  },
  {
    name: "Atinuke Aladeojebi",
    role: "Founder & Procurement Director",
    desc: " 20+ years of supply chain experience, driving $5M+ in recurring FMCG sales.",
    imageMobile: "/procurement-mobile.svg",
    imageDesktop: "/procurement-desktop.svg"
  },

]

export const ourStory: OurStory[] = [
  {
    text: "Idea",
    year: "2023",
    image: "/idea.svg"
  },
  {
    text: "Pilot",
    year: "2025",
    image: "/pilot.svg"
  },
  {
    text: "Scale",
    year: "2026",
    image: "/scale.svg"
  },
  {
    text: "Nationwide Rollout",
    year: "2026",
    image: "/nationwide.svg"
  },

]

export const products: CoreValue[] = [
  {
    value: "Manufacturer Marketplace",
    desc: "Order directly from top FMCG manufacturers. Transparent pricing, reliable supply, and no middlemen.",
  },
  {
    value: "Real - Time Tracking",
    desc: "Monitor every shipment from dispatch to delivery with end-to-end visibility and live updates.",
  },
  {
    value: "Smart Inventory Control",
    desc: "Easily track stock movement, receive alerts, and manage inventory across multiple locations with our intuitive mobile dashboard.",
  },
]

export const ourSolutions: OurSolutions[] = [
  {
    value: "Supply Chain Management (SCM)",
    desc: "Streamline the flow of goods from manufacturers to retailers.",
    image: "/supply-chain.webp",
    points: [
      "Centralized dashboard for procurement and demand forecasting.",
      "AI-driven restock recommendations.",
      "Direct integration with manufacturer portals for automated ordering."
    ]
  },
  {
    value: "Warehouse Management Systems (WMS)",
    desc: "Digitize and automate warehouse operations.",
    image: "/warehouse-management.webp",
    points: [
      "Barcode / QR tracking for inventory movement.",
      "Real-time mapping for inbound and outbound goods.",
      "Smart shelf management and space optimization."
    ]
  },
  {
    value: "Inventory Management System (Jooav ERP)",
    desc: "Enable SMEs to manage inventory effortlessly.",
    image: "/inventory-management.webp",
    points: [
      "Real-time stock monitoring and order tracking.",
      "Automatic supplier reorders based on demand signals.",
      "Profitability analytics and margin insights."
    ]
  },
  {
    value: "Logistics & Distribution Technology",
    desc: "Bridge warehouses and retail outlets through optimized delivery.",
    image: "/logistics.webp",
    points: [
      "Real-time fleet and route tracking.",
      "Automated route optimization for faster fulfillment.",
      "Logistics provider APIs (e.g., DHL, GIG, Canper Express)."
    ]
  },
  {
    value: "E-commerce & Omnichannel Technology",
    desc: "Connect retail, wholesale, and online stores under one system.",
    image: "/e-commerce.webp",
    points: [
      "Online store builder for SMEs.",
      "Multi-channel inventory synchronization.",
      "Automated order and payment management."
    ]
  },
  {
    value: "Real Estate & Business Infrastructure",
    desc: "Provide SMEs with access to affordable warehousing and retail spaces.",
    image: "/real-estate.webp",
    points: [
      "Book JooavHub warehouse space on demand.",
      "Shared retail points for franchise or distribution partners.",
      "Lease-to-own SME facilities for business expansion."
    ]
  },
  {
    value: "POS Systems with Buy Now, Pay Later (BNPL)",
    desc: "Empower SMEs to manage sales, payments, and inventory financing seamlessly improving cash flow and customer engagement.",
    image: "/pos.webp",
    points: [
      "Unified POS for order management and payment processing.",
      "Integrated BNPL option for instant restocking and deferred payment.",
      "Customer data capture for loyalty and point tracking.",
      "Real-time transaction analytics and performance insights."
    ]
  },

]