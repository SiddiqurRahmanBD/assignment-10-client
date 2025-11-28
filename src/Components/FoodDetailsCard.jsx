import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {CiLocationOn } from "react-icons/ci";
import { CgCalendarDates, CgNotes } from "react-icons/cg";
import { MdProductionQuantityLimits } from "react-icons/md";

const FoodDetailsCard = ({ detail }) => {
  const [showModal, setShowModal] = useState(false);
  const [requestNote, setRequestNote] = useState("");

  if (!detail) return null;

  const {
    foodImage,
    foodName,
    donatorName,
    donatorImage,
    quantity,
    pickupLocation,
    expireDate,
    additionalNotes,
    _id,
  } = detail;

  // Handle Submit
  const handleRequestFood = async () => {
    try {
      const payload = {
        foodId: _id,
        message: requestNote,
      };

      const res = await axios.post(
        "http://localhost:3000/request-food",
        payload
      );

      console.log("Request sent:", res.data);

      toast.success("Food request submitted successfully!");
      setShowModal(false);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <div className="card  md:w-9/12 shadow-xl mx-auto my-5 md:my-10">
        <figure>
          <img
            src={foodImage}
            alt={foodName}
            className="w-full h-70 md:h-100 object-cover rounded-t-xl"
          />
        </figure>

        <div className="m-5 md:m-10 ">
          <h2 className="card-title text-2xl font-bold md:flex justify-center">
            {foodName}
          </h2>

          <div className="md:flex items-center justify-between">
            <div className="flex justify-center items-center gap-3 my-2 ">
              <img
                src={donatorImage}
                alt={donatorName}
                className="w-12 h-12 rounded-full border"
              />
              <p className="font-medium"> Donated by: {donatorName}</p>
            </div>

            <p className="flex gap-2">
              <strong className="flex items-center">
                <MdProductionQuantityLimits size={20} color="green" />
                Quantity:
              </strong>{" "}
              {quantity}
            </p>
          </div>

          <div className="md:flex justify-between items-center">
            <p className="flex gap-2">
              <strong className="flex items-center">
                <CiLocationOn size={20} color="red" /> Pickup Location:
              </strong>
              {pickupLocation}
            </p>

            <p className="flex gap-2">
              <strong className="flex items-center">
                <CgCalendarDates size={20} color="green" /> Expires on:
              </strong>{" "}
              {expireDate}
            </p>
          </div>
            <p className="border-b-2 pt-5 text-gray-300"></p>
          {additionalNotes && (
            <p className="mt-5 md:mt-10 flex gap-2">
              <strong className="flex items-center"><CgNotes size={20} color="green"/> Notes:</strong> {additionalNotes}
            </p>
          )}

          <div className="card-actions justify-end mt-4">
            <button
              className="btn bg-green-700 text-white"
              onClick={() => setShowModal(true)}
            >
              Request This Food
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg ">Request this food</h3>

            <p className="py-4">Why do you want this food?</p>

            <textarea
              value={requestNote}
              onChange={(e) => setRequestNote(e.target.value)}
              className="textarea textarea-bordered w-full"
              placeholder="Write a short message..."
            />

            <div className="modal-action">
              <button
                onClick={handleRequestFood}
                className="btn bg-green-700 text-white"
              >
                Send Request
              </button>
              <button className="btn" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FoodDetailsCard;
