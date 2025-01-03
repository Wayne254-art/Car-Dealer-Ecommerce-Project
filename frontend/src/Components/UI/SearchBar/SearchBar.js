import React, { useState, useEffect, useRef } from 'react';
import './Search-bar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const FilterBar = ({ vehicles, onFilteredVehiclesChange }) => {
    const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
    const advancedFiltersRef = useRef(null);
    const [filters, setFilters] = useState({
        make: '',
        model: '',
        distance: '',
        type: '',
        price: '',
        maxPrice: '',
        mileage: '',
        horsePower: '',
        fuelType: '',
        transmission: '',
        exteriorcolor: '',
        interiorcolor: '',
        doors: '',
        cylinders: '',
        minYear: '',
        maxYear: '',
        vin: ''
    });
    const [filterType, setFilterType] = useState('All');
    const [vehicleCounts, setVehicleCounts] = useState({ all: 0, new: 0, used: 0 });

    useEffect(() => {
        const fetchVehicleCounts = async () => {
            try {
                const response = await axios.get('http://localhost:7071/api/vehicle/counts');
                setVehicleCounts(response.data);
            } catch (err) {
                console.error('Error fetching vehicle counts:', err);
            }
        };

        fetchVehicleCounts();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedFilters = { ...filters, [name]: value };
        setFilters(updatedFilters);
    };

    const handleFilterTypeChange = (type) => {
        setFilterType(type);
        console.log(`Filter type changed to: ${type}`);
    };

    useEffect(() => {
        console.log('Current filters:', filters);
        console.log('Current filter type:', filterType);
        const filteredVehicles = vehicles.filter((vehicle) => {
            const matchesMake = !filters.make || vehicle.listingMake?.toLowerCase().includes(filters.make.toLowerCase());
            const matchesModel = !filters.model || vehicle.listingModel?.toLowerCase().includes(filters.model.toLowerCase());
            const matchesDistance = !filters.distance || vehicle.listingMileage <= Number(filters.distance);
            const matchesType = !filters.type || vehicle.listingType?.toLowerCase().includes(filters.type.toLowerCase());
            const matchesPrice = !filters.price || vehicle.listingPrice >= Number(filters.price);
            const matchesMaxPrice = !filters.maxPrice || vehicle.listingPrice <= Number(filters.maxPrice);
            const matchesMileage = !filters.mileage || vehicle.listingMileage <= Number(filters.mileage);
            const matchesHorsePower = !filters.horsePower || vehicle.horsePower <= Number(filters.horsePower.toLowerCase());
            const matchesFuelType = !filters.fuelType || vehicle.fuelType?.toLowerCase().includes(filters.fuelType.toLowerCase());
            const matchesTransmission = !filters.transmission || vehicle.transmission?.toLowerCase().includes(filters.transmission.toLowerCase());
            const matchesExteriorColor = !filters.exteriorcolor || vehicle.exteriorColor?.toLowerCase().includes(filters.exteriorcolor.toLowerCase());
            const matchesInteriorColor = !filters.interiorcolor || vehicle.interiorColor?.toLowerCase().includes(filters.interiorcolor.toLowerCase());
            const matchesDoors = !filters.doors || vehicle.noOfDoors === Number(filters.doors);
            const matchesCylinders = !filters.cylinders || vehicle.listingCylinders === Number(filters.cylinders);
            const matchesMinYear = !filters.minYear || vehicle.modelYear >= Number(filters.minYear);
            const matchesMaxYear = !filters.maxYear || vehicle.modelYear <= Number(filters.maxYear);
            const matchesVin = !filters.vin || vehicle.listingVin?.toLowerCase().includes(filters.vin.toLowerCase());

            return matchesMake && matchesModel && matchesDistance && matchesType && matchesPrice && matchesMaxPrice && matchesMileage &&
                matchesHorsePower && matchesFuelType && matchesTransmission && matchesExteriorColor && matchesInteriorColor &&
                matchesDoors && matchesCylinders && matchesMinYear && matchesMaxYear && matchesVin;
        }).filter((vehicle) => {
            if (filterType === 'All') return true;
            if (filterType === 'New') return vehicle.listingCondition === 'new';
            if (filterType === 'Used') return vehicle.listingCondition === 'used';
            return true;
        });
        
        // console.log('Filtered vehicles:', filteredVehicles);
        onFilteredVehiclesChange(filteredVehicles);
    }, [filters, filterType, vehicles, onFilteredVehiclesChange]);

    const toggleAdvancedFilters = () => {
        setShowAdvancedFilters(!showAdvancedFilters);
    };

    return (
        <>
            <h1 style={{ display: 'flex', justifyContent: 'center', paddingTop: '30px' }}>Find Your Dream Car</h1>
            <div className="filter-bar">
                <div className='display-filter' style={{ width: '100%' }}>
                    <input name="make" value={filters.make} onChange={handleChange} className="filter-input" placeholder='Make' />
                    <input name="model" value={filters.model} onChange={handleChange} className="filter-input" placeholder='Model' />
                    <input type="number" name="distance" value={filters.distance} placeholder="Mileage" onChange={handleChange} className="filter-input" />
                    <input name="type" value={filters.type} onChange={handleChange} className="filter-input" placeholder='Type' />
                </div>
                <div
                    className={`advanced-filters ${showAdvancedFilters ? 'show' : ''}`}
                    ref={advancedFiltersRef}
                    style={{
                        maxHeight: showAdvancedFilters ? `${advancedFiltersRef.current.scrollHeight}px` : '0px',
                        transition: 'max-height 0.5s ease-out',
                        overflow: 'hidden'
                    }}
                >
                    <input type="number" name="price" value={filters.price} placeholder="Price" onChange={handleChange} className="filter-input" />
                    <input type="number" name="maxPrice" value={filters.maxPrice} placeholder="Max Price" onChange={handleChange} className="filter-input" />
                    <input type="number" name="mileage" value={filters.mileage} placeholder="Mileage" onChange={handleChange} className="filter-input" />
                    <input name="horsePower" value={filters.horsePower} onChange={handleChange} className="filter-input" placeholder='Horse Power' />
                    <input name="fuelType" value={filters.fuelType} onChange={handleChange} className="filter-input" placeholder='Fuel Type' />
                    <input name="transmission" value={filters.transmission} onChange={handleChange} className="filter-input" placeholder='Transmission' />
                    <input name="exteriorcolor" value={filters.exteriorcolor} onChange={handleChange} className="filter-input" placeholder='Exterior Color' />
                    <input name="interiorcolor" value={filters.interiorcolor} onChange={handleChange} className="filter-input" placeholder='Interior Color' />
                    <input name="doors" value={filters.doors} onChange={handleChange} className="filter-input" placeholder='Number of Doors' />
                    <input name="cylinders" value={filters.cylinders} onChange={handleChange} className="filter-input" placeholder='Number of Cylinders' />
                    <input type="number" name="minYear" value={filters.minYear} placeholder="Min Year" onChange={handleChange} className="filter-input" />
                    <input type="number" name="maxYear" value={filters.maxYear} placeholder="Max Year" onChange={handleChange} className="filter-input" />
                    {/* <input type="text" name="vin" value={filters.vin} placeholder="VIN" onChange={handleChange} className="filter-input" /> */}
                </div>
                <button className="filter-toggle" onClick={toggleAdvancedFilters}>
                    <FontAwesomeIcon icon={faFilter} /> More Filters
                </button>
                <div className="filter-options">
                    <span className={`filter-option ${filterType === 'All' ? 'active' : ''}`} onClick={() => handleFilterTypeChange('All')}> All ({vehicleCounts.all})</span>
                    <span className={`filter-option ${filterType === 'New' ? 'active' : ''}`} onClick={() => handleFilterTypeChange('New')}> New ({vehicleCounts.new})</span>
                    <span className={`filter-option ${filterType === 'Used' ? 'active' : ''}`} onClick={() => handleFilterTypeChange('Used')} >Used ({vehicleCounts.used})</span>
                </div>
            </div>
        </>
    );
};

export default FilterBar;
