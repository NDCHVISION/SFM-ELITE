export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sfm-cream">
      <div className="text-center">
        {/* Animated Logo Placeholder */}
        <div className="relative w-16 h-16 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-sfm-gold/20" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-sfm-gold animate-spin" />
        </div>
        
        {/* Loading Text */}
        <p className="text-sfm-navy font-display text-lg">Loading...</p>
        <p className="text-muted text-sm mt-1">Medicine That Remembers</p>
      </div>
    </div>
  )
}
