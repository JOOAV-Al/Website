import { CoreProducts, CoreValue, FAQ, Slide, Testimonial } from "@/interfaces/landing-page";

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
    image: "/core-values.webp", // Replace with your image path
  },
  {
    id: 2,
    title: "Reliable Logistics",
    description:
      "Connect suppliers with markets efficiently through our advanced distribution network.",
    image: "/core-values.webp", // Replace with your image path
  },
  {
    id: 3,
    title: "Smart Solutions",
    description:
      "Technology-driven approach to optimize your supply chain and reduce costs.",
    image: "/core-values.webp", // Replace with your image path
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Chelle Bonte',
    role: 'Founder',
    company: 'Everyday',
    content: 'Since adopting Jooav Inventory, we\'ve reduced stockouts by 30% and improved turnover by 35%.',
    rating: 5
  },
  {
    id: 2,
    name: 'Owale',
    role: 'Distributor',
    company: '',
    content: 'We now have more time to focus on our business and logistics. The system they\'re building is exactly what we need.',
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