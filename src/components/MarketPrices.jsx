import React, { useState } from 'react';
import './MarketPrices.css';
import vegShop from '../assets/veg-shop.jpg';
import meatShop from '../assets/meat-shop.jpg';
import kiranaShop from '../assets/kirana-shop.jpg';
import tomato from '../assets/tomato.jpg';
import onion from '../assets/onion.jpg';
import chicken from '../assets/chicken.jpg';
import mutton from '../assets/mutton.jpg';
import rice from '../assets/rice.jpg';
import dal from '../assets/dal.jpg';

const shopData = [
  {
    id: 1,
    name: 'Fresh Veggies Center',
    category: 'Vegetables',
    image: vegShop,
    items: [
      { name: 'Tomato', price: '₹20/kg', image: tomato },
      { name: 'Onion', price: '₹25/kg', image: onion }
    ]
  },
  {
    id: 2,
    name: 'Singarayakonda Chicken Mart',
    category: 'Meat',
    image: meatShop,
    items: [
      { name: 'Chicken', price: '₹180/kg', image: chicken },
      { name: 'Mutton', price: '₹600/kg', image: mutton }
    ]
  },
  {
    id: 3,
    name: 'Sri Sai Kirana Store',
    category: 'Kirana',
    image: kiranaShop,
    items: [
      { name: 'Rice (25kg)', price: '₹1200', image: rice },
      { name: 'Toor Dal (1kg)', price: '₹110', image: dal }
    ]
  }
];

const MarketPrices = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedShop, setSelectedShop] = useState(null);

  const filteredShops = shopData.filter(shop =>
    shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shop.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="market-container">
      <h2>🛒 Market Prices in Singarayakonda</h2>

      <input
        type="text"
        placeholder="Search shops or categories..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="shop-grid">
        {filteredShops.map((shop) => (
          <div className="shop-card" key={shop.id}>
            <img src={shop.image} alt={shop.name} className="shop-image" />
            <h4>{shop.name}</h4>
            <p>🗂️ {shop.category}</p>
            <button className="view-btn" onClick={() => setSelectedShop(shop)}>View</button>
          </div>
        ))}
      </div>

      {selectedShop && (
        <div className="modal" onClick={() => setSelectedShop(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedShop.name}</h3>
            <p>🗂️ Category: {selectedShop.category}</p>
            <div className="items-grid">
              {selectedShop.items.map((item, idx) => (
                <div className="item-card" key={idx}>
                  <img src={item.image} alt={item.name} />
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                </div>
              ))}
            </div>
            <button className="close-btn" onClick={() => setSelectedShop(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketPrices;
