import { MortgageSolution, StepItem, ResourceGuide, FaqItem, GalleryImage } from '../types';
import galleryImg1 from '../assets/media/pexels-jakubzerdzicki-28914932.jpg';
import galleryImg2 from '../assets/media/pexels-kindelmedia-7578866.jpg';
import galleryImg3 from '../assets/media/pexels-jakubzerdzicki-27960363.jpg';
import galleryImg4 from '../assets/media/pexels-kindelmedia-7578883.jpg';

export const MORTGAGE_SOLUTIONS: MortgageSolution[] = [
  {
    id: 'home-purchase',
    title: 'Home Purchase Loans',
    shortDescription: 'Tailored financing for your new home with flexible down payment options and competitive structure.',
    fullDescription: 'Whether you are buying your first single-family house, a modern condominium, or your forever home, our home purchase loan solutions help you secure favorable loan terms matching your long-term financial plans.',
    icon: 'Home',
    keyFeatures: [
      'Fixed-rate and adjustable-rate mortgage (ARM) options',
      'Conventional, FHA, and specialized purchase loan programs',
      'Assistance with down payment structures from 3% to 20%+',
      'Pre-approval letters to strengthen purchase offers',
    ],
    bestFor: 'Buyers looking to purchase a primary residence, vacation retreat, or relocation home.',
    typicalRequirements: [
      'Proof of steady employment and verifiable income',
      'Recent credit report review and debt-to-income analysis',
      'Documented assets for down payment and closing reserves',
    ],
  },
  {
    id: 'refinance',
    title: 'Refinance Loans',
    shortDescription: 'Restructure your current mortgage to lower monthly payments, adjust terms, or consolidate debt.',
    fullDescription: 'Market conditions and personal circumstances evolve. Refinancing allows homeowners to adjust loan terms, switch from an adjustable rate to a stable fixed rate, or lower borrowing costs when rates align with your goals.',
    icon: 'RefreshCw',
    keyFeatures: [
      'Rate-and-term refinancing to reduce interest expenses',
      'Term shortening (e.g., 30-year to 15-year or 20-year) to build equity faster',
      'Removal of private mortgage insurance (PMI) once equity thresholds are met',
      'Comprehensive break-even timeline calculations before proceeding',
    ],
    bestFor: 'Existing homeowners seeking lower monthly payments or aiming to pay off their loan sooner.',
    typicalRequirements: [
      'Current mortgage statements and payment history',
      'Home equity assessment or appraisal',
      'Updated income verification',
    ],
  },
  {
    id: 'home-equity',
    title: 'Home Equity Loans',
    shortDescription: 'Leverage the built-in value of your home for renovations, education, or major milestones.',
    fullDescription: 'Tap into your accumulated home equity without disrupting your existing low-rate primary mortgage. We help you explore fixed-rate home equity loans and revolving home equity lines of credit (HELOC).',
    icon: 'Layers',
    keyFeatures: [
      'Lump-sum fixed-rate equity loan or flexible line of credit options',
      'Potential tax advantages when used for substantial home improvements (consult your tax advisor)',
      'Retain your existing primary mortgage interest rate',
      'Structured repayment schedules suited to your budget',
    ],
    bestFor: 'Homeowners with significant equity planning home additions, major remodels, or consolidating higher-interest obligations.',
    typicalRequirements: [
      'Minimum equity retention (typically 15% to 20% remaining in the property)',
      'Satisfactory payment history and credit rating',
      'Current property valuation',
    ],
  },
  {
    id: 'first-time-buyer',
    title: 'First-Time Home Buyer Solutions',
    shortDescription: 'Dedicated step-by-step guidance, down payment programs, and educational support for first-time buyers.',
    fullDescription: 'Buying your first home can feel overwhelming. We simplify every milestone with patient advisory, clear explanations of loan programs, and identification of qualified down payment assistance opportunities.',
    icon: 'GraduationCap',
    keyFeatures: [
      'Low down payment options (starting at 3% to 3.5%)',
      'Educational step-by-step walkthrough of closing costs and escrows',
      'Assistance reviewing credit profiles and qualifying criteria',
      'Complimentary consultation throughout the search and escrow period',
    ],
    bestFor: 'First-time buyers looking for compassionate, honest guidance and clear roadmaps.',
    typicalRequirements: [
      'Minimum 1-2 years continuous work history',
      'Verifiable bank statements for earnest money and down payment',
      'Valid identification and tax filings',
    ],
  },
  {
    id: 'investment-property',
    title: 'Investment Property Loans',
    shortDescription: 'Strategic financing packages for residential rental properties and real estate portfolios.',
    fullDescription: 'Expand your wealth through residential real estate. We structure investment property loans that take rental income projections into account, ensuring cash flow optimization and manageable leverage.',
    icon: 'Building2',
    keyFeatures: [
      'Financing for 1-4 unit residential investment properties',
      'Consideration of projected lease and rental revenue in qualification',
      'Portfolio options for investors acquiring multiple rental assets',
      'Flexible amortization and fixed-rate structures',
    ],
    bestFor: 'Investors acquiring single-family rentals, duplexes, triplexes, or fourplexes.',
    typicalRequirements: [
      'Down payment typically 15% to 25% depending on unit count',
      'Reserve funds documented in savings or liquid assets',
      'Lease agreements or rental market appraisal schedule',
    ],
  },
  {
    id: 'renewal-review',
    title: 'Mortgage Renewal & Review',
    shortDescription: 'Proactive review before your mortgage term expires to negotiate competitive terms.',
    fullDescription: 'Never simply sign a lender renewal letter without exploring options. We conduct a thorough mortgage review to ensure you receive competitive renewal rates and terms that reflect your current financial health.',
    icon: 'FileCheck',
    keyFeatures: [
      'Independent comparison of renewal offers against the broader lending market',
      'Assessment of changing family goals and term adjustments',
      'Zero-cost preliminary mortgage health check',
      'Smooth transition handling before term expiration date',
    ],
    bestFor: 'Homeowners approaching the end of their current loan term or fixed period.',
    typicalRequirements: [
      'Current lender renewal notice and remaining balance',
      'Current household income summary',
      'Recent property tax and insurance receipts',
    ],
  },
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Tell Us Your Goals',
    description: 'Share your home financing vision, whether purchasing, refinancing, or accessing equity. A quick conversation or online inquiry gives us the foundation to help.',
    tip: 'No obligation · Takes less than 5 minutes',
  },
  {
    number: '02',
    title: 'Explore Your Options',
    description: 'We analyze loan programs from a wide lending network, presenting you with clear comparisons of rates, terms, closing costs, and monthly commitments.',
    tip: 'Unbiased side-by-side comparisons',
  },
  {
    number: '03',
    title: 'Prepare Your Application',
    description: 'We guide you through gathering necessary documentation, organizing paperwork, and submitting a strong, clean file to the chosen lender.',
    tip: 'Clear checklist provided',
  },
  {
    number: '04',
    title: 'Move Forward With Confidence',
    description: 'From pre-approval through underwriting and final closing, your dedicated mortgage specialist communicates transparent updates every step of the way.',
    tip: 'Dedicated guidance to closing day',
  },
];

