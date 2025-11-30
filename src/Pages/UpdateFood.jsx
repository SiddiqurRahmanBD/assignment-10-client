import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

const UpdateFood = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://assignment-10-server-beta-lime.vercel.app/food-details/${id}`
      )
      .then((res) => {
        console.log("Backend Response:", res.data);
        setDetails(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdateFood = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const foodName = form.foodName.value;
    const quantity = Number(form.quantity.value);
    const pickupLocation = form.pickupLocation.value;
    const expireDate = form.expireDate.value;
    const notes = form.notes.value;
    const foodImage = form.foodImage.value;

    const updateFood = {
      foodName,
      foodImage,
      quantity,
      pickupLocation,
      expireDate,
      additionalNotes: notes,
      food_status: "Available",
      createdAt: new Date(),
    };
    console.log(updateFood);
    axios
      .put(
        `https://assignment-10-server-beta-lime.vercel.app/update-food/${id}`,
        updateFood
      )

      .then((res) => {
        toast.success("Food Update successfully!");
        console.log(res.data);
        navigate("/manage-my-foods");
      })
      .catch((err) => {
        console.log(err);
      });

    setLoading(false);
  };
  return (
    <div className="flex justify-center items-center py-10 px-4">
      <div className="max-w-xl w-full bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-600">
          Update Food
        </h2>

        {/* Form */}
        <form onSubmit={handleUpdateFood} className="space-y-2">
          <label className="block mb-2">Food Name:</label>
          <input
            defaultValue={details?.foodName}
            name="foodName"
            placeholder="Food Name"
            className="input input-bordered w-full"
          />
          <label className="block mb-2">Food Image:</label>
          <input
            defaultValue={details?.foodImage}
            name="foodImage"
            placeholder="Food Image URL"
            className="input input-bordered w-full"
          />
          <label className="block mb-2">Food Quantity:</label>
          <input
            defaultValue={details?.quantity}
            name="quantity"
            placeholder="Quantity"
            className="input input-bordered w-full"
          />
          <label className="block mb-2">Pickup Location:</label>
          <input
            defaultValue={details?.pickupLocation}
            name="pickupLocation"
            placeholder="Pickup Location"
            className="input input-bordered w-full"
          />
          <label className="block mb-2">Expire Date:</label>
          <input
            defaultValue={details?.expireDate}
            type="date"
            name="expireDate"
            placeholder="Expire Date"
            className="input input-bordered w-full"
          />
          <label className="block mb-2">Additional Notes:</label>
          <textarea
            defaultValue={details?.additionalNotes}
            name="notes"
            rows="5"
            className="input input-bordered w-full mb-4"
            placeholder="Addional Notes (Optional)"
          ></textarea>

          <button className="btn bg-green-600 text-white w-full mt-4">
            {loading ? "Uploading..." : "Add Food"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateFood;
