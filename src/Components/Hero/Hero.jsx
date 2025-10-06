import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero" id="home" aria-label="PlugIQ hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="hero-eyebrow">PlugIQ • EV Charger Installers</span>
          <h1 className="hero-title">
            EV Charger Installation <br /> Done Right.
          </h1>
          <p className="hero-subtitle">
            Certified residential installs with fast turnaround and transparent
            pricing.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#contact">
              Request a Quote
            </a>
            <a className="btn btn-outline" href="#services">
              View Services
            </a>
          </div>
          <ul className="hero-bullets" aria-label="Key benefits">
            <li>Licensed</li>
            <li>Clean Installs</li>
          </ul>
        </div>

        <div className="hero-art">
          <img
            src="https://images.pexels.com/photos/9799991/pexels-photo-9799991.jpeg"
            alt="EV charger installed in modern garage"
            className="hero-panel"
            loading="eager"
            decoding="async"
            sizes="(min-width: 900px) 560px, 100vw"
          />
          <div className="hero-badge">
            <strong>Level 2</strong>
            <span>Certified Installs</span>
          </div>
        </div>
      </div>
    </div>
  );
}
