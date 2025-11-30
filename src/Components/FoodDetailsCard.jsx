import React, { useContext, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { CgCalendarDates, CgNotes } from "react-icons/cg";
import { MdProductionQuantityLimits } from "react-icons/md";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

const FoodDetailsCard = ({ detail }) => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useContext(AuthContext);

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
    food_status,
  } = detail;

  const handleRequestFood = (e) => {
    e.preventDefault();

    const form = e.target;
    const location = form.location.value;
    const reason = form.reason.value;
    const contact = form.contact.value;

    const info = {
      location,
      reason,
      contact,
      userEmail: user?.email,
      userName: user?.displayName,
      userPhoto: user?.photoURL,

      foodId: detail._id,
      status: "pending",
    };
    console.log(info);

    axios
      .post(
        "https://assignment-10-server-beta-lime.vercel.app/request-food",
        info
      )
      .then((res) => {
        toast.success("Food requested successfully!");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="card  md:w-9/12 shadow-xl mx-auto my-5 md:my-10">
        <figure className="relative">
          <img
            src={foodImage}
            alt={foodName}
            className="w-full h-70 md:h-100 object-cover rounded-t-xl"
          />
          <div className="absolute left-5 top-5">
            <h1 className=" bg-green-800 rounded-2xl py-2 px-3 font-semibold text-white">
              {food_status}
            </h1>
          </div>
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
              <strong className="flex items-center">
                <CgNotes size={20} color="green" /> Notes:
              </strong>{" "}
              {additionalNotes}
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
        <div className="fixed inset-0  bg-opacity-40 flex justify-center items-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
            <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">
              Request This Food
            </h3>

            <p className="text-gray-600 text-center mb-6">
              Please provide your information to request this food.
            </p>

            <form onSubmit={handleRequestFood}>
              <div className="space-y-4">
                <div>
                  <label className="font-semibold mb-1 block">
                    Your Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    className="input input-bordered w-full"
                    placeholder="Enter Your Location"
                  />
                </div>

                <div>
                  <label className="font-semibold mb-1 block">
                    Why do you need this food?
                  </label>
                  <textarea
                    name="reason"
                    className="textarea textarea-bordered w-full"
                    placeholder="Write a short message..."
                    rows={3}
                  />
                </div>

                <div>
                  <label className="font-semibold mb-1 block">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    name="contact"
                    className="input input-bordered w-full"
                    placeholder="01XXXXXXXXX"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="submit"
                  className="btn bg-green-700 hover:bg-green-800 text-white px-6"
                >
                  Send Request
                </button>
                <button
                  className="btn px-6"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FoodDetailsCard;
