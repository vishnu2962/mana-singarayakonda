// import React, { useState } from 'react';
// import './Rental.css';

// const rentalData = {
//   houses: [
//     {
//       id: 1,
//       type: '2BHK',
//       title: 'Spacious 2BHK House',
//       rent: '₹8,000/month',
//       owner: 'Ravi Kumar',
//       images: [
//         'https://via.placeholder.com/400x250?text=House+1',
//         'https://via.placeholder.com/400x250?text=House+1+Interior',
//       ],
//       ownerImage: 'https://via.placeholder.com/100?text=Ravi',
//       rules: 'No pets. 2 months advance. 11-month lease.',
//       contact: '📞 +91 98765 43210',
//     },
//     {
//       id: 2,
//       type: '1BHK',
//       title: 'Compact 1BHK Apartment',
//       rent: '₹5,000/month',
//       owner: 'Sita Devi',
//       images: [
//         'https://via.placeholder.com/400x250?text=House+2',
//         'https://via.placeholder.com/400x250?text=Living+Area',
//       ],
//       ownerImage: 'https://via.placeholder.com/100?text=Sita',
//       rules: 'Only families. No loud music.',
//       contact: '📞 +91 90123 45678',
//     },
//   ],
//   cars: [
//     {
//       id: 3,
//       title: 'Swift Dzire 2019',
//       rent: '₹1,200/day',
//       owner: 'Naveen',
//       images: [
//         'https://via.placeholder.com/400x250?text=Car+1',
//         'https://via.placeholder.com/400x250?text=Car+Interior',
//       ],
//       ownerImage: 'https://via.placeholder.com/100?text=Naveen',
//       rules: 'Return with full fuel. License required.',
//       contact: '📞 +91 91234 56789',
//     },
//   ],
//   halls: [
//     {
//       id: 4,
//       title: 'Shanthi Function Hall',
//       rent: '₹20,000/day',
//       owner: 'Manohar Rao',
//       images: [
//         'https://via.placeholder.com/400x250?text=Hall+1',
//         'https://via.placeholder.com/400x250?text=Stage+Area',
//       ],
//       ownerImage: 'https://via.placeholder.com/100?text=Manohar',
//       rules: 'Decoration extra. Clean after use.',
//       contact: '📞 +91 99887 77665',
//     },
//   ],
// };

// const Rentals = () => {
//   const [activeCategory, setActiveCategory] = useState('houses');
//   const [selected, setSelected] = useState(null);

//   const categoryData = rentalData[activeCategory];

//   const openDetails = (item) => setSelected(item);
//   const closeDetails = () => setSelected(null);

//   const getCategoryLabel = (key) => {
//     if (key === 'houses') return '🏠 Houses';
//     if (key === 'cars') return '🚗 Cars';
//     if (key === 'halls') return '🎉 Function Halls';
//     return '';
//   };

//   return (
//     <div className="rental-container">
//       <h2>Rental Listings</h2>

//       {/* Category Buttons */}
//       <div className="category-buttons">
//         {['houses', 'cars', 'halls'].map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setActiveCategory(cat)}
//             className={activeCategory === cat ? 'active' : ''}
//           >
//             {getCategoryLabel(cat)}
//           </button>
//         ))}
//       </div>

//       {/* Cards */}
//       <div className="card-grid">
//         {categoryData.map((item) => (
//           <div className="rental-card" key={item.id}>
//             <img src={item.images[0]} alt={item.title} />
//             <h4>{item.title}</h4>
//             <p>{item.type}</p>
//             <p><strong>{item.owner}</strong></p>
//             <p className="price">{item.rent}</p>
//             <button className="view-btn" onClick={() => openDetails(item)}>View</button>
//           </div>
//         ))}
//       </div>

//       {/* Modal for View */}
//       {selected && (
//         <div className="modal-overlay" onClick={closeDetails}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <div className="image-slideshow">
//               {selected.images.map((img, idx) => (
//                 <img key={idx} src={img} alt={`Slide ${idx}`} />
//               ))}
//             </div>
//             <div className="owner-details">
//               <img src={selected.ownerImage} alt="owner" className="owner-img" />
//               <h4>{selected.owner}</h4>
//               <p>{selected.contact}</p>
//               <p><strong>Rent:</strong> {selected.rent}</p>
//               <p><strong>Rules:</strong> {selected.rules}</p>
//               <button onClick={closeDetails}>Close</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Rentals;

