import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Mana Singarayakonda. All rights reserved.</p>

      <div className="footer-highlight">
        <p><strong>📞 Need Help? Contact Admin for Any Services!</strong></p>
        <p><strong>🚚 We provide A to Z Doorstep Deliveries across Singarayakonda.</strong></p>
        <p>
          <span className="contact-line">📱 Phone: <a href="tel:+919876543210">+91 98765 43210</a></span>
          <br />
          <span className="contact-line">📧 Email: <a href="mailto:admin@singarayakonda.in">admin@singarayakonda.in</a></span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
