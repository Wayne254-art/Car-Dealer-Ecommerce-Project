

import React from 'react'
import './benefits.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faMoneyBillTransfer, faTrophy } from '@fortawesome/free-solid-svg-icons';

const Benefits = () => {
    return (
        <div className="benefits-container">
            <h2 className="benefits-header">Why choose us?</h2>
            <div className="benefits-content">
                <div className="benefit-item">
                    <div className="benefit-icon" style={{ background: '#FFE8E3' }}>
                        <FontAwesomeIcon icon={faTrophy} style={{ fontSize: '40px' }} />
                    </div>
                    <h3 className="benefit-title">Wide range of brands</h3>
                    <p className="benefit-description">
                        Explore an extensive selection of top car brands. Whether you're looking for luxury, reliability, or affordability, we have the perfect match for your needs.
                        Drive off with confidence.
                    </p>
                </div>
                <div className="benefit-item">
                    <div className="benefit-icon" style={{ background: '#E3FFE8' }}>
                        <FontAwesomeIcon icon={faHandshake} style={{ fontSize: '40px' }} />
                    </div>
                    <h3 className="benefit-title">Trusted by our clients</h3>
                    <p className="benefit-description">
                        Our commitment to exceptional service has earned us the trust of our clients.
                        Experience hassle-free transactions and personalized assistance, ensuring your car buying journey is smooth and satisfying.
                    </p>
                </div>
                <div className="benefit-item">
                    <div className="benefit-icon" style={{ background: '#E3F2FF' }}>
                        <FontAwesomeIcon icon={faMoneyBillTransfer} style={{ fontSize: '40px' }} />
                    </div>
                    <h3 className="benefit-title">Fast & easy financing</h3>
                    <p className="benefit-description">
                        Get behind the wheel quickly with our streamlined financing options. Regardless of your credit history,
                        our expert team will find the best financial solution to fit your budget and needs.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Benefits;
