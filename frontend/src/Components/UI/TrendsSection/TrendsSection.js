import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
import './trends-section.css';
import { useNavigate } from 'react-router-dom';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="custom-arrow custom-arrow-left"
    >
      &lt;
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="custom-arrow custom-arrow-right"
    >
      &gt;
    </button>
  );
};

const VehicleCarousel = () => {
  const [vehicles, setVehicles] = useState([]);
  const [vehicleCounts, setVehicleCounts] = useState({});
  const navigate = useNavigate();
  const [filterType, setFilterType] = useState('AUDI');

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('http://localhost:7071/api/stock/listing');
        setVehicles(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchVehicleCounts = async () => {
      try {
        const response = await axios.get('http://localhost:7071/api/vehicle/make/count');
        const counts = response.data.reduce((acc, curr) => {
          acc[curr.make] = curr.count;
          return acc;
        }, {});
        setVehicleCounts(counts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVehicles();
    fetchVehicleCounts();
  }, []);

  const handleFilterTypeChange = (type) => {
    setFilterType(type);
  };

  const handleCardClick = (vehicleId) => {
    navigate(`/vehicle-details/${vehicleId}`);
  };

  const filteredVehicles = filterType === 'AUDI' ? vehicles : vehicles.filter(vehicle => vehicle.listingMake === filterType);

  if (!vehicles || vehicles.length === 0) {
    return <p>No vehicles available</p>;
  }

  const isMobile = window.innerWidth <= 464;

  return (
    <>
      <div className='trend-header-container'>
        <h1>Popular Makes</h1>
        <div className="trend-filter-options">
          <button className={`filter-option ${filterType === 'AUDI' ? 'active' : ''}`} onClick={() => handleFilterTypeChange('AUDI')}> AUDI ({vehicleCounts.AUDI || 0})</button>
          <button className={`filter-option ${filterType === 'BMW' ? 'active' : ''}`} onClick={() => handleFilterTypeChange('BMW')}> BMW ({vehicleCounts.BMW || 0})</button>
          <button className={`filter-option ${filterType === 'MERCEDES' ? 'active' : ''}`} onClick={() => handleFilterTypeChange('MERCEDES')}>MERC ({vehicleCounts.MERCEDES || 0})</button>
        </div>
      </div>
      <Carousel
        swipeable
        draggable
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={isMobile}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {filteredVehicles.map((vehicle, index) => (
          <div key={index} className="trend-vehicle-card" onClick={() => handleCardClick(vehicle.listing_id)}>
            <div className="trend-image-container">
              <img
                src={vehicle.listingImages && vehicle.listingImages.length > 0 ? vehicle.listingImages[0] : 'default-image-url.jpg'}
                alt={vehicle.listingModel}
                className="vehicle-image"
              />
              {vehicle.isnew && <div className="featured-badge">Featured</div>}
            </div>
            <div className="trend-info">
              <h4 style={{fontWeight:'bolder',textTransform:'uppercase'}}>{vehicle.listingMake} {vehicle.listingModel} {vehicle.numberOfDoors}-Door {vehicle.exteriorColor}</h4>
              <p className="trend-price">Ksh.{vehicle.listingPrice}</p>
              <p className="trend-details">
                <button className='trend-button'>{vehicle.modelYear}</button>
                <span>{vehicle.listingMileage}Km</span>
                <span>{vehicle.transmission}</span>
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default VehicleCarousel;
