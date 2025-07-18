"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string
}

export default function SafeImage({ src, alt, fallbackSrc = "/placeholder.svg", ...props }: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc)
      setHasError(true)
    }
  }

  // Create a placeholder URL if needed
  const placeholderUrl =
    typeof fallbackSrc === "string" && fallbackSrc.startsWith("/placeholder.svg")
      ? `${fallbackSrc}?text=${encodeURIComponent(alt as string)}&width=${props.width || 300}&height=${props.height || 300}`
      : fallbackSrc

  return <Image {...props} src={imgSrc || placeholderUrl} alt={alt} onError={handleError} />
}
