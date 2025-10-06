import "./About.css";
import Icon from "@mdi/react";
import {
  mdiShieldCheck,
  mdiClockFast,
  mdiClipboardCheckOutline,
} from "@mdi/js";

export default function About() {
  const features = [
    {
      title: "Certified Installers",
      desc: "State-licensed electricians with dedicated EV charger experience.",
      icon: mdiShieldCheck,
    },
    {
      title: "Fast Turnaround",
      desc: "Streamlined scheduling, residential installs done in a day.",
      icon: mdiClockFast,
    },
    {
      title: "Transparent Pricing",
      desc: "Upfront quotes with clear scope, materials, and permitting guidance.",
      icon: mdiClipboardCheckOutline,
    },
  ];

  return (
    <div className="about" id="about" aria-label="About PlugIQ">
      <div className="about-inner">
        <div className="about-copy">
          <span className="about-eyebrow">About Us</span>
          <h2 className="about-title">Why Choose PlugIQ</h2>
          <p className="about-text">
            PlugIQ provides residential EV charger installations with safety,
            neat workmanship, and clear communication from start to finish. From
            site assessment to final inspection, we make charging at home or
            work simple and reliable.
          </p>
          <ul className="about-list">
            <li>Level 2 chargers and panel upgrades</li>
            <li>Clean cable management and mounting</li>
          </ul>
          <div className="about-cta">
            <a href="#contact" className="btn btn--primary">
              Get a Free Quote
            </a>
            <a href="#services" className="btn btn--outline">
              Our Services
            </a>
          </div>
        </div>

        <div className="about-grid">
          {features.map((f) => (
            <div key={f.title} className="about-card">
              <div className="about-icon" aria-hidden="true">
                <Icon path={f.icon} size={1} />
              </div>
              <h3 className="about-card-title">{f.title}</h3>
              <p className="about-card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
