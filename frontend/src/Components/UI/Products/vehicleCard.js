
// VehicleCard.js
import React from "react";

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="relative">
        <img
          src={vehicle.image}
          alt={vehicle.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
          Featured
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 truncate">
          {vehicle.title}
        </h3>
        <p className="text-orange-600 font-bold text-xl">${vehicle.price}</p>
        <div className="flex flex-wrap gap-2 text-sm text-gray-600 mt-2">
          <span>{vehicle.year}</span>
          <span>{vehicle.mileage} miles</span>
          <span>{vehicle.transmission}</span>
          <span>{vehicle.fuelType}</span>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
