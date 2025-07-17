import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h2>Our Trusted Services 🛠️</h2>

      <p>
        At <strong>Mana Singarayakonda</strong>, we believe in delivering **safe, reliable, and doorstep services** to all residents and visitors. Every service listed here is **personally verified**, and every individual is **identity-checked** for your peace of mind.
      </p>

      <div className="service-section">
        <h3>🏠 Rentals & House Sales</h3>
        <p>
          Browse verified rental houses (1BHK, 2BHK, 3BHK), apartments, villas, and houses for sale. Each listing includes:
        </p>
        <ul>
          <li>Real images & specs</li>
          <li>Owner contact & verified identity</li>
          <li>Transparent pricing & rental rules</li>
        </ul>
      </div>

      <div className="service-section">
        <h3>🚗 Car Rentals</h3>
        <p>
          Need a car for travel or errands? We offer driver & self-drive cars with:
        </p>
        <ul>
          <li>Verified vehicle documents</li>
          <li>Fuel rules, kilometers/day clearly mentioned</li>
          <li>Trusted owners with contact details</li>
        </ul>
      </div>

      <div className="service-section">
        <h3>🎉 Function Halls</h3>
        <p>
          Find function halls for weddings, parties, and events with:
        </p>
        <ul>
          <li>Daily rental prices & advance details</li>
          <li>Owner contact with verified ID</li>
          <li>Rules about food, decoration, and cleanliness</li>
        </ul>
      </div>

      <div className="service-section">
        <h3>📊 Daily Market Prices</h3>
        <p>
          Stay updated with daily prices of vegetables, fruits, rice, and essentials directly from local vendors.
        </p>
        <ul>
          <li>Updated every morning</li>
          <li>Helps farmers, vendors & buyers</li>
          <li>Contributed by trusted sellers</li>
        </ul>
      </div>

      <div className="service-section">
        <h3>👷‍♂️ Worker Availability</h3>
        <p>
          Book verified local workers for home repairs, construction, painting, plumbing, electricals and more.
        </p>
        <ul>
          <li>All workers are ID-verified</li>
          <li>Rate per day or hour is listed</li>
          <li>Contact directly for scheduling</li>
        </ul>
      </div>

      <div className="service-section">
        <h3>📢 News & Announcements</h3>
        <p>
          Get latest updates from our village — government schemes, public announcements, events, school info, and more.
        </p>
        <ul>
          <li>Posted by verified admins only</li>
          <li>Updated regularly to keep users informed</li>
        </ul>
      </div>

      <div className="security-info">
        <h3>🔐 Your Safety is Our Priority</h3>
        <p>
          Every individual offering services through Mana Singarayakonda must provide:
        </p>
        <ul>
          <li>Valid ID proof (Aadhaar, Voter ID, etc.)</li>
          <li>Mobile verification</li>
          <li>In-person or video verification (for key services)</li>
        </ul>
        <p>
          We ensure that every listing is reviewed by our admin team before it's visible to the public. You can confidently trust the people and services listed on our platform.
        </p>
      </div>
    </div>
  );
};

export default Services;
