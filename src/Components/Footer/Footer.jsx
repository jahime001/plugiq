import "./Footer.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation } from "react-router";
import logo from "../../assets/plugiqlogo.png";

const LINKS = {
  phone: "tel:5550000000",
  email: "mailto:hello@plugiq.example",
  maps: "#",
  instagram: "#",
  facebook: "#",
  linkedin: "#",
  yelp: "#",
  googleReviews: "#",
};

export default function Footer() {
  const year = new Date().getFullYear();
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const toHash = (id) => (isHome ? `#${id}` : `/#${id}`);

  const onMissing = (e, label, href) => {
    if (!href || href === "#") {
      e.preventDefault();
      toast.info(`${label} coming soon`, {
        position: "bottom-center",
        autoClose: 2500,
        closeOnClick: true,
        pauseOnHover: false,
        theme: "colored",
      });
    }
  };

  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/">
            <img src={logo} alt="PlugIQ logo" className="footer-logo" />
          </Link>
          <div className="footer-brand-copy">
            <strong className="footer-title">PlugIQ</strong>
            <p className="footer-tag">
              EV Charger Installation • Licensed & Insured
            </p>
          </div>
        </div>

        <div className="footer-contact" aria-label="Contact details">
          <span>(617) 433-9534</span>
          <a href="mailto:plugiqelectrical@gmail.com">
            plugiqelectrical@gmail.com
          </a>
          <span>Massachusetts</span>
        </div>

        <nav className="footer-links" aria-label="Quick links">
          <Link to={toHash("about")}>About</Link>
          <Link to={toHash("services")}>Services</Link>
          <Link to={toHash("work")}>Our Work</Link>
          <Link to={toHash("contact")}>Contact</Link>
        </nav>

        <div className="footer-social" aria-label="Social and reviews">
          <a
            href={LINKS.instagram || "#"}
            target={
              LINKS.instagram && LINKS.instagram !== "#" ? "_blank" : undefined
            }
            rel="noopener noreferrer"
            onClick={(e) => onMissing(e, "Instagram", LINKS.instagram)}
          >
            Instagram
          </a>
          <a
            href={LINKS.facebook || "#"}
            target={
              LINKS.facebook && LINKS.facebook !== "#" ? "_blank" : undefined
            }
            rel="noopener noreferrer"
            onClick={(e) => onMissing(e, "Facebook", LINKS.facebook)}
          >
            Facebook
          </a>
          <a
            href={LINKS.linkedin || "#"}
            target={
              LINKS.linkedin && LINKS.linkedin !== "#" ? "_blank" : undefined
            }
            rel="noopener noreferrer"
            onClick={(e) => onMissing(e, "LinkedIn", LINKS.linkedin)}
          >
            LinkedIn
          </a>
          <a
            href={LINKS.yelp || "#"}
            target={LINKS.yelp && LINKS.yelp !== "#" ? "_blank" : undefined}
            rel="noopener noreferrer"
            onClick={(e) => onMissing(e, "Yelp", LINKS.yelp)}
          >
            Yelp
          </a>
          <a
            href={LINKS.googleReviews || "#"}
            target={
              LINKS.googleReviews && LINKS.googleReviews !== "#"
                ? "_blank"
                : undefined
            }
            rel="noopener noreferrer"
            onClick={(e) => onMissing(e, "Google Reviews", LINKS.googleReviews)}
          >
            Google Reviews
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} PlugIQ. All rights reserved.</p>

        <p>
          <Link to="/privacy" className="footer-legal">
            Privacy Policy
          </Link>
        </p>

        <p>
          Website created by{" "}
          <a
            href="https://jahimecameau.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-credit"
          >
            Jahime Cameau
          </a>
        </p>
      </div>

      <ToastContainer />
    </footer>
  );
}
