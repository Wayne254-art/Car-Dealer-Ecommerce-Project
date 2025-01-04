import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/contact-us.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    interestedIn: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7071/api/contact/form/submissions', formData);
      toast.success('Message sent successfully');
      setFormData({
        fullName: '',
        emailAddress: '',
        phoneNumber: '',
        interestedIn: '',
      });
    } catch (error) {
      toast.error('Error sending message. Please try again.');
      console.error(error);
    }
  };

  return (
    <section>
      <Container style={{ marginTop: '30px' }}>
        <Row>
          <div className="cs-page-title">
            <h1 style={{ color: '#000000 !important', marginBottom: '30px' }}>Get in touch</h1>
          </div>
          <Col lg='12' md='12' sm='12' xs='12'>
            <Row>
              <Col lg='3' md='3' sm='6' xs='12'>
                <div className="em-contact-info">
                  <div className="em-text">
                    <h6>Contact Info</h6>
                    <p>Wayne_Auto_Sales # Office Address; Ruiru, Kiambu, Kenya</p>
                  </div>
                </div>
              </Col>
              <Col lg='3' md='3' sm='6' xs='12'>
                <div className="em-contact-info left">
                  <div className="em-text">
                    <h6>Email Address</h6>
                    <p>
                      <Link to="#">waynemotorske@gmail.com</Link>
                      <br />
                      <Link to="#">marwawayne1@gmail.com</Link>
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg='3' md='3' sm='6' xs='12'>
                <div className="em-contact-info left">
                  <div className="em-text">
                    <h6>Phone Numbers</h6>
                    <p>
                      <span>Safaricom: +(254) 799-703-637</span><br />
                      <span>Airtel: +(254) 738-949-924</span>
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg='3' md='3' sm='6' xs='12'>
                <div className="em-contact-info left">
                  <div className="em-text">
                    <h6>Office Timings</h6>
                    <p>
                      <span>WEEK DAYS: 08:00 – 18:00</span><br />
                      <span>SATURDAY: 08:00 – 16:00</span><br />
                      <span>SUNDAY: CLOSED</span>
                    </p>
                  </div>
                </div>
              </Col>
              <div className="em-seprater" style={{ textAlign: 'center' }}></div>
            </Row>
          </Col>
          <Col className='section-fullwidth' lg='12' md='12' sm='12' xs='12'>
            <Row>
              <div className="cs-contact-form">
                <form className="form-container" onSubmit={handleSubmit}>
                  <div className="left-inputs">
                    <div className="cs-form-holder">
                      <div className="input-holder">
                        <input
                          type="text"
                          name="fullName"
                          placeholder="Full Name"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="cs-form-holder">
                      <div className="input-holder">
                        <input
                          type="email"
                          name="emailAddress"
                          placeholder="Email Address"
                          value={formData.emailAddress}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="cs-form-holder">
                      <div className="input-holder">
                        <input
                          type="tel"
                          name="phoneNumber"
                          placeholder="Phone Number"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="right-input">
                    <div className="cs-form-holder">
                      <p>Describe Your issue here;</p>
                      <div className="input-holder">
                        <textarea
                          name="interestedIn"
                          placeholder="I am interested in a price quote on this vehicle. Please contact me at your earliest convenience with your best price for this vehicle"
                          value={formData.interestedIn}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="cf-btn-submit cf-color">
                      <input type="submit" value="Contact Dealer" />
                    </div>
                  </div>
                </form>
              </div>
            </Row>
          </Col>
          <Col lg='12' md='12' sm='12' xs='12'>
            <Row>
              <Col lg="12" md="12" sm="12" xs="12">
                <div>
                  <iframe
                    title="Ruiru Map"
                  loading='lazy'
                    height="350"
                    frameBorder="0"
                    allowFullScreen=""
                    style={{ border: '0px none', width: '100%' }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31829.82170855093!2d36.9513807375533!3d-1.1457993835086028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a0f064c1477%3A0x1f0b5d6a7c3f9d47!2sRuiru%2C%20Kenya!5e0!3m2!1sen!2ske!4v1455785475576&zoom=12&disableDefaultUI=true&mapTypeControl=false&rotateControl=false&fullscreenControl=false"
                  ></iframe>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </section>
  );
}

export default Contact;
