import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';

const AddFood = () => {
    const {user} = useContext(AuthContext)
     const [loading, setLoading] = useState(false);

     const handleAddFood = async (e) => {
       e.preventDefault();
       setLoading(true);

       const form = e.target;
       const foodName = form.foodName.value;
       const quantity = Number(form.quantity.value);
       const pickupLocation = form.pickupLocation.value;
       const expireDate = form.expireDate.value;
       const notes = form.notes.value;
       const foodImage = form.foodImage.value;

       const newFood = {
         foodName,
         foodImage,
         quantity,
         pickupLocation,
         expireDate,
         additionalNotes: notes,
         food_status: "Available", // default
         donatorName: user.displayName,
         donatorEmail: user.email,
         donatorImage: user.photoURL,
         createdAt: new Date(),
       };

         axios
           .post("http://localhost:3000/add-food",newFood)

           .then((res) => {
             toast.success("Food added successfully!");
             console.log(res.data);
           })
           .catch((err) => {
             console.log(err);
           });

       setLoading(false);
     };
    return (
      <div className="max-w-2xl mx-auto p-5 bg-white shadow-lg rounded-md my-20">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-600">
         Add Food
        </h2>

        <form onSubmit={handleAddFood} className="space-y-4">
          {/* Food Name */}
          {/* <label className="block mb-2">Food Name</label> */}
          <input
            type="text"
            name="foodName"
            placeholder="Enter Food's Name"
            required
            className="input input-bordered w-full"
          />

          {/* Food Image */}
          {/* <label className="block mb-2">Food Image</label> */}
          <input
            type="text"
            name="foodImage"
            placeholder=" Food Image (URL)"
            required
            className="input input-bordered w-full"
          />

          {/* Quantity */}
          {/* <label className="block mb-2">Food Quantity</label> */}
          <input
            type="number"
            name="quantity"
            step="1"
            max="25"
            min="0"
            placeholder="Enter Food's Quantity"
            required
            className="input input-bordered w-full"
          />

          {/* Pickup Location */}
          {/* <label className="block mb-2">Pickup Location</label> */}
          <input
            type="text"
            name="pickupLocation"
            placeholder="Enter Pickup Location"
            required
            className="input input-bordered w-full"
          />

          {/* Expire Date */}
          {/* <label className="block mb-2">Expire Date</label> */}
          <input
            type="date"
            name="expireDate"
            required
            className="input input-bordered w-full"
          />

          {/* Notes */}
          {/* <label className="block mb-2">Additional Notes</label> */}
          <textarea
            name="notes"
            rows="5"
            className="input input-bordered w-full mb-4"
            placeholder="Addional Notes (Optional)"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white px-6 py-2 rounded w-full"
          >
            {loading ? "Uploading..." : "Add Food"}
          </button>
        </form>
      </div>
    );
};

export default AddFood;