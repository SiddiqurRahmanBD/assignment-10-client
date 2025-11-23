import React from "react";

const Card = ({ food }) => {
  const {
    foodImage,
    foodName,
    donatorName,
    donatorImage,
    quantity,
    pickupLocation,
    expireDate,
    additionalNotes,
  } = food;
  return (
    <div className="card shadow-md hover:scale-105 transition">
      <img
        src={foodImage}
        alt={foodName}
        className="rounded-t-lg h-50 overflow-hidden"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-center">{foodName}</h2>
        <div className="flex justify-between items-center">
          <p className="font-semibold">Donator: {donatorName}</p>
          <img
            src={donatorImage}
            className="w-15 h-15 rounded-full"
            alt={donatorName}
          />
        </div>
        
          <div className="flex justify-between items-center gap-5 ">
            <p className="text-sm text-gray-800">Quantity: {quantity}</p>
            <p className="text-sm text-gray-800">Expire Date: {expireDate}</p>
          </div>

        <p className="text-sm text-gray-800">Location: {pickupLocation} </p>

        <button className="btn bg-green-700 text-white w-full flex items-center mt-2">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
