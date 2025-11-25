import React from "react";
import { Link } from "react-router";

const Card = ({ food }) => {
  const {
    foodImage,
    foodName,
    donatorName,
    donatorImage,
    quantity,
    pickupLocation,
    expireDate,
    _id,
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
          <p className="">
            <span className="font-semibold">Donated by:</span> {donatorName}
          </p>
          <img
            src={donatorImage}
            className="w-15 h-15 rounded-full"
            alt={donatorName}
          />
        </div>

        <div className="flex justify-between items-center gap-5 ">
          <p className="text-sm text-gray-800">
            {" "}
            <span className="font-semibold">Quantity:</span> {quantity}
          </p>
          <p className="text-sm text-gray-800">
            <span className="font-semibold">Expire Date:</span> {expireDate}
          </p>
        </div>

        <p className="text-sm text-gray-800">
          <span className="font-semibold">Location:</span> {pickupLocation}
        </p>

        <Link
          to={`/food-details/${_id}`}
          className="btn bg-green-700 text-white w-full flex items-center mt-2"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
