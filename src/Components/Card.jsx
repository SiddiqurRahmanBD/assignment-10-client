import React from "react";
import { CgCalendarDates } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { MdProductionQuantityLimits } from "react-icons/md";
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
        <div className="flex items-center gap-2 pb-3">
          <img
            src={donatorImage}
            className="w-10 h-10 rounded-full"
            alt={donatorName}
          />
          <p className="">
            <span className="font-semibold">Donated by:</span> {donatorName}
          </p>
        </div>

        <div className="flex justify-between items-center gap-5 pb-2">
          <p className="text-sm text-gray-800 flex gap-2">
            {" "}
            <span className="font-semibold flex items-center">
              {" "}
              <MdProductionQuantityLimits size={15} color="green" />
              Quantity:
            </span>{" "}
            {quantity}
          </p>
          <p className="text-sm text-gray-800 flex gap-2">
            <span className="font-semibold flex items-center">
              <CgCalendarDates size={15} color="green" />
              Expires on:
            </span>{" "}
            {expireDate}
          </p>
        </div>

        <p className="text-sm text-gray-800 flex gap-2">
          <span className="font-semibold flex items-center">
            {" "}
            <CiLocationOn size={15} color="red" /> Location:
          </span>{" "}
          {pickupLocation}
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
