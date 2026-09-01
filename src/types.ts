export type PageRoute = 'home' | 'shop' | 'visit' | 'care' | 'contact' | 'policies';

export interface Product {
  id: string;
  name: string;
  category: 'reptiles' | 'feeders-insects' | 'feeders-rodents' | 'aquatics' | 'supplies';
  categoryLabel: string;
  price: string;
  priceNum: number;
  originalPrice?: string;
  description: string;
  image: string;
  badge?: string;
  inStock: boolean;
  squareUrl: string;
  features?: string[];
}

export interface SpeciesCareInfo {
  id: string;
  name: string;
  scientificName: string;
  category: 'Lizard' | 'Gecko' | 'Snake' | 'Amphibian' | 'Invertebrate' | 'Aquatics';
  experienceLevel: 'Beginner' | 'Intermediate' | 'Advanced' | 'Beginner to Intermediate' | 'Intermediate to Advanced';
  lifespan: string;
  adultSize: string;
  enclosureSize: string;
  tempBasking: string;
  tempAmbient: string;
  humidity: string;
  diet: string;
  feedingSchedule: string;
  uvbRequired: boolean;
  uvbDetails: string;
  substrate: string;
  overview: string;
  tips: string[];
  image: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  content: string;
  rating: number;
  date: string;
  highlight: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'store' | 'feeders' | 'animals' | 'payments';
}
