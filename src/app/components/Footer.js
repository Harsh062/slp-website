import Image from "next/image";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Logo and Tagline */}
        <div className="footer-column">
          <Image
            src="/logo/slp1.png"
            alt="Stimulus Logo"
            width={100}
            height={60}
            className="footer-logo"
          />
          <p className="footer-tagline">
            Shaping Futures Through Quality Education
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a href="/results">Results</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h4 className="footer-heading">Contact Us</h4>
          <p className="footer-contact">
            📞 +91 94229 26950 <br />
            📍 Kalptaru Hall, Near Agrasen Bhavan,
            <br />
            Balaji Plots, Khamgaon
          </p>
          <div className="footer-youtube-cta">
            <a
              href="https://www.youtube.com/@StimulusLearningPoint"
              target="_blank"
              rel="noopener noreferrer"
              className="youtube-link"
            >
              <Image
                src="/youtube-v2.jpg" // make sure to place a small SVG or PNG icon
                alt="YouTube"
                width={24}
                height={24}
              />
              <span>Watch Us on YouTube</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Stimulus Learning Point. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
