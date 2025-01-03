

import React from 'react';
import '../Styles/user-general-setting.css'; 

const UserGeneralSetting = () => {
  return (
    <div className="user-settings-container">
      <div className="user-settings-header">
        <h2 className="user-settings-title">Account Details</h2>
        <div className="user-settings-tabs">
        </div>
      </div>
      <div className="user-settings-content">
        <div className="user-settings-form">
          <div className="user-settings-section">
            <h3 className="user-settings-section-title">Your contact details</h3>
            <div className="user-settings-field">
              <label htmlFor="userName">Name*</label>
              <input type="text" id="userName" className="user-settings-input" />
            </div>
            <div className="user-settings-field">
              <label htmlFor="userLocation">Location</label>
              <input type="text" id="userLocation" className="user-settings-input" />
            </div>
            <div className="user-settings-field">
              <label htmlFor="userPhone">Phone</label>
              <input type="text" id="userPhone" className="user-settings-input" />
            </div>
            <div className="user-settings-field">
              <label htmlFor="userEmail">Email</label>
              <input type="email" id="userEmail" className="user-settings-input" />
            </div>
            {/* <div className="user-settings-field">
              <label htmlFor="userType">Type</label>
              <select id="userType" className="user-settings-select">
                <option>Private seller</option>
                <option>Dealer</option>
              </select>
            </div> */}
            <div className="user-settings-field">
              <label htmlFor="userDescription">Description</label>
              <textarea id="userDescription" className="user-settings-textarea"></textarea>
            </div>
          </div>
        </div>
        <div className="user-settings-photo-section">
          <div className="user-settings-photo">
            <img src="path/to/photo.jpg" alt="User profile" className="user-settings-photo-img" />
            <button className="user-settings-remove-photo">Remove profile</button>
          </div>
        </div>
      </div>
      <div className="user-settings-footer">
        <button className="user-settings-save-btn">Save</button>
      </div>
    </div>
  );
};

export default UserGeneralSetting;
