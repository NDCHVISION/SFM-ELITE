import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Become a Founding Member | Sankofa Family Medicine',
  description: 'Join Sankofa Family Medicine as we launch in February 2026. Complete the interest form to reserve your founding member spot.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function FoundersWaitlistPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-sfm-cream/30">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-display-lg text-sfm-navy mb-6">
            Become a Founding Member
          </h1>
          <div className="divider-gold mx-auto mb-8" />
          <p className="text-xl text-sfm-text-muted max-w-3xl mx-auto">
            Join Sankofa Family Medicine as we launch in February 2026. Complete the interest form below to reserve your spot.
          </p>
        </div>

        {/* Iframe Container */}
        <div className="max-w-[1200px] mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <iframe
            src="https://sankofafamilymedicine.atlas.md/enrollment/index.html?account=h5MEw4d0pIPUxA4CiOGy"
            title="Founding Member Enrollment Form"
            className="w-full border-0"
            style={{ height: '900px' }}
            loading="lazy"30
          
          />
        </div>
      </div>
    </main>
  )
}
