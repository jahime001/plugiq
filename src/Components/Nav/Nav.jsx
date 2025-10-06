import logo from "../../assets/plugiqlogo.png";
import "./Nav.css";
import { Link } from "react-router";
export default function Nav() {
  return (
    <div className="nav-container">
      <Link to="/" className="nav-logo">
        <img src={logo} alt="PlugIQ" className="logo-img" />
        <h1>PlugIQ</h1>
      </Link>
      <div className="quote btn">
        <a href="#contact">Get a Quote</a>
      </div>
    </div>
  );
}
