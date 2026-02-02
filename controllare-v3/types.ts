
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export enum Section {
  HERO = 'hero',
  SERVICES = 'services',
  ABOUT = 'about',
  FAQ = 'faq',
  CONTACT = 'contact'
}
