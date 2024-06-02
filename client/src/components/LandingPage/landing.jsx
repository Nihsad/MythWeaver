// import React from 'react';
// import { Link } from 'react-router-dom';
// import ScrollImage from '../../../public/images/Scroll.png';
// import Book from '../../../public/images/book.png';
// import Bag from '../../../public/images/bag.png';
// import CoinPurse from '../../../public/images/coin_purse.png';
// import Map from '../../../public/images/map.png';
// import UprightStaff from '../../../public/images/staff_upright.png';
// import UpsideDownStaff from '../../../public/images/staff_upsidedown.png';

// import './landing.css';

// function Landing() {
//   return (
//     <div className="landing-page">
//       <div className="hero">
//         <div className="container">
//           <h1 className="title">MythWeaver</h1>
//           <p>Slogan TBA</p>
//           <Link to="/myth-index" className="cta-button">Start your Adventure</Link>
//         </div>
//       </div>
//       <section className="images-section">
//         <div className="container">
//         <img src={ScrollImage} alt="Scroll" className="scroll-image" />
//         <img src={Book} alt="Book" className="book-image" />
//         <img src={Bag} alt="Bag" className="bag-image" />
//         <img src={CoinPurse} alt="CoinPurse" className="coinpurse-image" />
//         <img src={Map} alt="Map" className="map-image" />
//         <img src={UprightStaff} alt="StaffUpright" className="uprightstaff-image" />
//         <img src={UpsideDownStaff} alt="Upsidedownstaff" className="upsidedownstaff-image" />
//         </div>
//       </section>
//       <footer className="footer">
//         <div className="container">
//           <p>&copy; 2024 MythWeaver. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Landing;


import React from 'react';
import { Link } from 'react-router-dom';
import ScrollImage from '../../../public/images/Scroll.png'; 
import Book from '../../../public/images/book.png'; 
import Bag from '../../../public/images/bag.png';
import CoinPurse from '../../../public/images/coin_purse.png';
import Map from '../../../public/images/map.png'; 
import UprightStaff from '../../../public/images/staff_upright.png'; 
import UpsideDownStaff from '../../../public/images/staff_upsidedown.png'; 

import './landing.css';

function Landing() {
  return (
    <div className="landing-page">
      <div className="hero">
        <div className="container">
          <h1 className="title">MythWeaver</h1>
          <p>Slogan TBA</p>
          <Link to="/myth-index" className="cta-button">Start your Adventure</Link>
        </div>
      </div>
      <section className="images-section">
        <div className="container">
          <img src={ScrollImage} alt="Scroll" className="scroll-image" />
          <img src={Book} alt="Book" className="book-image" />
          <img src={Bag} alt="Bag" className="bag-image" />
          <img src={CoinPurse} alt="CoinPurse" className="coinpurse-image" />
          <img src={Map} alt="Map" className="map-image" />
          <img src={UprightStaff} alt="StaffUpright" className="uprightstaff-image" />
          <img src={UpsideDownStaff} alt="Upsidedownstaff" className="upsidedownstaff-image" />
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 MythWeaver. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
