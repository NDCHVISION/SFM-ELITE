/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
    // Enable blur placeholder generation
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable strict mode for better development experience
  reactStrictMode: true,
  // Compress responses
  compress: true,
  // Power optimizations
  poweredByHeader: false,
  // Generate ETags for caching
  generateEtags: true,
  
  // ============================================
  // SECURITY HEADERS
  // Production-grade security configuration
  // ============================================
  async headers() {
    return [
      {
        // Apply to all routes
        source: '/:path*',
        headers: [
          // Strict Transport Security - Force HTTPS
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          // Prevent clickjacking
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          // Prevent MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          // XSS Protection (legacy browsers)
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          // Referrer Policy - Privacy protection
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          // Permissions Policy - Disable unnecessary features
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          },
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://formspree.io https://sankofafamilymedicine.atlas.md https://*.atlas.md",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://sankofafamilymedicine.atlas.md https://*.atlas.md",
              "img-src 'self' data: https: blob:",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://www.google-analytics.com https://formspree.io https://analytics.google.com https://sankofafamilymedicine.atlas.md https://*.atlas.md",
              "frame-src 'self' https://www.google.com https://sankofafamilymedicine.atlas.md https://*.atlas.md",
              "frame-ancestors 'self'",
                "child-src 'self' https://sankofafamilymedicine.atlas.md https://*.atlas.md",
              "form-action 'self' https://formspree.io",
              "base-uri 'self'",
              "object-src 'none'",
              "upgrade-insecure-requests"
            ].join('; ')
          },
          // DNS Prefetch Control
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          }
        ],
      },
      // Cache static assets aggressively
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/documents/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800'
          }
        ]
      }
    ]
  },
  
  // ============================================
  // REDIRECTS
  // SEO-friendly URL management
  // ============================================
  async redirects() {
    return [
      // Redirect common misspellings/variations
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/pricing',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/membership',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/plans',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/doctor',
        destination: '/founder',
        permanent: true,
      },
      {
        source: '/dr-nkrumah',
        destination: '/founder',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/faqs',
        destination: '/faq',
        permanent: true,
      },
      {
        source: '/washington',
        destination: '/locations/washington',
        permanent: true,
      },
      {
        source: '/seattle',
        destination: '/locations/washington/seattle',
        permanent: true,
      },
      {
        source: '/bellevue',
        destination: '/locations/washington/bellevue',
        permanent: true,
      },
    ]
  }
}
module.exports = nextConfig
