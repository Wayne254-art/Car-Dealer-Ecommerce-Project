

import React, { useState } from 'react';
import '../Styles/register.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    sellerType: 'private',
    acceptedPrivacyPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="signup-form">
      <h2>Register</h2>
      <p>Create new account today.</p>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          name="firstName"
          placeholder="FirstName*"
          value={formData.firstName}
          onChange={handleChange}
          className="em-input-field"
          style={{width:'100%'}}
        />
      <input
          type="text"
          name="lastName"
          placeholder="LastName*"
          value={formData.lastName}
          onChange={handleChange}
          className="em-input-field"
          style={{width:'100%'}}
        />
        <input
          type="text"
          name="username"
          placeholder="Username*"
          value={formData.username}
          onChange={handleChange}
          className="em-input-field"
          style={{width:'100%'}}
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          className="em-input-field"
          style={{width:'100%'}}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="em-input-field"
          style={{width:'100%'}}
        />
        <input
          type="password"
          name="password"
          placeholder="Password*"
          value={formData.password}
          onChange={handleChange}
          className="em-input-field"
        />
        <div className="seller-type">
          <label>
            <input
              type="radio"
              name="sellerType"
              value="private"
              checked={formData.sellerType === 'private'}
              onChange={handleChange}
            />
            Private seller
          </label>
          <label>
            <input
              type="radio"
              name="sellerType"
              value="business"
              checked={formData.sellerType === 'business'}
              onChange={handleChange}
            />
            Business seller
          </label>
        </div>
        <div className="privacy-policy">
          <label>
            <input
              type="checkbox"
              name="acceptedPrivacyPolicy"
              checked={formData.acceptedPrivacyPolicy}
              onChange={handleChange}
            />
            I accept the <a href="/privacy-policy" className="privacy-link">privacy policy</a>
          </label>
        </div>
        <button type="submit" className="em-register-btn">Register</button>
      </form>
    </div>
  );
};

export default SignupForm;