import React, { useState } from 'react';
import './Rental.css';

const rentalData = {
  houses: [
    {
      id: 1,
      type: '2BHK',
      title: 'Spacious 2BHK House',
      rent: '₹8,000/month',
      owner: 'Ravi Kumar',
      images: [
        'https://5.imimg.com/data5/ANDROID/Default/2024/1/373217689/RE/CU/WK/106361772/product-jpeg.jpg',
        'https://5.imimg.com/data5/ANDROID/Default/2024/1/373217689/RE/CU/WK/106361772/product-jpeg.jpg',
      ],
      ownerImage: 'https://cdn2.iconfinder.com/data/icons/user-115/32/Artboard_5-512.png',
      rules: 'No pets. 2 months advance. 11-month lease.',
      contact: '📞 +91 98765 43210',
    },
    {
      id: 2,
      type: '1BHK',
      title: 'Compact 1BHK Apartment',
      rent: '₹5,000/month',
      owner: 'Sita Devi',
      images: [
        'https://5.imimg.com/data5/ANDROID/Default/2024/1/373217689/RE/CU/WK/106361772/product-jpeg.jpg',
        'https://5.imimg.com/data5/ANDROID/Default/2024/1/373217689/RE/CU/WK/106361772/product-jpeg.jpg',
      ],
      ownerImage: 'https://cdn2.iconfinder.com/data/icons/user-115/32/Artboard_5-512.png',
      rules: 'Only families. No loud music.',
      contact: '📞 +91 90123 45678',
    },
    {
      id: 3,
      type: '3BHK',
      title: 'Luxury 3BHK Villa',
      rent: '₹12,000/month',
      owner: 'Praveen Rao',
      images: [
        'https://5.imimg.com/data5/ANDROID/Default/2024/1/373217689/RE/CU/WK/106361772/product-jpeg.jpg',
        'https://5.imimg.com/data5/ANDROID/Default/2024/1/373217689/RE/CU/WK/106361772/product-jpeg.jpg',
      ],
      ownerImage: 'https://cdn2.iconfinder.com/data/icons/user-115/32/Artboard_5-512.png',
      rules: 'No smoking. 3 months deposit.',
      contact: '📞 +91 99876 54321',
    },
  ],
  cars: [
    {
      id: 4,
      title: 'Swift Dzire 2019',
      rent: '₹1,200/day',
      owner: 'Naveen',
      images: [
        'https://hips.hearstapps.com/hmg-prod/images/carbon-fiber-shelby-mustang-1600685276.jpg?crop=0.9988636363636364xw:1xh;center,top&resize=980:*',
        'https://hips.hearstapps.com/hmg-prod/images/carbon-fiber-shelby-mustang-1600685276.jpg?crop=0.9988636363636364xw:1xh;center,top&resize=980:*',
      ],
      ownerImage: 'https://cdn2.iconfinder.com/data/icons/user-115/32/Artboard_5-512.png',
      rules: 'Return with full fuel. License required.',
      contact: '📞 +91 91234 56789',
    },
    {
      id: 5,
      title: 'Hyundai i20 Elite',
      rent: '₹1,500/day',
      owner: 'Suresh',
      images: [
        'https://hips.hearstapps.com/hmg-prod/images/carbon-fiber-shelby-mustang-1600685276.jpg?crop=0.9988636363636364xw:1xh;center,top&resize=980:*',
        'https://hips.hearstapps.com/hmg-prod/images/carbon-fiber-shelby-mustang-1600685276.jpg?crop=0.9988636363636364xw:1xh;center,top&resize=980:*',
      ],
      ownerImage: 'https://cdn2.iconfinder.com/data/icons/user-115/32/Artboard_5-512.png',
      rules: 'Max 200km/day. Fuel extra.',
      contact: '📞 +91 99887 77661',
    },
    {
      id: 6,
      title: 'Honda City 2021',
      rent: '₹1,800/day',
      owner: 'Anjali',
      images: [
        'https://hips.hearstapps.com/hmg-prod/images/carbon-fiber-shelby-mustang-1600685276.jpg?crop=0.9988636363636364xw:1xh;center,top&resize=980:*',
        'https://hips.hearstapps.com/hmg-prod/images/carbon-fiber-shelby-mustang-1600685276.jpg?crop=0.9988636363636364xw:1xh;center,top&resize=980:*',
      ],
      ownerImage: 'https://cdn2.iconfinder.com/data/icons/user-115/32/Artboard_5-512.png',
      rules: 'No outstation. Valid ID required.',
      contact: '📞 +91 98765 12345',
    },
  ],
  halls: [
    {
      id: 7,
      title: 'Shanthi Function Hall',
      rent: '₹20,000/day',
      owner: 'Manohar Rao',
      images: [
        'https://5.imimg.com/data5/ANDROID/Default/2024/1/373217689/RE/CU/WK/106361772/product-jpeg.jpg',
        'https://5.imimg.com/data5/ANDROID/Default/2024/1/373217689/RE/CU/WK/106361772/product-jpeg.jpg',
      ],
      ownerImage: 'https://cdn2.iconfinder.com/data/icons/user-115/32/Artboard_5-512.png',
      rules: 'Decoration extra. Clean after use.',
      contact: '📞 +91 99887 77665',
    },
    {
      id: 8,
      title: 'Lakshmi Convention Center',
      rent: '₹25,000/day',
      owner: 'Lakshmi Narayana',
      images: [
        'https://5.imimg.com/data5/ANDROID/Default/2024/1/373217689/RE/CU/WK/106361772/product-jpeg.jpg',
        'https://5.imimg.com/data5/ANDROID/Default/2024/1/373217689/RE/CU/WK/106361772/product-jpeg.jpg',
      ],
      ownerImage: 'https://cdn2.iconfinder.com/data/icons/user-115/32/Artboard_5-512.png',
      rules: 'Only vegetarian food allowed. Clean before leaving.',
      contact: '📞 +91 98765 43210',
    },
    {
      id: 9,
      title: 'Venkateswara Kalyana Mandapam',
      rent: '₹18,000/day',
      owner: 'Venkatesh',
      images: [
        'https://5.imimg.com/data5/ANDROID/Default/2024/1/373217689/RE/CU/WK/106361772/product-jpeg.jpg',
        'https://5.imimg.com/data5/ANDROID/Default/2024/1/373217689/RE/CU/WK/106361772/product-jpeg.jpg',
      ],
      ownerImage: 'https://cdn2.iconfinder.com/data/icons/user-115/32/Artboard_5-512.png',
      rules: '50% advance. No smoking inside.',
      contact: '📞 +91 90000 12345',
    },
  ],
};

