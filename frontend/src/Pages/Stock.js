import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/vehicle-listing.css';
import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../Components/UI/SearchBar/SearchBar';

const KenyanStock = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [filteredVehicles, setFilteredVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('http://localhost:7071/api/stock/listing');
        setVehicles(response.data);
        setFilteredVehicles(response.data); // Initialize filteredVehicles with the fetched data
        setLoading(false);
      } catch (err) {
        console.error('Error fetching vehicle data:', err);
        setError(err);
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  const handleCardClick = (vehicleId) => {
    navigate(`/vehicle-details/${vehicleId}`);
  };

  const handleFilteredVehiclesChange = (newFilteredVehicles) => {
    setFilteredVehicles(newFilteredVehicles);
  };

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <h3>{error.message}</h3>
      </div>
    );
  }

  return (
    <>
      <SearchBar vehicles={vehicles} onFilteredVehiclesChange={handleFilteredVehiclesChange} />
      <div className="vehicle-container">
        {filteredVehicles.map((vehicle) => (
          <div className="vehicle-card" key={vehicle.listing_id} onClick={() => handleCardClick(vehicle.listing_id)}>
            <div className="vehicle-image-container">
              <img
                src={vehicle.listingImages && vehicle.listingImages.length > 0 ? vehicle.listingImages[0] : 'default-image-url.jpg'}
                alt={vehicle.listingModel}
                className="vehicle-image"
              />
              {vehicle.featured && <div className="featured-badge">Featured</div>}
            </div>
            <div className="vehicle-details">
              <h3 style={{textTransform:'uppercase'}}>{vehicle.modelYear} {vehicle.listingMake} {vehicle.listingModel} {vehicle.numberOfDoors}-Door {vehicle.exteriorColor}</h3>
              <p className='vehicle-price'>Ksh.{vehicle.listingPrice}</p>
              {/* <FontAwesomeIcon icon={faExchangeAlt}/> Compare */}
              <div className='vehicle-info'>
                <button className='trend-button'>{vehicle.modelYear}</button>
                <button className='trend-button'>{vehicle.transmission}</button>
                <button className='trend-button'>{vehicle.fuelType}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default KenyanStock;
