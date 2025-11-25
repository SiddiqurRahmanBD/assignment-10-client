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
       const quantity = form.quantity.value;
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

       // 3️⃣ Send data to backend
         axios
           .post("http://localhost:3000/add-food",newFood)

           .then((res) => {
             toast.success("Food added successfully!");
             console.log(res.data);
           })
           .catch((err) => {
             console.log(err);
           });
      //  const res = await fetch("http://localhost:3000/add-food", {
      //    method: "POST",
      //    headers: { "Content-Type": "application/json" },
      //    body: JSON.stringify(newFood),
      //  });

      //  const data = await res.json();

      //  if (data.insertedId) {
        
      //    form.reset();
      //  }

       setLoading(false);
     };
    return (
      <div className="max-w-2xl mx-auto p-5 bg-white shadow-lg rounded-md my-20">
        <h2 className="text-2xl text-center font-bold mb-4">Add New Food</h2>

        <form onSubmit={handleAddFood}>
          {/* Food Name */}
          <label className="block mb-2">Food Name</label>
          <input
            type="text"
            name="foodName"
            placeholder="Enter Food's Name"
            required
            className="w-full border p-2 mb-4 rounded"
          />

          {/* Food Image */}
          <label className="block mb-2">Food Image</label>
          <input
            type="text"
            name="foodImage"
            placeholder='Image URL'
            required
            className="w-full border p-2 mb-4 rounded"
          />

          {/* Quantity */}
          <label className="block mb-2">Food Quantity</label>
          <input
            type="number"
            name="quantity"
            step="1"
            max="25"
            min="0"
            placeholder="Enter Food's Quantity"
            required
            className="w-full border p-2 mb-4 rounded"
          />

          {/* Pickup Location */}
          <label className="block mb-2">Pickup Location</label>
          <input
            type="text"
            name="pickupLocation"
            placeholder="Enter Pickup Location"
            required
            className="w-full border p-2 mb-4 rounded"
          />

          {/* Expire Date */}
          <label className="block mb-2">Expire Date</label>
          <input
            type="date"
            name="expireDate"
            required
            className="w-full border p-2 mb-4 rounded"
          />

          {/* Notes */}
          <label className="block mb-2">Additional Notes</label>
          <textarea
            name="notes"
            rows="3"
            className="w-full border p-2 mb-4 rounded"
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