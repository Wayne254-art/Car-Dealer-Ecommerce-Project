import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './footer.css';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addSubscription } from '../../store/reducers/mailReducers';

const Footer = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.mail);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      dispatch(addSubscription(email));
    }
  };

  useEffect(() => {
    if (success) {
      toast.success('Subscription successful!');
    }
    if (error) {
      toast.error('Failed to subscribe. Please try again.');
    }
  }, [success, error]);

  return (
    <>
      <footer id='footer'>
        <Container>
          <Row>
            <Col md='5' id='em-footer-item'>
              <div className='em-media'>
                <figure style={{height:'40px',width:'40px'}}>
                  <Link to="#"><img src="#" alt="Elite_Motors" /></Link>
                </figure>
              </div>
              <h4>Our Company</h4>
              <p>
                Welcome to Wayne_Motors, where innovation meets
                automotive excellence. We are passionate about redefining the
                driving experience and empowering our customers with
                top-of-the-line vehicles.
              </p>
            </Col>
            <Col lg='3' md='3' sm='6' xs='12'>
              <div className="widget widget-about-us">
                <div className="widget-section-title">
                  <h6 style={{ fontWeight: "bold" }}>About Us</h6>
                </div>
                <ul>
                  <li><Link to="#">Shopping Tools</Link></li>
                  <li><Link to="#">Trade-In Value</Link></li>
                  <li><Link to="#">Customize Your Own Toyota</Link></li>
                  <li><Link to="#">Search Inventory</Link></li>
                  <li><Link to="#">Find Our Office</Link></li>
                  <li><Link to="#">Local Specials</Link></li>
                  <li><Link to="#">Request a Quote</Link></li>
                  <li><Link to="#">Accessories</Link></li>
                  <li><Link to="#">Find Your Match</Link></li>
                </ul>
              </div>
            </Col>
            <Col lg='3' md='3' sm='6' xs='12'>
              <div className="widget widget-news-letter">
                <div className="widget-section-title">
                  <h6 style={{ fontWeight: "bold" }}>SIGN UP FOR OUR UPDATES</h6>
                </div>
                <p>Recently received some questions from my Clients. Here You can reach us directly.</p>
                <div className="em-form">
                  <form onSubmit={handleSubmit}>
                    <div className="input-holder">
                      <input
                        type="email"
                        placeholder="Enter a Valid Email Address"
                        required
                        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label>
                        <i className="ri-send-plane-fill"></i>
                        <input className="em-bgcolor" type="submit" value={loading ? "Subscribing..." : "Submit"} disabled={loading}/>
                      </label>
                    </div>
                  </form>
                </div>
                <div className="em-social-media">
                  <ul>
                    <li><Link to="#" data-original-title="tiktok"><i className="ri-tiktok-fill"></i></Link></li>
                    <li><Link to="#" data-original-title="instagram"><i className="ri-instagram-fill"></i></Link></li>
                    <li><Link to="#" data-original-title="facebook"><i className="ri-facebook-circle-fill"></i></Link></li>
                    <li><Link to="#" data-original-title="twitter"><i className="ri-twitter-x-fill"></i></Link></li>
                    <li><Link to="#" data-original-title="google"><i className="ri-google-fill"></i></Link></li>
                    <li><Link to="#" data-original-title="threads"><i className="ri-threads-fill"></i></Link></li>
                    <li><Link to="#" data-original-title="linkedin"><i className="ri-linkedin-box-fill"></i></Link></li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="em-copyright">
          <Container>
            <Row>
              <Col lg='6' md='6' sm='12' xs='12'>
                <div className="copyright-text">
                  <p>Copyright @ <Link to="#" className="em-color" style={{ textDecoration: "none", color: "#ff4500" }}>Wayne_Motors</Link> All Rights Reserved</p>
                </div>
              </Col>
              <Col lg='6' md='6' sm='12' xs='12'>
                <div className="em-back-to-top">
                  <address>
                    <i className="ri-phone-line"></i> <Link to="tel:+254799703637">+ (254) 799-703-637 <br></br> + (254) 738-949-924 </Link>
                  </address>
                  <Link className="btn-to-top em-bgcolor" to="#"><i className="ri-arrow-up-circle-line" style={{ color: "#ff4500" }}></i></Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;
