

import React from 'react';
import '../Styles/compare.css'; 

const Compare = () => {
  // Example data for comparison
  const vehicles = [
    {
      id: 1,
      imageUrl: 'path/to/audi-image.jpg',
      name: 'Audi A4 4-door sedan blue',
      price: '$23,000',
      condition: 'Used',
      type: 'Sedan',
      make: 'Audi',
      model: 'A4',
      year: '2020',
      driveType: 'Front Wheel Drive',
      transmission: 'Manual',
      fuelType: 'Diesel',
    },
    {
      id: 2,
      imageUrl: 'path/to/bmw-image.jpg',
      name: 'BMW 8-serie 2-door coupe green',
      price: '$62,000',
      condition: 'New',
      type: 'Coupe',
      make: 'BMW',
      model: '8-Serie',
      year: '2021',
      driveType: 'Front Wheel Drive',
      transmission: 'Automatic',
      fuelType: 'Petrol',
    },
  ];

  return (
    <div className="compare-container">
      <h1 className="compare-title">Compare ({vehicles.length})</h1>
      <button className="compare-back-btn">Back to Search</button>
      <div className="compare-list">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="compare-item">
            <img src={vehicle.imageUrl} alt={vehicle.name} className="compare-item-image" />
            <h2 className="compare-item-name">{vehicle.name}</h2>
            <table className="compare-item-details">
              <tbody>
                <tr>
                  <th>Price</th>
                  <td className="compare-item-price">{vehicle.price}</td>
                </tr>
                <tr>
                  <th>Condition</th>
                  <td>{vehicle.condition}</td>
                </tr>
                <tr>
                  <th>Type</th>
                  <td>{vehicle.type}</td>
                </tr>
                <tr>
                  <th>Make</th>
                  <td>{vehicle.make}</td>
                </tr>
                <tr>
                  <th>Model</th>
                  <td>{vehicle.model}</td>
                </tr>
                <tr>
                  <th>Year</th>
                  <td>{vehicle.year}</td>
                </tr>
                <tr>
                  <th>Drive Type</th>
                  <td>{vehicle.driveType}</td>
                </tr>
                <tr>
                  <th>Transmission</th>
                  <td>{vehicle.transmission}</td>
                </tr>
                <tr>
                  <th>Fuel Type</th>
                  <td>{vehicle.fuelType}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
        <div className="compare-add-item">
          <div className="compare-add-item-content">
            <span className="compare-add-item-icon">+</span>
            <span>Add another listing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
