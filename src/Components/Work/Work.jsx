import { useEffect, useState } from "react";
import "./Work.css";

export default function Work() {
  const images = [
    { src: "/images/work1.jpg", alt: "" },
    { src: "/images/work2.png", alt: "" },
    { src: "/images/work3.png", alt: "" },
    // { src: "/images/work4.png", alt: "" },
    { src: "/images/work5.png", alt: "" },
    { src: "/images/work6.png", alt: "" },
    { src: "/images/work7.png", alt: "" },
    // { src: "/images/work8.png", alt: "" },
  ];

  const [active, setActive] = useState(null);

  useEffect(() => {
    function onKey(e) {
      if (active === null) return;
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft")
        setActive((i) => (i - 1 + images.length) % images.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, images.length]);

  return (
    <div className="work" id="work" aria-label="Work gallery">
      <div className="work-inner">
        <div className="work-head">
          <span className="work-eyebrow">Our Work</span>
          <h2 className="work-title">Recent Installations</h2>
          <p className="work-subtitle">
            We pride ourselves in clean workmanship and attention to detail.
          </p>
        </div>

        <div className="work-grid">
          {images.map((img, i) => (
            <button
              key={img.src}
              className="work-card"
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Open image: ${img.alt}`}
            >
              <img
                className="work-img"
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <div className="lightbox-body" onClick={(e) => e.stopPropagation()}>
            <img
              className="lightbox-img"
              src={images[active].src}
              alt={images[active].alt}
            />
            <button
              className="lightbox-close"
              type="button"
              aria-label="Close"
              onClick={() => setActive(null)}
            >
              ×
            </button>
            <button
              className="lightbox-nav prev"
              type="button"
              aria-label="Previous image"
              onClick={() =>
                setActive((i) => (i - 1 + images.length) % images.length)
              }
            >
              ‹
            </button>
            <button
              className="lightbox-nav next"
              type="button"
              aria-label="Next image"
              onClick={() => setActive((i) => (i + 1) % images.length)}
            >
              ›
            </button>
            <div className="lightbox-caption">{images[active].alt}</div>
          </div>
        </div>
      )}
    </div>
  );
}
