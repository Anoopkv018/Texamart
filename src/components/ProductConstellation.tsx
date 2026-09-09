"use client";

import Image from "next/image";
import type { PointerEvent, ReactNode } from "react";
import { useEffect, useRef } from "react";

type ReverseParallaxProps = {
  children: ReactNode;
  className: string;
  label: string;
};

function ReverseParallax({ children, className, label }: ReverseParallaxProps) {
  const animationFrame = useRef<number | null>(null);

  useEffect(() => () => {
    if (animationFrame.current !== null) cancelAnimationFrame(animationFrame.current);
  }, []);

  const writePosition = (element: HTMLDivElement, x: number, y: number) => {
    if (animationFrame.current !== null) cancelAnimationFrame(animationFrame.current);
    animationFrame.current = requestAnimationFrame(() => {
      const style = element.style;
      style.setProperty("--parallax-x-sm", `${x * 10}px`);
      style.setProperty("--parallax-y-sm", `${y * 10}px`);
      style.setProperty("--parallax-x-md", `${x * 19}px`);
      style.setProperty("--parallax-y-md", `${y * 19}px`);
      style.setProperty("--parallax-x-lg", `${x * 31}px`);
      style.setProperty("--parallax-y-lg", `${y * 31}px`);
      element.dataset.parallaxActive = x === 0 && y === 0 ? "false" : "true";
    });
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const reverseX = ((event.clientX - bounds.left) / bounds.width - 0.5) * -2;
    const reverseY = ((event.clientY - bounds.top) / bounds.height - 0.5) * -2;
    writePosition(event.currentTarget, reverseX, reverseY);
  };

  const onPointerLeave = (event: PointerEvent<HTMLDivElement>) => {
    writePosition(event.currentTarget, 0, 0);
  };

  return (
    <div
      className={className}
      data-parallax-active="false"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      aria-label={label}
      role="img"
    >
      {children}
    </div>
  );
}

type ProductConstellationProps = {
  variant: "apparel" | "gifts";
  className?: string;
};

export function ProductConstellation({ variant, className = "" }: ProductConstellationProps) {
  if (variant === "apparel") {
    return (
      <ReverseParallax
        className={`product-constellation apparel-constellation ${className}`}
        label="Three views of a custom green collar T-shirt"
      >
        <span className="constellation-index" aria-hidden="true">COLLAR T-SHIRT / 03 VIEWS</span>
        <span className="constellation-line constellation-line-one" aria-hidden="true" />
        <span className="constellation-line constellation-line-two" aria-hidden="true" />
        <span className="constellation-layer depth-sm apparel-back" aria-hidden="true">
          <Image src="/images/products/collar-tshirt-back.webp" alt="" fill sizes="(max-width: 820px) 42vw, 18vw" />
        </span>
        <span className="constellation-layer depth-md apparel-side" aria-hidden="true">
          <Image src="/images/products/collar-tshirt-side.webp" alt="" fill sizes="(max-width: 820px) 46vw, 20vw" />
        </span>
        <span className="constellation-layer depth-lg apparel-main">
          <Image
            src="/images/products/collar-tshirt-front.webp"
            alt="Model wearing a green custom collar T-shirt"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 820px) 58vw, 25vw"
          />
        </span>
      </ReverseParallax>
    );
  }

  return (
    <ReverseParallax
      className={`product-constellation gift-constellation ${className}`}
      label="A diary, engraved pen and bottle arranged as a corporate gift set"
    >
      <span className="constellation-index" aria-hidden="true">GIFT SET / 03 PIECES</span>
      <span className="constellation-line constellation-line-one" aria-hidden="true" />
      <span className="constellation-line constellation-line-two" aria-hidden="true" />
      <span className="constellation-layer depth-sm gift-diary">
        <Image src="/images/products/diary-black.png" alt="Black branded diary" fill sizes="(max-width: 820px) 50vw, 20vw" />
      </span>
      <span className="constellation-layer depth-md gift-bottle">
        <Image src="/images/products/corporate-gift-black-bottle.png" alt="Black custom bottle with a carry strap" fill sizes="(max-width: 820px) 24vw, 10vw" />
      </span>
      <span className="constellation-layer depth-lg gift-pen">
        <Image src="/images/products/metal-pen-customisation.png" alt="Custom engraved metal pen" fill sizes="(max-width: 820px) 72vw, 30vw" />
      </span>
    </ReverseParallax>
  );
}
