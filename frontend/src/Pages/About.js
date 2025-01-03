import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import '../Styles/about.css';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import partnerImg1 from '../Assets/Extra-Images/partner-img-1.jpg';
import partnerImg2 from '../Assets/Extra-Images/partner-img-2.jpg';
import partnerImg3 from '../Assets/Extra-Images/partner-img-3.jpg';
import partnerImg4 from '../Assets/Extra-Images/partner-img-4.jpg';
import partnerImg5 from '../Assets/Extra-Images/partner-img-5.jpg';
import partnerImg6 from '../Assets/Extra-Images/partner-img-6.jpg';
import { Col, Container, Row } from 'reactstrap';

const About = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get('http://localhost:7071/api/team/member/list');
        setTeamMembers(response.data);
      } catch (error) {
        toast.error('Error fetching team members. Please try again.');
        console.error('Error fetching team members:', error);
      }
    };

    fetchTeamMembers();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
    <h1 style={{marginLeft:'50px',marginTop:'30px',fontWeight:'bolder'}}>About Us</h1>
      <Container style={{marginTop:'30px'}}>
        <Row>
          <Col lg='6' md='6' sm='12' xs='12'>
            <div className='em-column-text'>
              <h2 style={{ fontSize: "26px" }}>Discover Your Driving Passion</h2>
              <p style={{ fontSize: "16px", fontWeight: "bold" }}>Welcome to our automotive world, where passion meets innovation. Explore our diverse range of vehicles and experience the thrill of driving with us.</p>
              <ul className='em-icon-list'>
                <li style={{ listStyleType: "none", fontSize: "18px", fontWeight: "bold" }}><i class="ri-checkbox-circle-fill" style={{ color: '#ff2121' }}></i> Exceptional Quality</li>
                <li style={{ listStyleType: "none", fontSize: "18px", fontWeight: "bold" }}><i class="ri-checkbox-circle-fill" style={{ color: '#ff2121' }}></i> Personalized Experience</li>
                <li style={{ listStyleType: "none", fontSize: "18px", fontWeight: "bold" }}><i class="ri-checkbox-circle-fill" style={{ color: '#ff2121' }}></i> Innovation and Technology</li>
                <li style={{ listStyleType: "none", fontSize: "18px", fontWeight: "bold" }}><i class="ri-checkbox-circle-fill" style={{ color: '#ff2121' }}></i> Customer Satisfaction</li>
              </ul>
              <Link to="/contact" className="contact-us-btn" style={{ textDecoration: "none", marginTop: "30px"}}>Contact us</Link>
            </div>
          </Col>
          <Col lg='6' md='6' sm='12' xs='12'>
            <div className='em-video-frame'>
              <iframe width="560" height="340" src="https://www.youtube.com/embed/7XDmWoZcSsw?si=skoIYOfZ_isIV3kf" frameBorder="0" allowFullScreen title="YouTube Video"></iframe>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="about-container">
        <div className="team-section">
          <div className="team-info">
            <h2>Our team</h2>
            <ul>
              <li><i class="ri-checkbox-circle-fill" style={{ color: '#ff2121' }}></i> Experienced professionals in the automotives</li>
              <li><i class="ri-checkbox-circle-fill" style={{ color: '#ff2121' }}></i> Provide exceptional customer service</li>
              <li><i class="ri-checkbox-circle-fill" style={{ color: '#ff2121' }}></i> Innovative solutions tailored to your needs</li>
              <li><i class="ri-checkbox-circle-fill" style={{ color: '#ff2121' }}></i> Committed to continuous learning and growth</li>
              <li><i class="ri-checkbox-circle-fill" style={{ color: '#ff2121' }}></i> Strong collaboration and teamwork</li>
            </ul>
            <Link to="/team" className="learn-more-btn" style={{textDecoration: 'none'}}>Learn more</Link>
          </div>
          <div className="team-members">
            {teamMembers.map((member) => (
              <div className="team-member" key={member.id}>
                <img src={`http://localhost:7071/uploads/${member.images}`} alt={`${member.firstName} ${member.lastName}`} />
                <div className="member-info">
                  <h3>{member.firstName} {member.lastName}</h3>
                  <p style={{ borderBottom: '1px solid gray', fontWeight: 'bold' }}>{member.role}</p>
                  <p>{member.email}</p>
                  <p>{member.contact}</p>
                </div>
                <div className="contact-icons">
                  <div className="icon-circle">
                    <FontAwesomeIcon icon={faPhone}  style={{fontSize:'1.5em',color:'#ffffff',cursor:'pointer'}}/>
                  </div>
                  <div className="icon-circle">
                    <FontAwesomeIcon icon={faEnvelope}  style={{fontSize:'1.5em',color:'#ffffff',cursor:'pointer'}}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ToastContainer />
      </div>
      <div className='make-logo'>
        <Slider {...settings}>
          <div>
            <Link to="#"><img src={partnerImg1} alt="" /></Link>
          </div>
          <div>
            <Link to="#"><img src={partnerImg2} alt="" /></Link>
          </div>
          <div>
            <Link to="#"><img src={partnerImg3} alt="" /></Link>
          </div>
          <div>
            <Link to="#"><img src={partnerImg4} alt="" /></Link>
          </div>
          <div>
            <Link to="#"><img src={partnerImg5} alt="" /></Link>
          </div>
          <div>
            <Link to="#"><img src={partnerImg6} alt="" /></Link>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default About;
