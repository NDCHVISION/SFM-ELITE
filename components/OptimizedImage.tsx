'use client'

import { useState } from 'react'
import Image, { ImageProps } from 'next/image'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoadingComplete'> {
  skeletonClassName?: string
  fadeBorder?: 'none' | 'subtle' | 'strong' | 'elite'
}

export default function OptimizedImage({ 
  className = '', 
  skeletonClassName = '',
  fadeBorder = 'elite',
  alt,
  ...props 
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Determine fade border class
  const fadeClass = fadeBorder === 'none' ? '' 
    : fadeBorder === 'subtle' ? 'image-fade-border'
    : fadeBorder === 'strong' ? 'image-fade-border-strong'
    : 'image-fade-elite'

  return (
    <div className={`relative overflow-hidden ${fadeClass} ${skeletonClassName}`}>
      {/* Skeleton loader */}
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-sfm-cream via-white to-sfm-cream animate-pulse"
          aria-hidden="true"
        />
      )}
      
      <Image
        {...props}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  )
}
