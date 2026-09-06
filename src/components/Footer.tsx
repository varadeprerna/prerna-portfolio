import { Heart } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="#home" className="footer-logo">
          Prerna<span>.</span>
        </a>

        <p>
          Designed & built with <Heart size={16} fill="currentColor" /> by
          Prerna Varade
        </p>

        <p className="footer-year">
          © {currentYear} Prerna Varade. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;