import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - SFM Elite",
  description: "Comprehensive concierge medical services tailored to your needs",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {children}
      
      {/* FAQ Schema */}
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
                  "text": "Concierge medicine is a healthcare model where patients pay a membership fee for enhanced access to their physician, including same-day appointments, longer visits, 24/7 availability, and personalized care coordination."
                }
              },
              {
                "@type": "Question",
                "name": "How much does SFM Elite membership cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our membership plans range from $225–$245 to $650–$725 per month. Continuity Concierge starts at $225–$245/month, Precision Concierge at $325–$375/month, and Executive Concierge at $650–$725/month. All prices reflect founding member rates."
                }
              },
              {
                "@type": "Question",
                "name": "Do I still need health insurance with concierge medicine?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We currently accept cash and card payments (including HSA/FSA cards), though we anticipate expanding our payment options in the future. Concierge medicine covers primary care only. We strongly advise maintaining health insurance coverage for emergencies, hospitalizations, specialists, and catastrophic events. Many of our members pair concierge medicine with high-deductible health plans."
                }
              },
              {
                "@type": "Question",
                "name": "What services are included in my membership?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Membership includes unlimited office visits, 24/7 direct access to your physician, comprehensive annual physicals, preventive care coordination, chronic disease management, and personalized wellness planning. Additional services like advanced diagnostics may have separate fees."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}