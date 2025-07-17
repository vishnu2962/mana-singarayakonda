// import React from 'react';

// const Home = () => (
//   <div className="page">
//     <h2>Welcome to Mana Singarayakonda</h2>
//     <p>Your one-stop platform for local services, updates, and announcements.</p>
//   </div>
// );

// export default Home;

import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return (
    <div className="page home">
      <h2>Welcome to Mana Singarayakonda</h2>
      <p>Your one-stop platform for local services, updates, and announcements.</p>

      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        dynamicHeight={false}
      >
        <div>
          <img src="https://www.homepictures.in/wp-content/uploads/2020/12/940-Sq-Ft-2BHK-Modern-Single-Floor-House-and-Free-Plan.jpg" alt="Rental Offer" />
          <p className="legend">🏠 New 2BHK House Available – ₹6,000/month</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/800x300?text=📢+Panchayat+Meeting+on+15th+July+at+4PM" alt="Flash News" />
          <p className="legend">📢 Panchayat Meeting on 15th July at 4 PM</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/800x300?text=🎉+Special+Offer+on+Vegetables+Today!" alt="Offer" />
          <p className="legend">🎉 Special Offer – Tomato ₹25/kg Today Only!</p>
        </div>
      </Carousel>
      <div className="admin-contact-card">
  <img src="https://cdn2.iconfinder.com/data/icons/user-115/32/Artboard_5-512.png" alt="Admin" className="admin-photo" />

  <div className="admin-info">
    <h3>Mana Singarayakonda – Digital Service Hub Admin</h3>
    <p><strong>Inabathina Venkata Sai Vishnu</strong></p>
    <p>
      For listing rental houses, daily market prices, hiring workers, 
      publishing village news, promoting events or businesses, please reach out directly.
    </p>
    <p>
      We help you connect with local people through our growing digital platform – fast, free, and effective.
    </p>

    <div className="admin-actions">
      <a href="tel:+919123456789" className="btn call">📞 Call</a>
      <a href="https://wa.me/919123456789" target="_blank" rel="noopener noreferrer" className="btn whatsapp">💬 WhatsApp</a>
      <a href="mailto:vishnu@example.com" className="btn email">✉️ Email</a>
    </div>
  </div>
</div>

    </div>
  );
};

export default Home;
