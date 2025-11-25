import React, { useState } from "react";
import axios from "axios";

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

      alert("Food request submitted successfully!");
      setShowModal(false);
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <div className="card bg-base-100 w-3/4 md:w-1/2 shadow-xl mx-auto my-10">
        <figure>
          <img
            src={foodImage}
            alt={foodName}
            className="w-full h-64 object-cover rounded-t-xl"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{foodName}</h2>

          <div className="flex items-center gap-3 my-2">
            <img
              src={donatorImage}
              alt={donatorName}
              className="w-12 h-12 rounded-full border"
            />
            <p className="font-medium">Donated by: {donatorName}</p>
          </div>

          <p>
            <strong>Quantity:</strong> {quantity} portions
          </p>

          <p>
            <strong>Pickup Location:</strong> {pickupLocation}
          </p>

          <p>
            <strong>Expires on:</strong> {expireDate}
          </p>

          {additionalNotes && (
            <p className="italic mt-2">
              <strong>Notes:</strong> {additionalNotes}
            </p>
          )}

          <div className="card-actions justify-end mt-4">
            <button
              className="btn btn-primary"
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
            <h3 className="font-bold text-lg">Request this food</h3>

            <p className="py-4">Why do you want this food?</p>

            <textarea
              value={requestNote}
              onChange={(e) => setRequestNote(e.target.value)}
              className="textarea textarea-bordered w-full"
              placeholder="Write a short message..."
            />

            <div className="modal-action">
              <button onClick={handleRequestFood} className="btn btn-primary">
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
