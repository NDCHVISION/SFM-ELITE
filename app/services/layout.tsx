import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership Plans | Concierge Primary Care | Sankofa Family Medicine",
  description: "Transparent membership pricing for virtual concierge primary care in Washington State. Three tiers from $225 to $725 per month. Founding member rates available. Direct Primary Care (DPC) model with same-day access and direct doctor messaging.",
  keywords: [
    "concierge medicine pricing",
    "direct primary care membership",
    "DPC membership Washington",
    "virtual primary care cost",
    "telehealth membership",
    "founding member healthcare",
    "concierge doctor Seattle",
    "premium primary care",
    "membership medicine",
    "Sankofa Family Medicine pricing"
  ],
  openGraph: {
    title: "Membership Plans | Sankofa Family Medicine",
    description: "Transparent concierge primary care membership from $225 to $725 per month. Same-day access, direct messaging, and wholesale lab pricing included.",
    url: "https://sankofafamilymedicine.com/services",
    siteName: "Sankofa Family Medicine",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sankofa Family Medicine Membership Plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Membership Plans | Sankofa Family Medicine",
    description: "Transparent concierge primary care membership from $225 to $725 per month. Medicine That Remembers.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://sankofafamilymedicine.com/services",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "ai-content-declaration": "human-authored",
    "content-type": "Pricing Page",
    "medical-specialty": "Primary Care, Family Medicine, Direct Primary Care",
    "service-area": "Washington State, USA",
    "care-model": "Direct Primary Care (DPC), Concierge Medicine, Telemedicine",
    "price-range": "$225-$725/month",
    "founding-member-status": "Currently accepting founding members",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {children}
      
      {/* Comprehensive FAQ Schema for SEO and AI */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is concierge medicine?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Concierge medicine is a healthcare model where patients pay a membership fee for enhanced access to their doctor, including same-day appointments, longer visits, direct messaging availability, and personalized care coordination. Sankofa Family Medicine operates under the Direct Primary Care (DPC) model as defined by Washington State law (RCW 48.150)."
                }
              },
              {
                "@type": "Question",
                "name": "How much does Sankofa Family Medicine membership cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Membership plans range from $225 to $725 per month. Continuity Concierge starts at $225 to $275 per month, Precision Concierge at $325 to $375 per month, and Executive Concierge at $650 to $725 per month. Annual prepayment offers a 10% discount. Founding member rates are currently available."
                }
              },
              {
                "@type": "Question",
                "name": "Do I still need health insurance with concierge medicine?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We currently accept cash and card payments including HSA and FSA cards. Direct Primary Care membership covers primary care only. We strongly advise maintaining health insurance coverage for emergencies, hospitalizations, specialists, and catastrophic events. Many of our members pair concierge medicine with high-deductible health plans."
                }
              },
              {
                "@type": "Question",
                "name": "What services are included in my membership?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "All memberships include doctor-led virtual primary care visits, same-day or next-day appointments when available, secure non-urgent messaging, chronic condition management, medication management, care coordination, and access to wholesale laboratory pricing. Higher tiers add advanced laboratory interpretation, genetic testing guidance, cardiometabolic risk assessment, and extended access pathways."
                }
              },
              {
                "@type": "Question",
                "name": "What is the cost for non-members?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Non-member pricing is available for those not ready for membership. Initial Consultation (45 min) is $325, Follow-up Visit (30 min) is $200, Extended Visit (45 min) is $275, and Complex Visit (60 min) is $350. Labs and diagnostics are billed at cost. Members typically save 50 to 70 percent compared to non-member pricing."
                }
              },
              {
                "@type": "Question",
                "name": "What is Direct Primary Care (DPC)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Direct Primary Care is a membership-based healthcare model where you pay a monthly fee directly to your doctor, removing insurance from the primary care relationship. This allows for longer visits, easier access, transparent pricing, and care focused on you rather than billing codes. DPC practices typically maintain smaller patient panels, enabling more personalized attention."
                }
              }
            ]
          })
        }}
      />

      {/* Medical Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "@id": "https://sankofafamilymedicine.com/#organization",
            "name": "Sankofa Family Medicine",
            "alternateName": ["SFM", "Medicine That Remembers"],
            "description": "Virtual-first concierge primary care practice serving Washington State. Direct Primary Care (DPC) model with transparent membership pricing.",
            "url": "https://sankofafamilymedicine.com",
            "logo": "https://sankofafamilymedicine.com/images/SFM_Trans.png",
            "telephone": "+1-425-285-7390",
            "email": "info@sankofafamilymedicine.com",
            "priceRange": "$225-$725/month",
            "paymentAccepted": ["Cash", "Credit Card", "HSA", "FSA"],
            "currenciesAccepted": "USD",
            "areaServed": {
              "@type": "State",
              "name": "Washington",
              "sameAs": "https://en.wikipedia.org/wiki/Washington_(state)"
            },
            "medicalSpecialty": ["PrimaryCare", "FamilyPractice", "Telemedicine"],
            "isAcceptingNewPatients": true,
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Membership Plans",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "name": "Continuity Concierge",
                  "description": "Essential virtual primary care with same-day access and direct messaging",
                  "price": "225-275",
                  "priceCurrency": "USD",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "225-275",
                    "priceCurrency": "USD",
                    "billingDuration": "P1M"
                  }
                },
                {
                  "@type": "Offer",
                  "name": "Precision Concierge",
                  "description": "Data-driven personalized medicine with genetic testing interpretation and advanced diagnostics",
                  "price": "325-375",
                  "priceCurrency": "USD",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "325-375",
                    "priceCurrency": "USD",
                    "billingDuration": "P1M"
                  }
                },
                {
                  "@type": "Offer",
                  "name": "Executive Concierge",
                  "description": "Highest level of personalized care with enhanced access and complete health optimization",
                  "price": "650-725",
                  "priceCurrency": "USD",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "650-725",
                    "priceCurrency": "USD",
                    "billingDuration": "P1M"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://sankofafamilymedicine.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Membership Plans",
                "item": "https://sankofafamilymedicine.com/services"
              }
            ]
          })
        }}
      />
    </div>
  );
}
