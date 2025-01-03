

import React from 'react';
import '../Styles/user-packages.css'; 

const UserPackages = () => {
  return (
    <div className="user-packages-container">
      <h2 className="user-packages-title">Choose Your Package</h2>
      <div className="user-packages-list">
        <div className="user-package-card">
          <h3 className="user-package-name">Basic Plan</h3>
          <ul className="user-package-features">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button className="user-package-select-btn">Select</button>
        </div>
        <div className="user-package-card">
          <h3 className="user-package-name">Standard Plan</h3>
          <ul className="user-package-features">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
          <button className="user-package-select-btn">Select</button>
        </div>
        <div className="user-package-card">
          <h3 className="user-package-name">Premium Plan</h3>
          <ul className="user-package-features">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
          </ul>
          <button className="user-package-select-btn">Select</button>
        </div>
      </div>
    </div>
  );
};

export default UserPackages;
