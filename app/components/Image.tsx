'use client'
import { CldImage } from "next-cloudinary"
import { FC } from "react"

type ImageType = {
  src: string
  alt: string
  width: number
  height: number
}

const Image: FC<ImageType> = ({ src, alt, width, height }) => {
  return (
    <CldImage
      alt={alt}
      src={src}
      width={width}
      height={height}
    />
  )
}

export default Image
