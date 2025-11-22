export interface NavLinkItem {
  url: string;
  label: string;
}

export interface CoreValue{
  value: string;
  desc: string;
  bgColor?: string;
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

export interface Team {
  name: string;
  role: string;
  desc: string;
  imageMobile: string;
  imageDesktop: string;
}

export interface OurStory {
  image: string;
  text: string;
  year: string;
}

export interface OurSolutions{
  value: string;
  desc: string;
  image: string;
  points: string[]
}