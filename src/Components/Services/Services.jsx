import "./Services.css";
import Icon from "@mdi/react";
import {
  mdiHomeOutline,
  mdiElectricSwitch,
  mdiWrenchOutline,
  mdiPowerPlugOutline,
} from "@mdi/js";

export default function Services() {
  const items = [
    {
      title: "Home EV Charger Install",
      desc: "Level 2 chargers installed with neat cable management, permits, and inspection support.",
      icon: mdiHomeOutline,
    },
    {
      title: "Panel Upgrades",
      desc: "Service and panel upgrades to safely support higher charging loads and future expansion.",
      icon: mdiElectricSwitch,
    },
    {
      title: "Maintenance & Repair",
      desc: "Troubleshooting, breaker swaps, relocations, and tune-ups to keep you charging reliably.",
      icon: mdiWrenchOutline,
    },
    {
      title: "Charger Supply",
      desc: "Recommendations and sourcing for trusted EVSE brands, or we’ll install the unit you provide.",
      icon: mdiPowerPlugOutline,
    },
  ];

  return (
    <div className="services" id="services" aria-label="PlugIQ services">
      <div className="services-inner">
        <div className="services-copy">
          <span className="services-eyebrow">Services</span>
          <h2 className="services-title">EV Charging Solutions</h2>
          <p className="services-subtitle">
            Residential installations done right—with clear pricing, tidy
            workmanship, and fast scheduling.
          </p>
        </div>

        <div className="services-grid">
          {items.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-icon" aria-hidden="true">
                <Icon path={s.icon} size={1} />
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <a className="btn btn--outline service-cta" href="#contact">
                Request a Quote
              </a>
            </div>
          ))}
        </div>

        <div className="services-bottom-cta">
          <a className="btn btn--primary" href="#contact">
            Get Your Free Quote
          </a>
        </div>
      </div>
    </div>
  );
}
