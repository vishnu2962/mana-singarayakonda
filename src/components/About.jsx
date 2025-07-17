import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Mana Singarayakonda 🌾</h2>

      <p>
        <strong>Mana Singarayakonda</strong> is not just a website — it's the digital heart of our hometown. Built for the people, by the people, this platform brings essential services, updates, and opportunities right to your fingertips.
      </p>

      <p>
        Whether you're searching for a home to rent, checking daily vegetable prices, hiring a skilled worker, or finding the perfect function hall — we’ve got you covered.
      </p>

      <p>
        <strong>⚡ Key Features:</strong>
        <ul>
          <li>🏡 Find houses, cars, and function halls for rent with real photos and contact details.</li>
          <li>📢 Stay updated with daily market prices, village news, and events.</li>
          <li>🛠️ Discover available workers like plumbers, electricians, carpenters, and more.</li>
          <li>📦 <strong>Contact directly for A to Z doorstep services</strong> — groceries, repairs, cleaning, delivery, and more.</li>
          <li>📞 One-click options to Call, WhatsApp, or Email the service providers and admins.</li>
        </ul>
      </p>

      <p>
        Our goal is simple: <strong>bring Singarayakonda together on a single digital platform</strong> where every resident and visitor can benefit from fast, reliable, and trusted local information.
      </p>

      <div className="quote-box">
        <p>
          <em>“From daily essentials to emergency services — Mana Singarayakonda brings the village to your doorstep.”</em>
        </p>
        <p className="admin-sign">– Mana Singarayakonda Team</p>
      </div>
    </div>
  );
};

export default About;
