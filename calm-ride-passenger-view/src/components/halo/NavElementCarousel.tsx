import { useEffect, useRef } from "react";

type NavElementCarouselProps = {
  images: string[];
  activeIndex: number;
};

export function NavElementCarousel({ images, activeIndex }: NavElementCarouselProps) {
  const activeItemRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    activeItemRef.current?.scrollIntoView?.({
      block: "center",
      inline: "nearest",
      behavior: "smooth",
    });
  }, [activeIndex]);

  return (
    <div className="nav-element-carousel" aria-label="Navigation elements">
      {images.map((src, index) => (
        <img
          key={src}
          ref={index === activeIndex ? activeItemRef : undefined}
          className={`nav-element-carousel__item${index === activeIndex ? " nav-element-carousel__item--active" : ""}`}
          src={src}
          alt={`Navigation element ${index + 1}`}
          loading="lazy"
        />
      ))}
    </div>
  );
}