export const TRUST_STRIP_ITEMS = [
  { label: 'Personalized Guidance', icon: 'UserCheck', desc: 'Advice aligned with your life milestones' },
  { label: 'Competitive Loan Options', icon: 'Scale', desc: 'Access to multiple lending programs' },
  { label: 'Clear Process', icon: 'Compass', desc: 'Transparent steps with zero surprises' },
  { label: 'Fast Communication', icon: 'MessageSquare', desc: 'Prompt answers to all your questions' },
  { label: 'Dedicated Support', icon: 'ShieldCheck', desc: 'From initial call to closing day' },
];

export const RESOURCE_GUIDES: ResourceGuide[] = [
  {
    id: 'first-time-buyer-guide',
    title: 'First-Time Home Buyer Guide',
    category: 'Home Buying',
    readTime: '6 min read',
    summary: 'A complete overview of what to expect when purchasing your first property, from credit prep to closing costs.',
    content: {
      intro: 'Stepping into homeownership is one of the most rewarding milestones in personal finance. Understanding the phases beforehand eliminates anxiety and positions you for success.',
      sections: [
        {
          heading: '1. Assessing Your Readiness and Credit Profile',
          body: 'Lenders evaluate your credit history, income stability, and debt-to-income (DTI) ratio. Check your credit reports early to correct errors and avoid opening new credit lines before applying.',
          bulletPoints: [
            'Target a stable employment history of at least two years',
            'Keep credit card balances low relative to credit limits',
            'Avoid making large unverified deposits or opening new auto loans during the search',
          ],
        },
        {
          heading: '2. Budgeting Beyond Just the Down Payment',
          body: 'While many programs allow down payments as low as 3% to 3.5%, remember to budget for closing costs (typically 2% to 4% of the loan amount), home inspections, appraisals, and moving reserves.',
        },
        {
          heading: '3. Why Pre-Approval Matters Before Home Hunting',
          body: 'A formal pre-approval letter demonstrates to real estate agents and sellers that you are a qualified, serious buyer. It also clarifies your exact monthly payment comfort zone.',
        },
      ],
      takeaway: 'Take the process one step at a time. Partnering with a dedicated mortgage broker ensures you understand every line item before signing.',
    },
  },
  {
    id: 'mortgage-basics',
    title: 'Mortgage Basics: Terms, Rates & Types',
    category: 'Fundamentals',
    readTime: '5 min read',
    summary: 'Demystifying fixed vs. adjustable rates, loan amortizations, escrows, and how interest calculations work.',
    content: {
      intro: 'A mortgage is simply a secured loan used to purchase or maintain real estate. Here is a clear breakdown of the core terms you will encounter.',
      sections: [
        {
          heading: 'Fixed-Rate vs. Adjustable-Rate Mortgages (ARMs)',
          body: 'A fixed-rate mortgage locks your interest rate for the entire life of the loan (e.g., 15 or 30 years), offering predictable payments. An ARM offers a fixed introductory rate that later adjusts periodically based on market indices.',
        },
        {
          heading: 'The 4 Components of Your Monthly Payment (PITI)',
          body: 'Your total monthly housing payment often consists of Principal (paying down loan balance), Interest (cost of borrowing), Taxes (local real estate property taxes held in escrow), and Insurance (homeowners hazard insurance and optional PMI).',
          bulletPoints: [
            'Principal: Reduces what you owe on the property',
            'Interest: The lender’s fee for financing the loan',
            'Taxes: Prorated municipal property taxes',
            'Insurance: Hazard protection for your structure and private mortgage insurance if applicable',
          ],
        },
      ],
      takeaway: 'Choosing between loan structures depends on how long you plan to live in the home and your tolerance for payment adjustments.',
    },
  },
  {
    id: 'refinancing-guide',
    title: 'Refinancing Guide: When Does It Make Sense?',
    category: 'Refinancing',
    readTime: '5 min read',
    summary: 'Learn how to calculate your break-even point and evaluate when refinancing can lower your costs or eliminate PMI.',
    content: {
      intro: 'Refinancing replaces your current home loan with a new one under different terms, rates, or loan balances.',
      sections: [
        {
          heading: 'The Break-Even Calculation',
          body: 'To determine if refinancing is beneficial, divide the total closing costs by your expected monthly savings. For example, if closing costs are $3,000 and your monthly savings are $150, your break-even point is 20 months.',
        },
        {
          heading: 'Common Reasons Homeowners Refinance',
          body: 'Homeowners commonly refinance to secure a lower interest rate, transition from an ARM to a predictable fixed loan, shorten a 30-year term to a 15-year term, or eliminate private mortgage insurance once home values rise.',
          bulletPoints: [
            'Lower monthly interest expenses',
            'Shorten loan term to become mortgage-free faster',
            'Remove mortgage insurance (PMI) after reaching 20% equity',
            'Cash-out refinancing to fund home renovations or consolidate debt',
          ],
        },
      ],
      takeaway: 'We run side-by-side break-even models to ensure a refinance creates genuine, measurable value before you move forward.',
    },
  },
  {
    id: 'understanding-home-equity',
    title: 'Understanding Home Equity: Loans vs. HELOCs',
    category: 'Home Equity',
    readTime: '4 min read',
    summary: 'How to safely tap into your accumulated property value to fund renovations, additions, or major life investments.',
    content: {
      intro: 'Home equity is the difference between what your property is worth on the market and what you still owe on your mortgage.',
      sections: [
        {
          heading: 'Home Equity Loan (Second Mortgage)',
          body: 'Provides a single lump-sum payout with a fixed interest rate and equal monthly payments over a set duration (often 5 to 20 years). Ideal for defined expenses like a major kitchen remodel or roof replacement.',
        },
        {
          heading: 'Home Equity Line of Credit (HELOC)',
          body: 'Functions like a credit line where you borrow and repay as needed during an initial draw period (usually 10 years) with variable interest rates. Ideal for ongoing or phased projects.',
        },
      ],
      takeaway: 'Responsible equity management allows you to invest back into your home’s value without losing the attractive terms on your first mortgage.',
    },
  },
  {
    id: 'preparing-pre-approval',
    title: 'Preparing for Pre-Approval: Document Checklist',
    category: 'Preparation',
    readTime: '4 min read',
    summary: 'Gather the essential documentation needed for a smooth, swift pre-approval review with zero delays.',
    content: {
      intro: 'A well-prepared file helps lenders verify your qualifying numbers quickly and issue a confident pre-approval letter.',
      sections: [
        {
          heading: 'Standard Documentation Checklist',
          body: 'Having these documents organized in digital format makes the submission fast and straightforward:',
          bulletPoints: [
            'Government-issued photo identification (Driver’s License or Passport)',
            'Past 30 days of recent pay stubs showing year-to-date earnings',
            'Last 2 years of W-2 statements or 1099 forms',
            'Last 2 years of federal personal and business tax returns (if self-employed)',
            'Past 60 days of complete bank statements (checking, savings, investment accounts)',
            'Statements for any existing real estate owned and mortgage notes',
          ],
        },
        {
          heading: 'What to Avoid During Underwriting',
          body: 'Keep your finances steady: do not make large undocumented bank transfers, avoid applying for new credit cards or furniture loans, and avoid changing employment structures before closing.',
        },
      ],
      takeaway: 'Our team reviews your files beforehand to identify and solve any missing details before sending to underwriters.',
    },
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Pre-Approval',
    question: 'What is the difference between pre-qualification and pre-approval?',
    answer: 'Pre-qualification is an informal estimate of what you might be able to borrow based on self-reported figures. Pre-approval is a much stronger verification where a mortgage specialist reviews your income, asset documentation, and credit score. Sellers and real estate agents heavily prefer pre-approval letters when evaluating purchase offers.',
  },
  {
    id: 'faq-2',
    category: 'Pre-Approval',
    question: 'How long does it take to get pre-approved for a mortgage?',
    answer: 'Once all required documentation (pay stubs, tax returns, bank statements) is provided, a standard pre-approval review can typically be completed within 24 to 48 business hours. We work diligently to ensure you receive a clear, documented response promptly.',
  },
  {
    id: 'faq-3',
    category: 'Home Purchase',
    question: 'Do I need a 20% down payment to purchase a home?',
    answer: 'No, 20% is not required. Many conventional loan programs accommodate down payments as low as 3%, and FHA loans begin at 3.5% down for eligible borrowers. Putting down 20% does, however, allow you to avoid paying monthly private mortgage insurance (PMI). We help you weigh the cost-benefit of different down payment amounts.',
  },
  {
    id: 'faq-4',
    category: 'Refinancing',
    question: 'When does it make sense to refinance my mortgage?',
    answer: 'Refinancing generally makes sense if you can lower your interest rate, shorten your loan term to build equity faster, eliminate private mortgage insurance (PMI), or transition from a fluctuating ARM to a stable fixed rate. The key metric is your break-even period—how many months it takes for monthly savings to exceed closing costs.',
  },
  {
    id: 'faq-5',
    category: 'Home Equity',
    question: 'What can I use a Home Equity Loan or HELOC for?',
    answer: 'Homeowners commonly use home equity to finance home improvements and additions (which may increase property value), consolidate higher-interest debt, pay for higher education, or maintain an emergency liquidity buffer. Because the loan is secured by your home, rates are typically lower than unsecured personal loans or credit cards.',
  },
  {
    id: 'faq-6',
    category: 'General',
    question: 'What documents are required to start a mortgage application?',
    answer: 'Typically, you will need your government ID, the most recent 30 days of pay stubs, the last two years of W-2s or tax returns (especially if self-employed), and the last two months of bank statements showing sufficient funds for down payment and closing reserves.',
  },
  {
    id: 'faq-7',
    category: 'General',
    question: 'How does working with a mortgage broker benefit me over a single retail bank?',
    answer: 'A mortgage broker acts as your independent advocate with access to multiple wholesale lenders and diverse loan programs. Rather than being restricted to one bank’s rigid guidelines and rates, a broker compares multiple options to find competitive terms and products tailored specifically to your financial scenario.',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: galleryImg1,
    alt: 'Modern residential home architecture',
    title: 'Modern Single-Family Living',
    category: 'Home Purchase',
    description: 'Securing financing for quality homes with flexible term options.',
  },
  {
    src: galleryImg2,
    alt: 'Real estate house keys and home purchase',
    title: 'Closing on Your New Home',
    category: 'First-Time Buyer',
    description: 'Clear step-by-step guidance from offer to key handover.',
  },
  {
    src: galleryImg3,
    alt: 'Contemporary residential architecture',
    title: 'Custom Property Financing',
    category: 'Refinance & Equity',
    description: 'Tailored loan structures aligned with your property value.',
  },
  {
    src: galleryImg4,
    alt: 'Homeowner signing documents and receiving house keys',
    title: 'Confident Settlements',
    category: 'Mortgage Solutions',
    description: 'Transparent paperwork and clear communication through closing.',
  },
];
