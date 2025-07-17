import React, { useState } from 'react';
import './Workers.css';
import offer1 from '../assets/offer1.jpg';
import offer2 from '../assets/offer2.jpg';
import offer3 from '../assets/offer3.jpg';
import worker1 from '../assets/worker1.jpg';
import worker2 from '../assets/worker2.jpg';
import worker3 from '../assets/worker3.jpg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const workersData = [
  {
  id: 1,
  name: 'Sunil Kumar',
  skill: 'Carpenter',
  phone: '9876517855',
  priceRange: '₹529 – ₹926/day',
  rating: 4,
  image: worker2,
  pastWorkImages: ['offer2.jpg', 'offer3.jpg']
},
{
  id: 2,
  name: 'Naresh Yadav',
  skill: 'AC/Fridge Repair',
  phone: '9876516757',
  priceRange: '₹644 – ₹1036/day',
  rating: 5,
  image: worker3,
  pastWorkImages: ['offer3.jpg', 'offer1.jpg']
},
{
  id: 3,
  name: 'Ravi Yadav',
  skill: 'Mechanic',
  phone: '9876584783',
  priceRange: '₹415 – ₹622/day',
  rating: 3,
  image: worker1,
  pastWorkImages: ['offer1.jpg', 'offer2.jpg']
},
{
  id: 4,
  name: 'Sunil Naik',
  skill: 'Cement Worker',
  phone: '9876576604',
  priceRange: '₹659 – ₹1039/day',
  rating: 4,
  image: worker2,
  pastWorkImages: ['offer2.jpg', 'offer3.jpg']
},
{
  id: 5,
  name: 'Vijay Naik',
  skill: 'Painter',
  phone: '9876596919',
  priceRange: '₹408 – ₹683/day',
  rating: 4,
  image: worker3,
  pastWorkImages: ['offer3.jpg', 'offer1.jpg']
},
{
  id: 6,
  name: 'Vijay Reddy',
  skill: 'Mechanic',
  phone: '9876582196',
  priceRange: '₹624 – ₹898/day',
  rating: 5,
  image: worker1,
  pastWorkImages: ['offer1.jpg', 'offer2.jpg']
},
{
  id: 7,
  name: 'Naresh Reddy',
  skill: 'Painter',
  phone: '9876571234',
  priceRange: '₹645 – ₹810/day',
  rating: 4,
  image: worker2,
  pastWorkImages: ['offer2.jpg', 'offer3.jpg']
},
{
  id: 8,
  name: 'Anil Kumar',
  skill: 'Mechanic',
  phone: '9876536131',
  priceRange: '₹511 – ₹696/day',
  rating: 5,
  image: worker3,
  pastWorkImages: ['offer3.jpg', 'offer1.jpg']
},
{
  id: 9,
  name: 'Ramesh Reddy',
  skill: 'Painter',
  phone: '9876588439',
  priceRange: '₹483 – ₹757/day',
  rating: 5,
  image: worker1,
  pastWorkImages: ['offer1.jpg', 'offer2.jpg']
},
{
  id: 10,
  name: 'Vijay Naik',
  skill: 'AC/Fridge Repair',
  phone: '9876521220',
  priceRange: '₹464 – ₹623/day',
  rating: 3,
  image: worker2,
  pastWorkImages: ['offer2.jpg', 'offer3.jpg']
},
{
  id: 11,
  name: 'Naresh Yadav',
  skill: 'Painter',
  phone: '9876544571',
  priceRange: '₹675 – ₹992/day',
  rating: 4,
  image: worker3,
  pastWorkImages: ['offer3.jpg', 'offer1.jpg']
},
{
  id: 12,
  name: 'Suresh Naik',
  skill: 'AC/Fridge Repair',
  phone: '9876566442',
  priceRange: '₹413 – ₹811/day',
  rating: 5,
  image: worker1,
  pastWorkImages: ['offer1.jpg', 'offer2.jpg']
},
{
  id: 13,
  name: 'Rajesh Yadav',
  skill: 'Plumber',
  phone: '9876547060',
  priceRange: '₹562 – ₹701/day',
  rating: 3,
  image: worker2,
  pastWorkImages: ['offer2.jpg', 'offer3.jpg']
},
{
  id: 14,
  name: 'Vijay Reddy',
  skill: 'AC/Fridge Repair',
  phone: '9876510411',
  priceRange: '₹442 – ₹809/day',
  rating: 3,
  image: worker3,
  pastWorkImages: ['offer3.jpg', 'offer1.jpg']
},
{
  id: 15,
  name: 'Sunil Kumar',
  skill: 'Welder',
  phone: '9876575050',
  priceRange: '₹401 – ₹746/day',
  rating: 3,
  image: worker1,
  pastWorkImages: ['offer1.jpg', 'offer2.jpg']
},
{
  id: 16,
  name: 'Vijay Naik',
  skill: 'Cement Worker',
  phone: '9876593058',
  priceRange: '₹416 – ₹649/day',
  rating: 4,
  image: worker2,
  pastWorkImages: ['offer2.jpg', 'offer3.jpg']
},
{
  id: 17,
  name: 'Vijay Reddy',
  skill: 'Electrician',
  phone: '9876539754',
  priceRange: '₹458 – ₹766/day',
  rating: 3,
  image: worker3,
  pastWorkImages: ['offer3.jpg', 'offer1.jpg']
},
{
  id: 18,
  name: 'Rajesh Kumar',
  skill: 'Carpenter',
  phone: '9876598008',
  priceRange: '₹530 – ₹926/day',
  rating: 5,
  image: worker1,
  pastWorkImages: ['offer1.jpg', 'offer2.jpg']
},
{
  id: 19,
  name: 'Vijay Reddy',
  skill: 'AC/Fridge Repair',
  phone: '9876570086',
  priceRange: '₹669 – ₹859/day',
  rating: 3,
  image: worker2,
  pastWorkImages: ['offer2.jpg', 'offer3.jpg']
},
{
  id: 20,
  name: 'Ravi Reddy',
  skill: 'Electrician',
  phone: '9876532163',
  priceRange: '₹481 – ₹805/day',
  rating: 3,
  image: worker3,
  pastWorkImages: ['offer3.jpg', 'offer1.jpg']
}

];

