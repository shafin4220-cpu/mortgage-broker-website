export interface MortgageSolution {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  keyFeatures: string[];
  bestFor: string;
  typicalRequirements: string[];
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  tip: string;
}

export interface ResourceGuide {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      bulletPoints?: string[];
    }[];
    takeaway: string;
  };
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Pre-Approval' | 'Home Purchase' | 'Refinancing' | 'Home Equity';
}

export interface PreApprovalFormData {
  fullName: string;
  email: string;
  phone: string;
  mortgageGoal: 'purchase' | 'refinance' | 'equity' | 'renewal';
  propertyType: 'single-family' | 'condo' | 'townhouse' | 'multi-family';
  estimatedValue: number;
  downPayment: number;
  location: string;
  employmentStatus: 'employed' | 'self-employed' | 'retired' | 'other';
  approximateIncome: number;
  timeline: 'immediate' | '1-3-months' | '3-6-months' | 'exploring';
  additionalNotes: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  category: string;
  description: string;
}
