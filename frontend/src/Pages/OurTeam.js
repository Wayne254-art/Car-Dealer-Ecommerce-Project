

import React from 'react';
import '../Styles/our-team.css';
import { Link } from 'react-router-dom';
import WAYNE from '../Assets/Images/WAYNE.jpg';

const OurTeam = () => {
  
  return (
    <div className="team-container">
      <div className="team-member">
        <img src={WAYNE} alt="Wayne_Marwa" className="member-photo" />
        <div className="member-details">
          <h2 style={{ textTransform: 'uppercase' }}>Wayne Marwa</h2>
          <h3>CEO</h3>
          <p><i className="fas fa-phone-alt"></i> (254) 799-703-637</p>
          <p><i className="fas fa-envelope"></i> wayne@elitemotors.co.ke</p>
          <div className="social-icons">
            <Link to="#"><i class="ri-facebook-circle-fill" style={{ fontSize: '30px', cursor: 'pointer' }}></i></Link>
            <Link to="#"><i class="ri-twitter-x-line" style={{ fontSize: '30px', cursor: 'pointer' }}></i></Link>
            <Link to="#"><i class="ri-instagram-line" style={{ fontSize: '30px', cursor: 'pointer' }}></i></Link>
          </div>
        </div>
      </div>
      <div className="team-description">
        <h2><span>Our journey towards excellence</span> has been remarkable. We are committed, passionate, and driven by innovation.</h2>
        <p>At our company, we believe in pushing the boundaries of what's possible. Our team of dedicated professionals works tirelessly to ensure that our clients receive the best services and products. Every milestone we achieve is a testament to our hard work and unwavering commitment to quality.</p>
        <ul>
          <li>Our team is dedicated to continuous improvement and innovation.</li>
          <li>We prioritize customer satisfaction above all else.</li>
          <li>Our journey is marked by numerous successful projects and satisfied clients.</li>
          <li>We are committed to maintaining the highest standards in all our endeavors.</li>
        </ul>
      </div>
    </div>
  );
};

export default OurTeam;