const Workers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const filteredWorkers = workersData.filter(
    (w) =>
      w.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      w.skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="workers-container">
      <h2>Available Workers</h2>

      <input
        type="text"
        placeholder="Search by name or skill..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <Carousel
  autoPlay
  infiniteLoop
  interval={3000}
  showThumbs={false}
  showStatus={false}
  className="offers-carousel"
>
  <div>
    <img src={offer1} alt="Offer 1" />
    <p className="legend">🎉 New Worker Discounts!</p>
  </div>
  <div>
    <img src={offer2} alt="Offer 2" />
    <p className="legend">💡 Best Electricians Available</p>
  </div>
  <div>
    <img src={offer3} alt="Offer 3" />
    <p className="legend">🚿 Verified Plumbers</p>
  </div>
</Carousel>


      <div className="worker-grid">
        {filteredWorkers.map((worker) => (
          <div className="worker-card" key={worker.id}>
            <img src={worker.image} alt={worker.name} className="worker-img" />
            <h4>{worker.name}</h4>
            <p>🔧 {worker.skill}</p>
            <p>📞 {worker.phone}</p>
            <p>💸 {worker.priceRange}</p>
            <p>{'⭐'.repeat(worker.rating)}</p>
            <button
              className="view-btn"
              onClick={() => {
                setSelectedWorker(worker);
                setSlideIndex(0);
              }}
            >
              View
            </button>
          </div>
        ))}
      </div>

      {selectedWorker && (
        <div className="modal" onClick={() => setSelectedWorker(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedWorker.name} – {selectedWorker.skill}</h3>
            <p>📞 {selectedWorker.phone}</p>
            <p>💸 {selectedWorker.priceRange}</p>
            <p>{'⭐'.repeat(selectedWorker.rating)}</p>

            <div className="worker-slideshow">
              <img
                src={selectedWorker.pastWorkImages[slideIndex]}
                alt="Past Work"
              />
              <div className="slide-controls">
                <button onClick={() => setSlideIndex((slideIndex - 1 + selectedWorker.pastWorkImages.length) % selectedWorker.pastWorkImages.length)}>◀️</button>
                <button onClick={() => setSlideIndex((slideIndex + 1) % selectedWorker.pastWorkImages.length)}>▶️</button>
              </div>
            </div>

            <button className="close-btn" onClick={() => setSelectedWorker(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Workers;
