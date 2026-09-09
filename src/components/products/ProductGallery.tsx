"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProductImage } from "@/src/types/product";

type ProductGalleryProps = {
  images: ProductImage[];
  preserveImageColors?: boolean;
};

export function ProductGallery({ images, preserveImageColors = false }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];

  if (!activeImage) return null;

  return (
    <div className={`product-gallery ${preserveImageColors ? "true-color-images" : ""}`}>
      <figure className="product-gallery-stage">
        <div className="product-gallery-media">
          <Image
            key={activeImage.src}
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            preload={activeIndex === 0}
            loading={activeIndex === 0 ? undefined : "lazy"}
            sizes="(max-width: 560px) calc(100vw - 1.25rem), (max-width: 820px) calc(100vw - 2rem), 52vw"
          />
        </div>
        <figcaption className="product-gallery-caption" aria-live="polite">
          <span>{activeImage.caption ?? activeImage.alt}</span>
          <span className="product-gallery-count" aria-hidden="true">
            {activeIndex + 1} / {images.length}
          </span>
          <span className="sr-only">Image {activeIndex + 1} of {images.length}</span>
        </figcaption>
      </figure>

      {images.length > 1 && (
        <div className="product-gallery-thumbnails" role="group" aria-label="Choose a product view">
          {images.map((image, index) => (
            <button
              className="product-gallery-thumbnail"
              type="button"
              aria-label={`Show ${image.caption ?? image.alt}`}
              aria-pressed={activeIndex === index}
              onClick={() => setActiveIndex(index)}
              key={image.src}
            >
              <Image src={image.src} alt="" aria-hidden="true" fill sizes="(max-width: 560px) 68px, 76px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