const Rentals = () => {
  const [activeCategory, setActiveCategory] = useState('houses');
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const [selected, setSelected] = useState(null);

  const categoryData = rentalData[activeCategory];

  const openDetails = (item) => setSelected(item);
  const closeDetails = () => setSelected(null);

  const getCategoryLabel = (key) => {
    if (key === 'houses') return '🏠 Houses';
    if (key === 'cars') return '🚗 Cars';
    if (key === 'halls') return '🎉 Function Halls';
    return '';
  };

  return (
    <div className="rental-container">
      <h2>Rental Listings</h2>

      <div className="category-buttons">
        {['houses', 'cars', 'halls'].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={activeCategory === cat ? 'active' : ''}
          >
            {getCategoryLabel(cat)}
          </button>
        ))}
      </div>

      <div className="card-grid">
        {categoryData.map((item) => (
          <div className="rental-card" key={item.id}>
            <img src={item.images[0]} alt={item.title} />
            <h4>{item.title}</h4>
            <p><strong>{item.owner}</strong></p>
            <p className="price">{item.rent}</p>
            <button className="view-btn" onClick={() => openDetails(item)}>View</button>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal-overlay" onClick={closeDetails}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
  <div className="image-slideshow">
    <img src={selected.images[currentSlide]} alt={`Slide ${currentSlide}`} />

    <div className="slide-controls">
      <button
        onClick={() =>
          setCurrentSlide((prev) =>
            prev === 0 ? selected.images.length - 1 : prev - 1
          )
        }
      >
        ◀️ Prev
      </button>

      <button
        onClick={() =>
          setCurrentSlide((prev) =>
            prev === selected.images.length - 1 ? 0 : prev + 1
          )
        }
      >
        Next ▶️
      </button>
    </div>
  </div>

  <div className="owner-details">
    <img src={selected.ownerImage} alt="owner" className="owner-img" />
    <h4>{selected.owner}</h4>
    <p>{selected.contact}</p>
    <p><strong>Rent:</strong> {selected.rent}</p>
    <p><strong>Rules:</strong> {selected.rules}</p>
    <button onClick={closeDetails}>Close</button>
  </div>
</div>

        </div>
      )}
    </div>
  );
};

export default Rentals;
