// import React from 'react';
// import { Link } from 'react-router-dom';
// import './landing.css';

// function Landing() {
//   return (
//     <div className="landing-page">
//       <div className="hero">
//         <div className="container">
//           <h1 className="title">MythWeaver</h1>
//           <p>Slogan TBA </p>
//           <a href="#about" className="cta-button">Start your Adventure</a>
//         </div>
//       </div>
//       <section className="images-section">
//         <div className="container">
//           <img src="/images/image1.jpg" alt="Image 1" className="image"/>
//           <img src="/images/image2.jpg" alt="Image 2" className="image"/>
//           <img src="/images/image3.jpg" alt="Image 3" className="image"/>
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
import './landing.css';

function Landing() {
  return (
    <div className="landing-page">
      <div className="hero">
        <div className="container">
          <h1 className="title">MythWeaver</h1>
          <p>Slogan TBA</p>
          {/* Use Link component for navigation */}
          <Link to="/myth-index" className="cta-button">Start your Adventure</Link>
        </div>
      </div>
      <section className="images-section">
        <div className="container">
          <img src="/images/image1.jpg" alt="Image 1" className="image"/>
          <img src="/images/image2.jpg" alt="Image 2" className="image"/>
          <img src="/images/image3.jpg" alt="Image 3" className="image"/>
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
