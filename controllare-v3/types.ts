
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

// Added ChatMessage interface to fix import error in AiAssistant.tsx
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum Section {
  HERO = 'hero',
  SERVICES = 'services',
  ABOUT = 'about',
  FAQ = 'faq',
  CONTACT = 'contact'
}
