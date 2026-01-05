import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Guide Sent! | Sankofa Family Medicine',
  description: 'Your primary care guide has been sent to your email.',
};

export default function PrimaryCareGuideSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-sage-50">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="mb-8 flex justify-center">
          <CheckCircle className="w-24 h-24 text-emerald-600" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-light text-charcoal mb-6">
          Thank You
        </h1>
        
        <div className="space-y-4 text-lg text-charcoal/80 mb-8">
          <p>
            Your guide has been sent to your email.
          </p>
          <p>
            Please check your inbox for an email from Sankofa Family Medicine with your download link.
          </p>
          <p className="text-sm text-charcoal/60">
            (Don't forget to check your spam folder if you don't see it within a few minutes)
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link
            href="/guides/primary-care-guide.pdf"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-rust text-rust rounded-md hover:bg-rust hover:text-white transition-colors"
            download
          >
            Download Guide Now
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 bg-charcoal text-white rounded-md hover:bg-charcoal/90 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
