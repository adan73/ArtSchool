import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-school">
          <h3>Art School</h3>
          <p>Create. Learn. Grow.</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/classes">Classes</Link>
          <Link to="/artists">Artists</Link>
          <Link to="/events">Events</Link>
          <Link to="/shop">Shop</Link>
        </div>

        <div className="footer-contact">
          <p>info@artschool.com</p>
          <p>050-000-0000</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Art School. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;