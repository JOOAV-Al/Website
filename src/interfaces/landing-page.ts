export interface NavLinkItem {
  url: string;
  label: string;
}

export interface CoreValue{
  value: string;
  desc: string;
}

export interface CoreProducts{
  value: string;
  desc: string;
  icon: string;
}

export interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  badges?: { letter: string; position: string }[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface FAQ{
  question: string;
  answer: string;
}